import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "@remix-run/react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = isLogin ? await axios.post("/api/auth/login", data) : await axios.post("/api/auth/signup", data);
      navigate("/");
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div className="auth-page">
      <Typography variant="h4">{isLogin ? "Login" : "Sign Up"}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Email" {...register("email", { required: true })} error={!!errors.email} fullWidth />
        <TextField label="Password" type="password" {...register("password", { required: true })} error={!!errors.password} fullWidth />
        <Button variant="contained" color="primary" type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>
      <Button variant="text" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
      </Button>
    </div>
  );
};

export default AuthPage;
