import { Stack, Typography } from "@mui/material";
import { JSX } from "react";

export function QuizSelector(): JSX.Element {
  return (
    <Stack>
      <Typography variant="h4">Quizzes</Typography>
      <Typography variant="body1" pr={8}>
        Ready to test your aviation knowledge? Whether you're a seasoned pilot or an aviation enthusiast,
        these quizzes are the perfect way to challenge yourself and learn something new.
      </Typography>
    </Stack>
  )
};
