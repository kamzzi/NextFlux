import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("Example", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(/App!/i);
});
