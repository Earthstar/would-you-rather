import {Component} from "react";
import {Choice} from "./types";

export default class TextChoice extends Component<{ choice: Choice }> {
    render() {
        let {choice} = this.props;

        function handleClick() {
            console.log("clicked");
        }

        return (
            <div>
                <p>{choice.first}</p>
                <button onClick={handleClick}>Press me!</button>
            </div>
        )
    }
}