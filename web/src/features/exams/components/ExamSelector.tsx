import { Stack, Typography } from "@mui/material";
import { JSX } from "react";

export function ExamSelector(): JSX.Element {
  return (
    <Stack>
    <Typography variant="h4">Practice exams</Typography>
      <Typography variant="body1" pr={8}>
      The GroundSchool question bank covers the syllabus for New Zealand's CAA flight crew exams. Use the exam
      simulator to practice sitting a full ASPEQ-style test, or select a smaller number of questions for quick review.
      </Typography>
    </Stack>
  )
};
