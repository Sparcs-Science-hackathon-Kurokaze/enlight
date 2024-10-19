"use client";
import BackButton from "@/components/atom/BackBotton";
import Book from "@/components/atom/Book";
import PageTitle from "@/components/atom/PageTitle";
import { scenarios } from "@/constants/category";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function ScenarioPage() {
  const { category, scenario: scenarioId } = useParams();

  const scenarioItem = useMemo(() => {
    return scenarios[category as string][parseInt(scenarioId as string)];
  }, [scenarioId]);

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
          console.log(i > 2)
          return <Book key={i} number={i + 1} title={chapter} isClear={ i < 3}></Book>;
        })}
      </div>
    </div>
  );
}
