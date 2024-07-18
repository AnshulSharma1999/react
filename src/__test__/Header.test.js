import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Component/Header";
import { Provider } from "react-redux";
import appStore from "../utillity/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LogInButton = screen.getByRole("button", { name: "LogIn" });
  expect(LogInButton).toBeInTheDocument();
});

it("Should render header component with a Cart Items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart - (0 items)");
  expect(cartItem).toBeInTheDocument();
});

it("Should render header component with a Cart item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("Should change Login Button to Logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LogInButton = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(LogInButton);
  const LogOutButton = screen.getByRole("button", { name: "LogOut" });
  expect(LogOutButton).toBeInTheDocument();
});
