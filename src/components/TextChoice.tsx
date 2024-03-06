import { Component } from "react";
import { Choice } from "../types";

export interface TextChoiceProps {
  text: string;
  onClick: () => void;
}

export default function TextChoice(question: TextChoiceProps) {
  return (
    <div className="border-2 rounded">
      <p>{question.text}</p>
      <button data-testid="choice-button" onClick={question.onClick}>Press me!</button>
    </div>
  );
}
