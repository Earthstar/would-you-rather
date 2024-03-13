import {Component, useState} from "react";
import { Choice } from "../types";

export interface TextChoiceProps {
  text: string;
  onClick: () => void;
  palette: number;
}

// tailwind css processing requires classes to be whole words
const buttonPalettes = [{
  primary: "bg-blue-700",
  hover: "hover:bg-blue-500",
  selectedColor: "bg-blue-500",
  hoverBorderColor: "hover:border-black",
  selectedBorderColor: "border-black",
}, {
  primary: "bg-green-700",
  hover: "hover:bg-green-500",
  selectedColor: "bg-green-500",
  hoverBorderColor: "hover:border-black",
  selectedBorderColor: "border-black",
}]

// ({ text, onClick, palette }: TextChoiceProps)
export default class TextChoice extends Component<TextChoiceProps> {
  constructor(props: TextChoiceProps) {
    super(props);
    // this.state = {
    //   selected: false,
    // };
    this.selectChoice = this.selectChoice.bind(this);
  }
  state = {
    selected: false,
  };

  selectChoice() {
    console.log(this);
    this.setState({
      selected: true,
    });
    this.props.onClick();
  }

  componentDidUpdate(prevProps : TextChoiceProps) {
    if (prevProps.text !== this.props.text) {
      this.setState({
        selected: false
      })
    }
  }

  render() {
    const { text, onClick, palette } = this.props;
    const {
      primary,
      hover,
      selectedColor,
      hoverBorderColor,
      selectedBorderColor,
    } = buttonPalettes[palette];
    // if the button is "selected", set the color to the "hover color"
    // const [selected, setSelected] = useState(false);

    // function selectChoice() {
    //   // setSelected(true)
    //   this.state.selected = false
    //   onClick()
    // }

    return (
      <>
        <button
          onClick={this.selectChoice}
          className={`flex flex-col justify-center m-8 rounded-lg ${this.state.selected ? selectedColor : primary} ${hover} border-2 hover:border-2 ${this.state.selected ? selectedBorderColor : hoverBorderColor}`}
        >
          <p className="p-8 text-slate-50 place-self-center">{text}</p>
        </button>
      </>
    );
  }
}
