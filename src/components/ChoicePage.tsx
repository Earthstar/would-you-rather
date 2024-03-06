import { useState } from "react";
import { Choice } from "../types";
import TextChoice from "./TextChoice";
import {Link, useLoaderData} from "react-router-dom";

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

// TODO: use typescript meta types to merge with Choice
export interface ChoicePageParams {
  first: string;
  second: string;
  percentChoosingFirst: number;
  nextUrl?: string;
}

export function getChoicePageParams(choices: Choice[], id: number): ChoicePageParams {
  const {first, second, percentChoosingFirst} = choices[id];
  let nextUrl;
  if (id < choices.length - 1) {
    nextUrl = `choices/${id + 1}`
  } else {
    nextUrl = null;
  }
  let choicePageParams: ChoicePageParams = {
    first,
    second,
    percentChoosingFirst
  }

  if (id < choices.length - 1) {
    choicePageParams.nextUrl = `/choices/${id + 1}`
  }
  return choicePageParams;
}

export function ChoicePageDataWrapper() {
  const choicePageParams = useLoaderData() as ChoicePageParams;

  return (
    <>
      <ChoicePage {...choicePageParams}/>
    </>
  )
}

// useParams - gets the URL params in the component
export default function ChoicePage(choicePageParams: ChoicePageParams) {
  const [showPercent, setShowPercent] = useState(false);
  return (
    <div>
      <h1 className="text-center text-6xl">Would you rather:</h1>
      <div className="flex flex-row place-content-around">
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
      </div>
      {showPercent && (
        <>
          <ChoicePercentBar
            data-testid="choicePercentBar"
            value={choicePageParams.percentChoosingFirst}
          />
          {choicePageParams.nextUrl && (<button><Link to={choicePageParams.nextUrl}>Next</Link></button>)}
        </>
      )}
    </div>
  );
}
