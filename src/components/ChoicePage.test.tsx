import React from "react";
import { render, screen } from "@testing-library/react";
import ChoicePage, {getChoicePageParams} from "./ChoicePage";

it("does not show percent when first loaded", () => {
  render(<ChoicePage first={"foo"} second={"bar"} percentChoosingFirst={50} />);
  const percentBar = screen.queryByTestId("choicePercentBar");
  expect(percentBar).toBeNull();
});

it("does not show 'next' button when it is the last choice", () => {
    render(<ChoicePage first={"foo"} second={"bar"} percentChoosingFirst={50} isLast={true} />);
    const nextButton = screen.queryByText(/Next/i);
    expect(nextButton).toBeNull();
})

describe("getChoicePageParams", () => {
  function getTestChoices() {
    return [
      {
        "first": "Drive to work?",
        "second": "Drive to the movie theater?",
        "percentChoosingFirst": 40
      },
      {
        "first": "foo?",
        "second": "bar?",
        "percentChoosingFirst": 98
      }
    ]
  }
  it("returns first, second, and percentChoosingFirst copied from the choice", () => {
    const choicePageParams = getChoicePageParams(getTestChoices(), 0)
    expect(choicePageParams.first).toBe("Drive to work?")
    expect(choicePageParams.second).toBe("Drive to the movie theater?")
    expect(choicePageParams.percentChoosingFirst).toBe(40)
  })

  it("generates a URL to the next page", () => {
    const choicePageParams = getChoicePageParams(getTestChoices(), 0)
    expect(choicePageParams.nextUrl).toBe("choices/1")
  })

  it("does not generate a nextUrl if it is the last page", () => {
    const choicePageParams = getChoicePageParams(getTestChoices(), 1)
    expect(choicePageParams.nextUrl).toBeFalsy();
  })
})