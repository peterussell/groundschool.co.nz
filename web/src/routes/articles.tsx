import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/articles')({
  component: About
});

function About() {
  return <div><h3>[articles]</h3></div>
}
