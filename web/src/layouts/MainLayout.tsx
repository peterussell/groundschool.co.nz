import { JSX } from "react";
import { Outlet } from '@tanstack/react-router';

import { GSAppBar } from "./components/GSAppBar";
import { Container } from "@mui/material";

export function MainLayout(): JSX.Element {
  return (
    <>
      <GSAppBar />
      <Container maxWidth='md'>
        <Outlet />
      </Container>
      
    </>
  )
};
