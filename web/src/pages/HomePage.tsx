import { Container, Stack, Typography } from "@mui/material";
import { JSX } from "react";

import banner from '/images/landing-page/background.jpg';

export function HomePage(): JSX.Element {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '-240px',
        py: '1em',
        minHeight: '240px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100vw',
      }}>
        <Container maxWidth='sm'>
          <Stack direction="row" spacing={4} alignItems="center">
            <img src="/images/landing-page/groundschoolnz-logo-200.png" />

            <Stack>
              <Typography variant="h5" color="textSecondary">
                Welcome to Ground School
              </Typography>
              <Typography color="textSecondary" fontSize="1.4em" lineHeight="1.4em" pt={2}>
                Flight training resources to prepare for the New Zealand
                CAA aviation theory exams.
              </Typography>
            </Stack>
          </Stack>
        </Container>
    </Container>
  )
}


// import { Container, Grid, Typography } from "@material-ui/core";

// import { QuizSelector } from "features/quizzes/components";
// import { ExamSelector } from "features/exams/components";
// import useStyles from "../pagesStyle";

// export const HomePage = () => {
//   const classes = useStyles();

//   return (
//     <>
//       <Container maxWidth="xl" disableGutters className={classes.headerContainer}>
//         <Grid container justify="center" alignItems="center">

//           <Grid item className={classes.logoContainer}>
//             <img src="/images/landing-page/groundschoolnz-logo-200.png" alt="GroundSchool NZ" />
//           </Grid>

//           <Grid item className={classes.homeDescriptionContainer}>
//             <Typography variant="h5" color="textSecondary" className={classes.title}>
//               Welcome to Ground School
//             </Typography>

//             <Typography variant="h6" color="textSecondary" className={classes.description}>
//               Online flight training resources to prepare for the
//               New Zealand CAA aviation theory exams.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>

//       <ins className="adsbygoogle"
//         style={{ display: 'block' }}
//         data-ad-client="ca-pub-8590437335069489"
//         data-ad-slot="8456043275"
//         data-ad-format="auto"
//         data-full-width-responsive="true"></ins>
//       <script>
//         (adsbygoogle = window.adsbygoogle || []).push({});
//       </script>

//       <Container maxWidth="md" className={classes.bodyContainer}>
//         <QuizSelector />
//       </Container>

//       <Container maxWidth="md" className={classes.bodyContainer}>
//         <ExamSelector />
//       </Container>
//     </>
//   )
// };
