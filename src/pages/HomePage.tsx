import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../layout/Header";

export function HomePage() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
