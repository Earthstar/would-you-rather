import { useState } from "react";
import { Choice } from "../types";
import TextChoice from "./TextChoice";
import {useLoaderData} from "react-router-dom";

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

export interface ChoicePageParams {
  first: string;
  second: string;
  percentChoosingFirst: number;
  isLast?: boolean;
}

export default function ChoicePage(choicePageParams: ChoicePageParams) {
  const {first, second, percentChoosingFirst} = useLoaderData() as Choice;
  console.log(first)
  const [showPercent, setShowPercent] = useState(false);
  return (
    <>
      <title>Would you rather:</title>
      <TextChoice
        text={choicePageParams.first}
        onClick={() => {
          setShowPercent(true);
        }}
      />
      <TextChoice
        text={choicePageParams.second}
        onClick={() => {
          setShowPercent(true);
        }}
      />
      {showPercent && (
        <ChoicePercentBar
          data-testid="choicePercentBar"
          value={choicePageParams.percentChoosingFirst}
        />
      )}
        {!choicePageParams.isLast && (<button>Next</button>)}
    </>
  );
}
