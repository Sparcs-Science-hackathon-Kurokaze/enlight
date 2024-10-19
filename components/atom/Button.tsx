type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-36 py-2 text-24pt bg-normal text-text font-black rounded-3xl hover:bg-selection hover:text-point transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs"
    >
      {text}
    </button>
  );
}