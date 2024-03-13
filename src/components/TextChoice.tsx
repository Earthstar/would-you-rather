import { Component } from "react";
import { Choice } from "../types";

export interface TextChoiceProps {
  text: string;
  onClick: () => void;
  // tailwind css processing requires classes to be whole words
  color: string;
  hoverColor: string;
}

export default function TextChoice({ text, onClick, color, hoverColor }: TextChoiceProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex flex-col justify-center m-8 rounded-lg ${color} ${hoverColor}`}
      >
        <p className="p-8 text-slate-50 place-self-center">{text}</p>
      </button>
    </>
  );
}
