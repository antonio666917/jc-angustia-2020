import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Photo from "../images/photo-jc-sitting.png";
import Photo2x from "../images/photo-jc-sitting-2x.png";

const AboutMeModal = function ({ isOpen, handleClose }) {
  const onClose = function (e) {
    console.log(e);
  };
  return (
    <Dialog
      className="about-me-modal"
      fullWidth={false}
      maxWidth={"xl"}
      open={isOpen}
      onBackdropClick={handleClose}
      onEscapeKeyDown={handleClose}
      onClose={onClose}
      aria-labelledby="max-width-dialog-title"
    >
      <Button className="modal-close" onClick={handleClose} color="primary">
        <CloseIcon />
      </Button>
      <DialogContent>
        <Grid
          className="aboutme-grid-container"
          container
          alignItems="flex-start"
          justify="flex-end"
        >
          <img
            className="aboutme-image"
            srcSet={`${Photo} 1x, ${Photo2x} 2x`}
            alt="Handsome afro-latino with cool glasses, sitting on a stool, smiling into the sun"
          />
          <Grid
            className="aboutme-content"
            item
            md={12}
            lg={7}
            style={{ zIndex: "1" }}
          >
            <Typography paragraph variant="h6">
              My story
            </Typography>
            <Typography paragraph>
              <strong>
                My name is Juan Angustia, a Visual Designer with a decade of
                experience; specializing in UI/UX, wireframing, and prototyping.
              </strong>
            </Typography>
            <Typography paragraph>
              I come from a small town in the Dominican Republic, called
              Constanza. Before I ever dreamt of joining Google, I went to
              college to pursue a degree in Advertising. I eventually dropped
              out to pursue my own interests. Read more about my journey via an{" "}
              <a
                href="https://medium.com/@angustia/a-latino-college-dropout-at-google-5eb2d0629710"
                target="_blank"
                rel="noopener noreferrer"
              >
                article
              </a>{" "}
              I wrote on Medium.
            </Typography>
            <Typography paragraph>
              In the Design & Technologie fields, I have 10+ years of experience
              working on projects for diverse brands such as{" "}
              <a
                href="http://design.comcast.com/team/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Comcast
              </a>
              , <>MasterCard</>, <>Copa Airlines</> and among others.
            </Typography>
            <Typography paragraph>
              Currently I work in{" "}
              <a
                href="http://duo.google.com/about/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Duo
              </a>
              and Google Meet, in our{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://careers.google.com/locations/seattle-kirkland/"
              >
                <strong>Seattle/Kirkland</strong>
              </a>{" "}
              office, but in my free time I love to work on my clothing brand design 
              {" "}
              <a
                href="https://www.murbanic.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Murbanic
              </a>
              , an urban clothing brand inspired by vibrant and positive vibes, along with 
              the energy that evolves from the creativity and individuality of us all. 
              Also, I love to make videos, like the short film{" "}
              <a
                href="https://youtu.be/4emMRsvgnyI"
                rel="noopener noreferrer"
                target="_blank"
              >
                "El Camino"
              </a>
              .
            </Typography>
            <Typography paragraph>
              As a product designer I believe in the simplicity of things: good
              product, UX, visual, and interaction not only solves problems but
              also creates an emotional experience for people by bringing
              emotion in each visual interaction.
            </Typography>
            <Typography>
              Throughout my career, I have learned that the product is most
              successful when we put people first and listen to them. As a
              designer, my goal is always to find a way to learn about people's
              needs and create emotional designs that connect, engage, and
              deliver. You want to know more, I invite you to read;{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://students.googleblog.com/2020/02/my-path-to-google-juan-angustia-visual.html"
              >
                My path to Google
              </a>
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AboutMeModal;
