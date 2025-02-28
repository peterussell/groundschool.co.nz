import { Container } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ExamResults, ExamSimulator } from "features/exams/components";
import { QuizSelector } from "features/quizzes/components";

import useStyles from "../pagesStyle";

export const QuizzesPage = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <>
      <Helmet>
        <title>Quizzes | GroundSchool NZ</title>
      </Helmet>
      <Container maxWidth="md" className={classes.bodyContainer}>
        <Switch>
          <Route path={path} component={QuizSelector} exact />
          <Route path={`${path}/sit`} component={ExamSimulator} />
          <Route path={`${path}/results`} component={ExamResults} />
        </Switch>
      </Container>
    </>
  );
};
