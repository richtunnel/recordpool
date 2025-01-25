import React, { useEffect, useState, useCallback } from "react";
import { NavLink } from "@remix-run/react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Box, CardContent, CardMedia, Grid, Button, Typography, Badge, Drawer, LinearProgress  } from "@mui/material";
import "./menu-button.css";
import "./main-header.css";
import CartIcon from "../CartIcon";
interface Menu {
  toggleMobileMenu: () => void;
  isMobileMenuOpen?: boolean;
  cartOpen? : boolean;
  isCartOpen? : any;

}

const MobileHeader: React.FC<Menu> = ({ toggleMobileMenu, isMobileMenuOpen, isCartOpen}) => {

  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

const initCartDrawer = useCallback(() => {
  setCartOpen((prev) => !prev)
    isCartOpen(cartOpen);
 
}, [cartOpen])



 
  return (
    <div className="menuWrapper">
      <Row className="main-header">
        <div className="main-header-container">
          <Col className="mh-col-left col" sm={6}>
            <a className="home-link" href="/"> <h5 className="h5 mb-0 text-white">[ <b>AJ</b> RECORDS ]</h5></a>
          </Col>

          <Col className="mh-col-right col" sm={6}>
            <div className="main-header-menu">
            <div className="d-flex cart-icon-wrapper">
            <button disabled={disabled} style={{color: "#fff"}} onClick={initCartDrawer}>
             <CartIcon />
             </button>
            </div>
              <button className={`d-flex custom-button-menu navbar-toggler ${isMobileMenuOpen ? "-menu-open" : ""}`} onClick={toggleMobileMenu}>
                <svg width="50px" height="50px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <line x1="0" y1="17" x2="48" y2="17" strokeWidth="3" />
                    <line x1="0" y1="31" x2="48" y2="31" strokeWidth="3" />
                  </g>
                  <g>
                    <line x1="0" y1="24" x2="48" y2="24" strokeWidth="3" />
                    <line x1="0" y1="24" x2="48" y2="24" strokeWidth="3" />
                  </g>
                </svg>
              </button>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default MobileHeader;
