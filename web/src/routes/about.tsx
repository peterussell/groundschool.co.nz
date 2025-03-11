import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About
});

function About() {
  return <div><h3>[about]</h3></div>
}
