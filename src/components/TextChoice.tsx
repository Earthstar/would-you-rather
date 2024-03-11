import { Component } from "react";
import { Choice } from "../types";

export interface TextChoiceProps {
  text: string;
  onClick: () => void;
  color: string;
}

export default function TextChoice({ text, onClick, color }: TextChoiceProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex flex-col justify-center m-8 rounded-lg bg-${color}-700 hover:bg-${color}-500`}
      >
        <p className="p-8 text-slate-50 place-self-center">{text}</p>
      </button>
    </>
  );
}
