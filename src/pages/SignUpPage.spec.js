import App from "../App.svelte";
import SignUpPage from "./SignUpPage.svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
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
      const input = screen.getByLabelText("Username"); //returns element associated with label
      expect(input).toBeInTheDocument();
    });
    it("has a email input", () => {
      //const {container} = render(SignUpPage);
      //const input = container.querySelector("input");
      //expect(input).toBeInTheDocument();
      //expect(container.querySelectorAll('input').length).toBe(2)
      render(SignUpPage);
      const input = screen.getByLabelText("Email"); //returns element associated with label
      expect(input).toBeInTheDocument();
    });
    it("has a password input", () => {
      render(SignUpPage);
      const input = screen.getByLabelText("Password");
      expect(input).toBeInTheDocument();
    });
    it("has a password type input", () => {
      render(SignUpPage);
      const input = screen.getByLabelText("Password");
      expect(input.type).toBe("password");
    });
    it("has a password repeat input", () => {
      render(SignUpPage);
      const input = screen.getByLabelText("Password repeat");
      expect(input).toBeInTheDocument();
    });
    it("has a password repeat type input", () => {
      render(SignUpPage);
      const input = screen.getByLabelText("Password repeat");
      expect(input.type).toBe("password");
    });
    it("has a Sign Up button", () => {
      render(SignUpPage);
      const button = screen.getByRole("button", { name: "Sign Up" });
      expect(button).toBeInTheDocument();
    });
    it("has a Sign Up button is disabled", () => {
      render(SignUpPage);
      const button = screen.getByRole("button", { name: "Sign Up" });
      expect(button).toBeDisabled();
    });
  });
  describe("Interactions", () => {
    it("Enables the button when the password and repeat fieeldshave same value", async () => {
      render(SignUpPage);
      const passInput = screen.getByLabelText("Password");
      const passRepeatInput = screen.getByLabelText("Password repeat");
      await userEvent.type(passInput, "P4ssword");
      await userEvent.type(passRepeatInput, "P4ssword");
      const button = screen.getByRole("button", { name: "Sign Up" });
      expect(button).toBeEnabled();
    });
  });
});
