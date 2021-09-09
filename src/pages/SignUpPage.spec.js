import App from "../App.svelte";
import SignUpPage from "./SignUpPage.svelte";
import { render, screen } from "@testing-library/svelte";
import '@testing-library/jest-dom'

it("has a Sign  Up header", () => {
  render(App);
  const header = screen.getByRole("heading", { name: "Sign Up" });
  //expect(header).toBeTruthy();
  expect(header).toBeInTheDocument();
});
