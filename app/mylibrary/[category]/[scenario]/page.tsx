"use client";
import BackButton from "@/components/atom/BackBotton";
import Book from "@/components/atom/Book";
import PageTitle from "@/components/atom/PageTitle";
import { scenarios } from "@/constants/category";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ScenarioPage() {
  const router = useRouter();
  const { category, scenario: scenarioId } = useParams();

  const scenarioItem = useMemo(() => {
    return scenarios[category as string][parseInt(scenarioId as string)];
  }, [scenarioId]);

  const goChapter = (chapter: string) => {
    router.push(`/mylibrary/${category}/${scenarioId}/${chapter}`);
  };

  const [storeChapter, setStoreChapter] = useState(0);
  useEffect(() => {
    const store = localStorage.getItem(`${category}/${scenarioId}`);
    setStoreChapter(parseInt(store ?? "0"));
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-base font-sans">
      <div className="absolute top-6 left-6">
        <BackButton />
      </div>
      <div className="py-[140px]">
        <PageTitle title={scenarioItem.title} />
      </div>
      <div className="flex flex-col gap-1">
        {scenarioItem.chapters.map((chapter, i) => {
          return (
            <Book
              onClick={() => {
                goChapter(`${i}`);
              }}
              key={i}
              number={i + 1}
              title={chapter}
              isClear={i < storeChapter}
            ></Book>
          );
        })}
      </div>
    </div>
  );
}
