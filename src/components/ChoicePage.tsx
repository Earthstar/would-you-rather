import { useState } from "react";
import { Choice } from "../types";
import TextChoice from "./TextChoice";
import {Link, useLoaderData} from "react-router-dom";

export interface ChoicePercentBarProps {
  value: number;
}
function ChoicePercentBar(percent: ChoicePercentBarProps) {
  return (
    <div className="w-96 place-self-center">
      <div className="percent-info flex flex-row justify-between">
        <div className="">{percent.value}%</div>
        <div className="">{100 - percent.value}%</div>
      </div>
      {/* hack: bg-red-500 is needed for the TextChoice css */}
      <div className="percent-bar h-5 bg-green-500 w-full">
        <div className="h-5 bg-blue-700" style={{
          width: `${percent.value}%`
        }}></div>
      </div>
      <p className="my-1">{percent.value}% chose left, while {100 - percent.value}% chose right.</p>
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
    <div className="flex flex-col place-content-around">
      <h1 className="m-8 text-center text-6xl text-slate-950">Would you rather</h1>
      <div className="grid grid-cols-2 place-content-around">
        <TextChoice
          text={choicePageParams.first}
          onClick={() => {
            setShowPercent(true);
          }}
          color="blue"
        />
        <TextChoice
          text={choicePageParams.second}
          onClick={() => {
            setShowPercent(true);
          }}
          color="green"
        />
      </div>
      {showPercent && (
        <>
          <ChoicePercentBar
            data-testid="choicePercentBar"
            value={choicePageParams.percentChoosingFirst}
          />
          {choicePageParams.nextUrl &&
            (<Link
              className="flex m-8 justify-center text-slate-50 rounded-lg bg-red-700 hover:bg-red-600 text-3xl"
              to={choicePageParams.nextUrl}
              onClick={() => {
                setShowPercent(false);
              }}
            >
              <button className="p-8 place-content-center">
              Next
            </button></Link>)}
          {!choicePageParams.nextUrl && (
            <p className="place-self-center m-8">Thank you for your feedback. Your choices have been recorded.</p>
          )}
        </>
      )}
    </div>
  );
}
