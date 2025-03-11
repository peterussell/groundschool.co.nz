import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <div><h3>[home]</h3></div>
  )
}
