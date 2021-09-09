import App from "../App.svelte";
import SignUpPage from "./SignUpPage.svelte";
import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";

describe("Sign Up Page", () => {
  describe("Layout", () => {
    it("has a Sign  Up header", () => {
      render(SignUpPage);
      const header = screen.getByRole("heading", { name: "Sign Up" });
      //expect(header).toBeTruthy();
      expect(header).toBeInTheDocument();
    });
    it("has a username input", () => {
      render(SignUpPage);
      //const input = screen.getByPlaceholderText('username')
      const input = screen.getByLabelText('Username')//returns element associated with label
      expect(input).toBeInTheDocument();
    });
    it("has a email input", () => {
      //const {container} = render(SignUpPage);
      //const input = container.querySelector("input");
      //expect(input).toBeInTheDocument();
      //expect(container.querySelectorAll('input').length).toBe(2)
      render(SignUpPage);
      const input = screen.getByLabelText('Email')//returns element associated with label
      expect(input).toBeInTheDocument();

    });
    it("has a password input", () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Password')
      expect(input).toBeInTheDocument();
    });
  });
});
