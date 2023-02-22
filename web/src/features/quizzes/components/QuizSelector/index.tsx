
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

  const [tabIndex, setTabIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);

  useEffect(() => {
    loadExams();
  }, []);

  const handleCardClick = (exam: Exam) => {
    setSelectedExam(exam);
    setShowDialog(true);
  };

  const handleStartExam = (config: ExamSimulatorConfig) => {
    // TODO - this should just go straight to the quiz
    setExamConfig(config);
    setRedirect("/exams/sit");
  };

  const getCardsForLicenseType = (
    licenseType: LicenseType, exams?: Exam[]
  ): ReactNode => {
    const matchingExams = exams?.filter((e: Exam) => (
      e.licenseType.toLowerCase() === licenseType.toLowerCase()
    ));

    if (!matchingExams?.length) {
      return <Typography variant="body1">No exams found</Typography>
    }

    return (
      <Grid container spacing={4}>
        {matchingExams.map((e: Exam) => (
          <Grid item xs={12} sm={6} md={4} key={e.id}>
            <QuizSelectorCard exam={e} onClick={(e: Exam) => { handleCardClick(e); }} /> {/* TODO: should go straight to the exam */}
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
              TODO: blurb to go here
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid item xs={12}>
          {getCardsForLicenseType("Quiz", exams)}
        </Grid>
      </Grid>
    </>
  );
};
