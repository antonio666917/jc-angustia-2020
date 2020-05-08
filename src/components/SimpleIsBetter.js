import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const particles = [
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Ellipse-9.svg`,
    height: 22,
    width: 22,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Ellipse-10.svg`,
    height: 28,
    width: 28,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Ellipse-11.svg`,
    height: 20,
    width: 20,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Group-3.svg`,
    height: 91,
    width: 86,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Group-4.svg`,
    height: 71,
    width: 69,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Group-6.svg`,
    height: 20,
    width: 20,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Group-7.svg`,
    height: 64,
    width: 64,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Group-8.svg`,
    height: 71,
    width: 89,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Polygon-5.svg`,
    height: 27,
    width: 27,
  },
  // {
  //   src: `${process.env.PUBLIC_URL}/particles/particle-Rectangle-18.svg`,
  //   height: 20,
  //   width: 8,
  // },
  // {
  //   src: `${process.env.PUBLIC_URL}/particles/particle-Rectangle-19.svg`,
  //   height: 36,
  //   width: 11,
  // },
  // {
  //   src: `${process.env.PUBLIC_URL}/particles/particle-Rectangle-21.svg`,
  //   height: 2,
  //   width: 36,
  // },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Vector-1.svg`,
    height: 46,
    width: 78,
  },
  {
    src: `${process.env.PUBLIC_URL}/particles/particle-Vector-2.svg`,
    height: 46,
    width: 39,
  },
];

function SimpleParticles() {
  return <div className="simple-particles">let's go</div>;
}

export default function SimpleIsBetter() {
  return (
    <section className="simple-is-better">
      <SimpleParticles />
      <Grid container spacing={0} justify="center">
        <Grid className="simple-is-better-content" item xs={12} md={7}>
          <Typography
            variant="h2"
            id="projects-anchor"
            align="center"
            paragraph
          >
            Simple Is Better
          </Typography>
          <Typography paragraph align="center">
            On my 9 years of career. I had the previlege to work with talented
            designers in comsumer products that simplify millions of people’s
            life.
          </Typography>
          <Typography align="center">
            <strong>I would like to show you some of them.</strong>
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
