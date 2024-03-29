import { Box, Container, Grid, Typography } from "@material-ui/core";

import { Helmet } from "react-helmet";
import useStyles from "../pagesStyle";

export const ContactPage = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Contact | GroundSchool NZ</title>
      </Helmet>

      <Container maxWidth="md" className={classes.bodyContainer}>
        <Typography variant="h4">Contact</Typography>

        <Grid container>
          <Grid item xs={10}>
            <Typography variant="body1">
              The quickest way to get in touch for support, suggestions, and feature requests
              is to send us a message on <a href="https://www.facebook.com/groundschoolnz" target="_blank">Facebook</a> or
              email <a href="mailto:info@groundschool.co.nz">info@groundschool.co.nz</a>.
              We'll respond to your query as soon as possible.
            </Typography>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h4">Social media</Typography>
        </Box>

        <Grid container>
          <Grid item xs={10}>
            <Typography variant="body1">
              Join GroundSchool NZ on Facebook and Instagram for website updates, relevant aviation content from NZ
              and abroad, and to connect with other kiwi pilots.
            </Typography>
          </Grid>
        </Grid>

        <Box m={4}>
          <Grid container spacing={3}>

            {/* Facebook */}
            <Grid item xs={1}>
              <img src="/images/contact/facebook-logo.png" alt="GroundSchool on Facebook" />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h6">
                Facebook - <a href="https://www.facebook.com/groundschoolnz" target="_blank">@groundschoolnz</a>
              </Typography>
            </Grid>

            {/* Instagram */}
            <Grid item xs={1}>
              <img src="/images/contact/instagram-logo.png" alt="GroundSchool on Instagram" />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h6">
                Instagram - <a href="https://www.instagram.com/groundschoolnz" target="_blank">@groundschoolnz</a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
