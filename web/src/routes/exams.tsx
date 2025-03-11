import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/exams')({
  component: Exams
});

function Exams() {
  return <div><h3>[exams]</h3></div>
}
