import React, { useState } from "react";
import { Link, NavLink } from "@remix-run/react";
import { Button } from "@mui/material";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HiOutlineChevronRight } from "react-icons/hi";
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import CarouselComponent from "../components/MusicCardsArc";
import Carousel from "../components/Carousel/SliderRecords";
import MasonryImageList from "../components/Masonry/masonryCategory";
import MainHeader from "../components/Header/MainHeader";
import AsideMenu from "../components/Menu/AsideMenu";
import "../styles/home.css";
import "../styles/ad-header.css";

const HomePage = () => {
  return (
    <>
      <div id="HomeWrapper">
        <div className="homepage-container">
          <section className="hero-section">
            <div className="hero-section-container">
              <div className="hero-image-overlay"></div>
              <div className="hero-image">
                <Row>
                  <Col lg={8}>
                    <div className="hero-col-wrapper">
                      <h1 className="my-3 h1 font-weight-normal text-white text-left">Olympic Certified Dance Music</h1>
                      <p className="text-white hero-desc">We have the perfect music for your olympic or dance competition. Search over 10,000 audio edits, cut to perfection.</p>
                      <div>
                        <NavLink to="/products">
                          <button className="hero-cta-button text-center">
                            Shop music&nbsp;
                            <HiOutlineChevronRight className="chevron-hero-icon" />
                          </button>
                        </NavLink>{" "}
                        <br />
                        <button className="transparent-bg text-white mt-2"> Customize your own music ?</button>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}></Col>
                </Row>
              </div>
            </div>
          </section>
          <section className="py-6">
            <Row>
              <Col lg={12}>
                <div className="hero-col-container">
                  <h1 className="my-3 h2 font-weight-normal text-white text-center">Top-tier Olympic Certified Dance Music</h1>
                  <div className="aj-cuts-samples">
                    <CarouselComponent />
                    <div className="hero-button-container">
                      <NavLink to="/products">View Music</NavLink>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
