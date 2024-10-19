type BookProps = {
  isClear: boolean;
  number: number;
  title: string;
};
export default function Book({ isClear, number, title }: BookProps) {
  const bookColor = isClear ? 'bg-selection' : 'bg-normal';
  // const bookColor = isClear ? 'bg-normal' : 'bg-selection';
  return (
    <div className={`flex ${bookColor} rounded-s-full w-[640px] h-[60px]`}>
      <div className="flex-1 text-24pt text-text pl-16 flex items-center font-noto font-bold ">
        {`0${number}. `}
        {title}
      </div>
      <div className={`bg-point rounded-s-full w-[220px] h-[60px] flex items-center justify-end`}>
        <div className="bg-text rounded-s-[15px] w-[200px] h-[50px] "></div>
      </div>
    </div>
  );
}
