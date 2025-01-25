import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Drawer } from "@mui/material";
import FadeIn from "react-fade-in";
import "./styles/app.css";
import "./styles/cart.css";
import "./styles/bootstrap.min.css";
import "./styles/style.css";
import MobileHeader from "./components/Header/MainHeader";
import AsideMenu from "./components/Menu/AsideMenu";
import AdHeader from "./components/Header/adHeader";
import CartPage from "./pages/cart";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },

  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// export const meta: MetaFunction = () => [
//   { charset: "utf-8" },
//   { title: "Music Catalog" },
//   { name: "viewport", content: "width=device-width, initial-scale=1" },
// ];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartDrawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev: any) => !prev);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const hideDrawer = (value: boolean) => {
    setCartOpen(value);
  };

  const handleCartDrawer = (value: boolean) => {
    setCartOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (cartDrawerRef.current && !cartDrawerRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
        setCartOpen(false);
      }
    };

    if (isCartOpen || cartOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      console.log("cart open");
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCartOpen, cartOpen]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Row className="adHeader">
            <Col className="ad-head-col-left" lg={12}>
              <AdHeader title={"Quality audio cuts for your dance routine by @ajrecords"} />
            </Col>
            <Col className="ad-head-col-right" lg={12}>
              <MobileHeader isCartOpen={handleCartDrawer} toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
            </Col>
          </Row>
        </header>

        <main>
          <Outlet />
        </main>
        <AsideMenu handleNavLinkClick={handleNavLinkClick} isMobileMenuOpen={isMobileMenuOpen} />
        {/* <ProgressiveClientOnly /> */}
        <ScrollRestoration />
        <Scripts />
        <Drawer ref={cartDrawerRef} className="cart-drawer" anchor="left" open={cartOpen} onClose={() => setCartOpen(false)}>
          <CartPage removeDrawer={hideDrawer} />
        </Drawer>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
