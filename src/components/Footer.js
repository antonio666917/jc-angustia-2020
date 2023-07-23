import React from "react";
import { motion } from "framer-motion";
import {
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialDribbble,
  TiSocialVimeo,
} from "react-icons/ti";
import { FaMediumM } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Heart } from "../svg/icon-heart.svg";

export default function Footer() {
  return (
    <footer className="MuiToolbar-gutters">
      <div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/juanangustia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/juanangustiag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/juanangustia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialTwitter />
            </a>
          </li>

          <li>
            <a
              href="https://dribbble.com/juanangustia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TiSocialDribbble />
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com/juanangustia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TiSocialVimeo />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@angustia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaMediumM />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Typography
          className="copyright-text"
          variant="copyright"
          align="center"
        >
          Made with{" "}
          <motion.div
            className="beating-heart"
            initial={{ scale: 0 }}
            animate={{ scale: [1.1, 1.3, 1] }}
            transition={{
              loop: Infinity,
              ease: "easeOut",
              duration: 1.5,
            }}
          >
            <Heart className="icon-heart" />
          </motion.div>{" "}
          by Juan Angustia.
          <br className="hide-on-desktop" />
          {"  "}Copyright 2023 - All rights reserved.
        </Typography>
      </div>
      <div className="logo">
        <Logo />
      </div>
    </footer>
  );
}
