type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-normal text-text rounded hover:bg-selection transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs"
    >
      {text}
    </button>
  );
}