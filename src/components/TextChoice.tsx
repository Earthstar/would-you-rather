import { Component } from "react";
import { Choice } from "../types";

export interface TextChoiceProps {
  text: string;
  onClick: () => void;
}

export default function TextChoice(question: TextChoiceProps) {
  return (
    <>
    <button onClick={question.onClick} className="flex flex-col justify-center m-8 border-2 rounded-lg bg-green-700">
      <p className="p-8 text-slate-50">{question.text}</p>
    </button>
    </>
  );
}
