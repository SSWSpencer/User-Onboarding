import React from 'react';
import './App.css';
import Form from "./components/Form";
import styled from "styled-components";

export default function App() {
  const Onboarding = styled.h1`
  margin-bottom: 1%;
  `

  return (
    <div className="App">
      <Onboarding>User Onboarding</Onboarding>
      <Form />
    </div>
  );
}
