import { useState } from "react";
import { Choice } from "../types";
import TextChoice from "./TextChoice";

export interface ChoicePercentBarProps {
  value: number;
}
function ChoicePercentBar(percent: ChoicePercentBarProps) {
  return (
    <div>
      <div>{percent.value}% people picked one</div>
      <div>{100 - percent.value}% people picked two</div>
    </div>
  );
}

export default function ChoicePage(choice: Choice) {
  const [showPercent, setShowPercent] = useState(false);
  return (
    <>
      <title>Would you rather:</title>
      <TextChoice
        text={choice.first}
        onClick={() => {
          setShowPercent(true);
        }}
      />
      <TextChoice
        text={choice.second}
        onClick={() => {
          setShowPercent(true);
        }}
      />
      {showPercent && (
        <ChoicePercentBar
          data-testid="choicePercentBar"
          value={choice.percentChoosingFirst}
        />
      )}
        {!choice.isLast && (<button>Next</button>)}
    </>
  );
}
