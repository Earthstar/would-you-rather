export interface TextChoiceProps {
  text: string;
  onClick: () => void;
  palette: number;
  selected: boolean;
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

export default function TextChoice(props: TextChoiceProps) {
  const { text, palette, onClick, selected } = props;
  const {
    primary,
    hover,
    selectedColor,
    hoverBorderColor,
    selectedBorderColor,
  } = buttonPalettes[palette];

  return (
    <>
      <button
        onClick={onClick}
        className={`flex flex-col justify-center m-8 rounded-lg ${selected ? selectedColor : primary} ${hover} border-2 hover:border-2 ${selected ? selectedBorderColor : hoverBorderColor}`}
      >
        <p className="p-8 text-slate-50 place-self-center">{text}</p>
      </button>
    </>
  );
}
