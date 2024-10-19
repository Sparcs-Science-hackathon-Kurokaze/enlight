"use client";
import BackButton from "@/components/atom/BackBotton";
import PageTitle from "@/components/atom/PageTitle";
import SenarioItem from "@/components/molecule/SenarioItem";
import { scenarios } from "@/constants/category";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function CategoryPage() {
  const { category } = useParams();
  const categoryItems = useMemo(() => {
    return scenarios[category as string];
  }, [scenarios]);
  // const categoryItems = scenarios["biology"];

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-base font-noto">
      <div className="absolute top-6 left-6">
        <BackButton />
      </div>
      <div className="py-[100px]">
        <PageTitle title={"생물학"} />
      </div>
      <div className="grid grid-cols-3 gap-10 px-50">
        {categoryItems.map((chapter) => (
          <SenarioItem
            key={chapter.id}
            src={`/icon/${chapter.id}.png`} // 아이콘 경로 설정
            title={chapter.title}
            // progress={50} // progress 값 임시 설정 (필요 시 변경)
            onClick={() => alert(`Navigating to ${chapter.title}`)}
            progress={0}
          />
        ))}
      </div>
    </div>
  );
}
