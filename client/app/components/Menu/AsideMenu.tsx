import React, {useState, useEffect} from "react";
import { NavLink } from "@remix-run/react"; 
import FadeIn from "react-fade-in";


interface RestrictMenu {
  isMobileMenuOpen?: boolean;
  handleNavLinkClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const AsideMenu: React.FC<RestrictMenu> = ({ isMobileMenuOpen, handleNavLinkClick }) => {
  const [user, isUser] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(isMobileMenuOpen || false);

  useEffect(() => {
    setIsMenuOpen(isMobileMenuOpen || false);
  }, [isMobileMenuOpen]);
  return (
    <>
    
      {isMobileMenuOpen && (
        <aside className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <NavLink
                  to="account"
                  className={({ isActive }) => (isActive ? "active" : "")} // Correct use of NavLink with isActive
                  onClick={handleNavLinkClick}
                >
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink to="earnings" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleNavLinkClick}>
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="history" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleNavLinkClick}>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="settings" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleNavLinkClick}>
                  Tour
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

export default AsideMenu;
