import { render, screen } from "@testing-library/react";
import Contact from "../Component/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    //query
    const heading = screen.getByRole("heading");
    // assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);
    //query
    const button = screen.getByRole("button");
    // assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load inputName inside contact component", () => {
    render(<Contact />);
    //query
    const inputName = screen.getByPlaceholderText("name");
    // assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside contact component", () => {
    render(<Contact />);
    //query
    const inputBox = screen.getAllByRole("textbox");
    // assertion
    expect(inputBox.length).toBe(2);
  });
});
