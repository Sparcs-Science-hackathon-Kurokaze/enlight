"use client"; 
import BackButton from "@/components/atom/BackBotton";
import Image from "next/image";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
      {/* Header 영역 - BackButton */}
      <div className="absolute top-6 left-6">
        <BackButton />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 w-[400px]">
        {/* 메시지와 로켓 아이콘 */}
        <div className="flex flex-col items-center">
          <Image
            src="icon/preparing.svg" // 로켓 아이콘 파일 경로
            alt="Rocket"
            width={50}
            height={50}
            className="mb-4"
          />
          <p className="text-center text-point font-bold text-xl">
            여러분을 만나기 위해서<br />
            열심히 달려가고 있어요!
          </p>
          <p className="text-center text-point mt-2">
            조금만 기다려주세요!
          </p>
        </div>
      </div>
    </div>
  );
}
