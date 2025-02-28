import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Switch,
  TextField,
  Typography
} from "@material-ui/core";

import { Exam, ExamSimulatorConfig } from "models";
import useStyles from "./examConfiguratorStyle";

interface Props {
  exam: Exam,
  onCancel: () => void,
  onStartExam: (config: ExamSimulatorConfig) => void
};

export const ExamConfigurator = ({ exam, onCancel, onStartExam }: Props) => {
  const isPremium = false; // TMP - replace when premium accounts are supported

  const classes = useStyles();

  const canSimulateAspeqExam = exam.availableQuestions >= (exam.aspeqExamInfo?.numberOfQuestions || 0);

  const [simulateAspeq, setSimulateAspeq] = useState(canSimulateAspeqExam);
  const [numQuestions, setNumQuestions] = useState(0);
  const [duration, setDuration] = useState(exam.aspeqExamInfo.durationMinutes);
  const [numQuestionsError, setNumQuestionsError] = useState<string | null>(null);

  useEffect(() => {
    const availableQuestions = getMaxAvailableQuestions();
    setNumQuestions(availableQuestions);
    updateDuration(availableQuestions);
  }, []);

  const handleSimulateExamChange = (e: any) => {
    const simulate = e.target.checked;
    setSimulateAspeq(simulate);

    if (simulate) {
      setNumQuestions(exam.aspeqExamInfo.numberOfQuestions);
      setDuration(exam.aspeqExamInfo.durationMinutes);
    }
  };

  const getMaxAvailableQuestions = () => {
    // Premium accounts can take exams with the full question bank,
    // Standard account exams are restricted to the Aspeq exam size
    return isPremium ?
      exam.availableQuestions :
      Math.min(exam.availableQuestions, exam.aspeqExamInfo.numberOfQuestions);
  };

  const handleNumQuestionsChange = (e: any) => {
    setNumQuestionsError(null);
    let newVal = e.target.value;
    if (newVal === "") { newVal = "0"; }
    if (isNaN(newVal)) { return; }

    const numVal = parseInt(newVal);
    setNumQuestions(numVal);
    updateDuration(numVal);

    // Set errors if applicable
    if (numVal < 1 || numVal > getMaxAvailableQuestions()) {
      setNumQuestionsError(`1-${getMaxAvailableQuestions()}`);
    }
  };

  const updateDuration = (n: number) => {
    const { aspeqExamInfo } = exam;
    setDuration(Math.ceil(
      (aspeqExamInfo.durationMinutes / aspeqExamInfo.numberOfQuestions) * n
    ));
  };

  const handleStartExam = () => {
    onStartExam({
      exam: exam,
      duration: duration,
      numberOfQuestions: numQuestions
    });
  };

  return (
    <>
      <Grid container spacing={2} className={classes.bodyContainer}>
        {isPremium && (
          <>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Simulate real exam</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Switch
                checked={simulateAspeq}
                onChange={handleSimulateExamChange}
                color="primary"
                className={classes.switch}
                disabled={!canSimulateAspeqExam}
              />
              {!canSimulateAspeqExam && (
                <Typography variant="body2" className={classes.hintText}>
                  Not enough questions to simulate a real exam
                </Typography>
              )}
            </Grid>
          </>
        )}

        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            Questions&nbsp;
            {(!isPremium || !simulateAspeq) && (
              <>
                (1-{getMaxAvailableQuestions()})
              </>
            )}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            variant="outlined"
            className={classes.numQuestionsInput}
            value={numQuestions === 0 ? "" : numQuestions}
            onChange={handleNumQuestionsChange}
            error={!!numQuestionsError}
            helperText={numQuestionsError}
            disabled={isPremium && simulateAspeq}
            margin="dense"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="body1">Duration</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1">{duration} minutes</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            Aspeq exam{!canSimulateAspeqExam && "*"}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1">
            {exam.aspeqExamInfo.numberOfQuestions} questions,&nbsp;
            {exam.aspeqExamInfo.durationMinutes} minutes
          </Typography>
        </Grid>

        {!canSimulateAspeqExam && (
          <>
            <Grid item xs={12} md={4}>
              {/* spacer */}
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body2">
                <i>*The question bank for this exam is currently smaller than the number
                of questions in the Aspeq exam. We're constantly adding questions,
                so please check back for updates.</i>
              </Typography>
            </Grid>
          </>
        )}

        <Grid item xs={12} md={12}>
          <Grid container spacing={2} justify="flex-end" className={classes.actionsContainer}>
            <Grid item>
              <Button onClick={onCancel}>Cancel</Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="outlined"
                onClick={handleStartExam}
                disabled={!numQuestions}
              >
                Start Exam
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};
