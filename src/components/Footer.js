import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/captain_sack">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/Divine Sackitey">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/divine-sackitey-624ab0194">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 quinsack.com</p>
    </div>
  );
}

export default Footer;
