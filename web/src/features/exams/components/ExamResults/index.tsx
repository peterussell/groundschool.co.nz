import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ResultsSummary } from "./ResultsSummary";
import { ResultsList } from "./ResultsList";
import { useExamState } from "features/exams/store";
import { useStringUtils } from "utils";

export const ExamResults = () => {
  const { capitalize } = useStringUtils();

  const { examConfig, examQuestions } = useExamState();

  if (!examConfig?.exam || !examQuestions?.length) {
    return (
      <>
      <Typography variant="body1">No exam found.</Typography>
      <Link to="/exams">
        <Typography variant="body1">Return to exams home</Typography>
      </Link>
      </>
    )
  }

  const { exam } = examConfig;

  return (
    <>
      <Typography variant="h4">
        {`${capitalize(examConfig.isQuiz ? "" : exam.licenseType)} ${exam.name}`} - Results
      </Typography>

      <ResultsSummary exam={exam} questions={examQuestions} />
      <ResultsList exam={exam} questions={examQuestions} isQuiz={examConfig.isQuiz ?? false} />
    </>
  );
};
