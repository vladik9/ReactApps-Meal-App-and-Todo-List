import React from "react";
import FunctionalComponent from "./FunctionalComponent/FunctionalComponent";
import { InitialValueProvider } from "./context/context";

export default function App() {
  return (
    <InitialValueProvider>
      <FunctionalComponent />
    </InitialValueProvider>
  );
}
