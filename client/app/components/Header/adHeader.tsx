import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaXTwitter, FaInstagram, FaSquareFacebook } from "react-icons/fa6";

interface Title {
  title?: string;
}

const AdHeader: React.FC<Title> = ({ title }) => {
  return (
    <div className="adHeaderDiv">
      <Row className="main-ad-header">
        <Col className="col mobile-none" lg={3}>
          <div className="ad-social-container">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaSquareFacebook />
            </a>
          </div>
        </Col>
        <Col className="col ad-col-title" lg={6}>
          <p style={{ opacity: "0.85" }} className="my-0 text-white">
            {title}
          </p>
        </Col>
        <Col className="col ad-head-col-right" lg={3}>
          <button className="text-white">Login / Register </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdHeader;
