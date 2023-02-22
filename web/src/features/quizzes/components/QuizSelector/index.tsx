
import { ReactNode, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";

import { Exam, ExamSimulatorConfig, LicenseType } from "models";
import { useExamState } from "features/exams/store";

import { QuizSelectorCard } from "features/quizzes/components";
import useStyles from "./quizSelectorStyle";

export const QuizSelector = () => {
  const classes = useStyles();

  const [redirect, setRedirect] = useState<string | null>(null);

  const {
    exams,
    loadExams,
    setExamConfig
  } = useExamState();

  useEffect(() => {
    loadExams();
  }, []);

  const handleCardClick = (exam: Exam) => {
    const config: ExamSimulatorConfig = {
      exam: exam,
      duration: exam.aspeqExamInfo.durationMinutes,
      numberOfQuestions: exam.aspeqExamInfo.numberOfQuestions,
      isQuiz: true
    }

    setExamConfig(config);
    setRedirect("/exams/sit");
  };

  const getQuizCards = (exams?: Exam[]): ReactNode => {
    const matchingExams = exams?.filter((e: Exam) => (
      e.licenseType.toLowerCase() === "quiz"
    ));

    if (!matchingExams?.length) {
      return <Typography variant="body1">No exams found</Typography>
    }

    return (
      <Grid container spacing={4}>
        {matchingExams.map((e: Exam) => (
          <Grid item xs={12} sm={6} md={4} key={e.id}>
            <QuizSelectorCard exam={e} onClick={(e: Exam) => { handleCardClick(e); }} />
          </Grid>
        ))}
      </Grid>
    );
  };

  if (redirect) {
    return <Redirect push to={redirect} />;
  }

  return (
    <>
     <Typography variant="h4">Quizzes</Typography>

      <Box mb={3}>
        <Grid container>
          <Grid item md={10}>
            <Typography variant="body1">
              Ready to test your aviation knowledge? Whether you're a seasoned pilot or an aviation enthusiast,
              these quizzes are the perfect way to challenge yourself and learn something new.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid item xs={12}>
          {getQuizCards(exams)}
        </Grid>
      </Grid>
    </>
  );
};
