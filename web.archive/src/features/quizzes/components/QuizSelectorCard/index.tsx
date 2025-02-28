import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";
import { School } from "@material-ui/icons";

import { Exam } from "models";
import { useExamUtils } from "utils";
import useStyles from "./quizSelectorCardStyle";

interface Props {
  exam: Exam,
  onClick?: (e: Exam) => void
};

export const QuizSelectorCard = ({ exam, onClick }: Props) => {
  const classes = useStyles();

  const { isStandardExam } = useExamUtils();

  return (
    <Card elevation={1} onClick={() => { onClick && onClick(exam); }}>
      <CardActionArea>
        <CardMedia image={`/images/exams/${exam.slug}.png`} title={exam.name} className={classes.media} />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {isStandardExam(exam.licenseType) ? exam.licenseType : null} {exam.name}
          </Typography>

          <Box mt={2} mb={1}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <School className={classes.icon} />
                <Typography variant="body2" color="secondary">
                  {exam.aspeqExamInfo.numberOfQuestions} questions / {exam.aspeqExamInfo.durationMinutes} min
                </Typography>
              </Grid>
            </Grid>

          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};
