"use client";
import PageTitle from "@/components/atom/PageTitle";
import ContentRenderer from "@/components/molecule/ContentLayout";
import PageLayout from "@/components/organism/PageLayout";
import { scenarios } from "@/constants/category";
import { dinoChapter } from "@/constants/chapter";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function ChapterPage() {
  const router = useRouter();

  const { category, scenario: scenarioId, chapter } = useParams();
  const [current, setCurrent] = useState(0);
  const scenarioItem = useMemo(() => {
    return scenarios[category as string][parseInt(scenarioId as string)];
  }, [scenarioId]);

  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toNextPage = useCallback(() => {
    setCurrent((prev) => {
      const next = prev + 1;
      if (next === dinoChapter.length) {
        router.push(`/mylibrary/${category}/${scenarioId}/${chapter}/quiz`);
        return prev;
      }
      return next;
    });
  }, [pageRefs]);

  const pages = useMemo(
    () => dinoChapter.filter((_, i) => i <= current),
    [current]
  );

  useEffect(() => {
    const nextPageRef = pageRefs.current[pageRefs.current.length - 1];
    if (nextPageRef) {
      nextPageRef.scrollIntoView({ behavior: "smooth" });
    }
  }, [pageRefs.current.length]);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-base font-sans">
      {pages.map((contents, i) => (
        <PageLayout
          key={i}
          current={current}
          pageIndex={i}
          toNextPage={toNextPage}
          pageLength={dinoChapter.length}
          ref={(el) => {
            pageRefs.current[i] = el;
          }}
        >
          {i === 0 && (
            <div className="pt-[140px]">
              <PageTitle
                title={`0${parseInt(chapter as string) + 1}. ${
                  scenarioItem.chapters[parseInt(chapter as string)]
                }`}
              />
              <div className="w-[720px] flex-1">
                <div className="w-full h-2 rounded-full bg-point mt-2"></div>
              </div>
            </div>
          )}
          <div className="w-[720px] flex-1">
            <div className="flex flex-col items-center flex-1">
              <ContentRenderer
                contents={contents}
                category={category as string}
                scenarioId={scenarioId as string}
                chapter={chapter as string}
                pageIndex={i}
              />
            </div>
          </div>
        </PageLayout>
      ))}
    </div>
  );
}
