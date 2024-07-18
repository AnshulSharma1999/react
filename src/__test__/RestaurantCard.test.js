import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Component/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMockData.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with props Data", () => {
  render(<RestaurantCard restData={MOCK_DATA} />);
  const resCard = screen.getByText("Wow! Momo");
  expect(resCard).toBeInTheDocument();
});
