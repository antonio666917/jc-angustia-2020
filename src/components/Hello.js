import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import debounce from "lodash/debounce";
import { ReactComponent as A } from "../svg/graphic-A.svg";
import { ReactComponent as AwBottomLine } from "../svg/graphic-A-bottom-line.svg";
import JC1x from "../images/photo-jc.png";
import JC2x from "../images/photo-jc-2x.png";
import AboutMeModal from "../components/AboutMeModal";

export default function Hello() {
  const [modalOpen, setModalOpen] = useState(false);
  const [aTranslation, setaTranslation] = useState(0);
  const [aOutlineTranslation, setaOutlineTranslation] = useState(0);
  const [jcTranslation, setjcTranslation] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  const handleScroll = function (e) {
    const { scrollTop } = e.target.scrollingElement;
    setaOutlineTranslation((-100 * scrollTop) / 1000);
    setaTranslation((+200 * scrollTop) / 1000);
    setjcTranslation((-50 * scrollTop) / 1000);
  };

  const handleClick = function (e) {
    setModalOpen(true);
  };

  const handleClose = function (e) {
    setModalOpen(false);
  };

  const section = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { ease: "easeInOut", duration: 0.6 },
        opacity: { duration: 0.6 },
      },
    },
    hidden: {
      x: -60,
      opacity: 0,
      transition: {
        x: { ease: "easeInOut", duration: 0.9 },
        opacity: { duration: 0.6 },
      },
    },
  };

  const item = {
    visible: {},
    hidden: {},
  };

  useEffect(() => {
    if (inView) {
      window.addEventListener("scroll", debounce(handleScroll, 1));
      controls.start("visible");
    } else {
      window.removeEventListener("scroll", handleScroll);
      controls.start("hidden");
    }
  });

  return (
    <section className="hello" ref={ref}>
      <AboutMeModal isOpen={modalOpen} handleClose={handleClose} />
      <Grid container spacing={0}>
        <Grid className="hello-content" item xs={9} md={6}>
          <motion.div
            className="hello-content"
            initial={{
              x: -60,
              opacity: 0,
              transition: {
                x: { ease: "easeInOut", duration: 0.9 },
                opacity: { duration: 0.6 },
              },
            }}
            animate={controls}
            variants={section}
            transition={{ ease: "easeInOut", duration: 2 }}
          >
            <motion.div variants={item}>
              <Typography variant="h1" id="hello-anchor">
                Hello there!
                <br />
                I'm Juan Angustia
              </Typography>
            </motion.div>
            <motion.div variants={item}>
              <Typography paragraph>
                A Visual Designer at{" "}
                <strong>
                  <a
                    href="https://students.googleblog.com/2020/02/my-path-to-google-juan-angustia-visual.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google
                  </a>
                </strong>{" "}
                who loves to create simple designs that inspire and engage
                people. I'm an{" "}
                <strong>
                  <a
                    href="https://www.murbanic.com/our-story"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    entrepreneur,
                  </a>
                </strong>{" "}
                <strong>
                  <a
                    href="https://medium.com/@angustia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    writer
                  </a>
                </strong>
                ,{" "}
                <strong>
                  <a
                    href="https://www.murbanic.com/our-story"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    urban fashion lover
                  </a>
                </strong>
                , and proud <strong>Afro-Latino</strong>.
              </Typography>
            </motion.div>
            <motion.div variants={item}>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleClick}
              >
                About me
              </Button>
            </motion.div>
          </motion.div>
        </Grid>
        <Grid item xs={3} md={6}>
          <div className="hello-graphics">
            <motion.div
              className="hg-jc-photo"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <img
                className="hello-picture"
                srcSet={`${JC1x} 1x, ${JC2x} 2x`}
                alt="Juan Carlos Angustia, cool dude who dresses nice"
                style={{ transform: `translate(${jcTranslation}px)` }}
              />
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <A
                className="hello-a"
                style={{ transform: `translate(${aTranslation}px)` }}
              />
            </motion.div>

            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <AwBottomLine
                className="hello-a-bottom-line"
                style={{ transform: `translate(${aOutlineTranslation}px)` }}
              />
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
