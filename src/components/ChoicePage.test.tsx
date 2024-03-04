import React from "react";
import { render, screen } from "@testing-library/react";
import ChoicePage from "./ChoicePage";

it("does not show percent when first loaded", () => {
  render(<ChoicePage first={"foo"} second={"bar"} percentChoosingFirst={50} />);
  const percentBar = screen.queryByTestId("choicePercentBar");
  expect(percentBar).toBeNull();
});
