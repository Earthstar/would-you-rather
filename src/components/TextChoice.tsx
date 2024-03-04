import {Component} from "react";
import {Choice} from "../types";

export interface TextChoiceProps {
    text: string
    onClick: () => void
}

export default function TextChoice (question: TextChoiceProps) {
    return (
        <div>
            <p>{question.text}</p>
            <button onClick={question.onClick}>Press me!</button>
        </div>
    )
}