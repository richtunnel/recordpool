import React, { useState, useEffect, lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/index"));

const ProgressiveClientOnly = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Enable client-side rendering after the component mounts
  }, []);

  if (!isClient) {
    return null; // Render nothing during SSR
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
};

export default ProgressiveClientOnly;
