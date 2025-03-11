import { JSX } from "react";

export function Home(): JSX.Element {
  return <p>[home]</p>;
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
