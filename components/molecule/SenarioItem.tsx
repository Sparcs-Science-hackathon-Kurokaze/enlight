type SenarioProps = {
    src: string;
    title: string;
    onClick?: () => void;
    progress: number;
  };
  
  export default function SenarioItem({ src, title, onClick, progress }: SenarioProps) {
    return (
      <div
        onClick={onClick}
        className="w-[270px] h-[180px] bg-white shadow-md rounded-tl-lg rounded-tr-lg flex flex-col items-center justify-between p-4 cursor-pointer gap-8 "
      >
        <div className="text-point font-noto font-bold text-lg text-center">
          {title}
        </div>
        <div className="flex-grow flex justify-center items-center">
          <img className="w-20 h-20 object-contain" src={src} alt={title} />
        </div>
        {/* 하단의 색 띠 부분 */}
        {/* TODO: Progress Bar */}
        <div className="w-full h-4 bg-gray-200 rounded-b-lg">
          <div
              className="h-full bg-point transition-all duration-300"
              style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }
  