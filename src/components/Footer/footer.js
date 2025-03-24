import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <p>&copy; {new Date().getFullYear()} SJ Sheeja. All Rights Reserved.</p>
    </footer>
  );
};


export default Footer;