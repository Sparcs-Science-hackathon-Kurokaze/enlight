"use client";
import BackButton from "@/components/atom/BackBotton";
import PageTitle from "@/components/atom/PageTitle";
import SenarioItem from "@/components/molecule/SenarioItem";
import { categories, scenarios } from "@/constants/category";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = useParams();
  const categoryItems = useMemo(() => {
    return scenarios[category as string];
  }, [scenarios]);
  const title = useMemo(() => {
    return categories[category as string];
  }, [scenarios]);

  const goScenario = (scenario: string) => {
    router.push(`/mylibrary/${category}/${scenario}`);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-base font-noto">
      <div className="absolute top-6 left-6">
        <BackButton />
      </div>
      <div className="py-[100px]">
        <PageTitle title={title} />
      </div>
      <div className="grid grid-cols-3 gap-10 px-50">
        {categoryItems.map((chapter, i) => {
          const store_chapter = localStorage.getItem(`${category}/${i}`);
          const int_store_chapter = parseInt(store_chapter ?? "0");
          const progress = (int_store_chapter / chapter.chapters.length) * 100;
          console.log(store_chapter);
          return (
            <SenarioItem
              key={chapter.id}
              src={`/icon/${chapter.id}.png`} // 아이콘 경로 설정
              title={chapter.title}
              // progress={50} // TODO: progress 값 임시 설정 (필요 시 변경)
              onClick={() => goScenario(`${chapter.id}`)}
              progress={progress}
            />
          );
        })}
      </div>
    </div>
  );
}
