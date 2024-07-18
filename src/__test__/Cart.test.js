import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../Component/RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMockData";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utillity/appStore";
import Header from "../Component/Header";
import Cart from "../Component/Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () => render(<RestaurantMenu />));
  const hearderText = screen.getByText("Kebabs Platter and Starters (18)");
  expect(hearderText).toBeInTheDocument();
});

it("Should load 18 items in Kebabs Platter and Starters", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const hearderText = screen.getByText("Kebabs Platter and Starters (18)");
  fireEvent.click(hearderText);
  const items = screen.getAllByTestId("foodItem");
  expect(items.length).toBe(18);
});

it("Should add 1 item in card", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const hearderText = screen.getByText("Kebabs Platter and Starters (18)");
  fireEvent.click(hearderText);
  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  const cartItemCountBefore = screen.getByText("Cart - (0 items)");
  expect(cartItemCountBefore).toBeInTheDocument();
  fireEvent.click(addBtns[0]);
  const cartItemAfterCount = screen.getByText("Cart - (1 items)");
  expect(cartItemAfterCount).toBeInTheDocument();
});

it("Should add 2 item in card", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const hearderText = screen.getByText("Kebabs Platter and Starters (18)");
  fireEvent.click(hearderText);
  const cartItemCountBefore = screen.getByText("Cart - (1 items)");
  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  expect(cartItemCountBefore).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  const cartItemAfterCount = screen.getByText("Cart - (2 items)");
  expect(cartItemAfterCount).toBeInTheDocument();
});

it("Should have 2 items in Cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const cartItems = screen.getAllByTestId("foodItem");
  expect(cartItems.length).toBe(2);
});

it("Should clear cart on click of clear cart button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const cartItemsBefore = screen.getAllByTestId("foodItem");
  expect(cartItemsBefore.length).toBe(2);
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);
  const emptyCartMessage = screen.getByText(
    "Cart is empty. Please add some items."
  );
  expect(emptyCartMessage).toBeInTheDocument();
});
