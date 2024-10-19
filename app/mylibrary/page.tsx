"use client";
import PageTitle from "@/components/atom/PageTitle";
import IconItem from "@/components/molecule/IconItem";
import { categories } from "@/constants/category";
import { useRouter } from "next/navigation";

export default function MyLibrary() {
  const router = useRouter();

  const goCategory = (category: string) => {
    router.push(`/mylibrary/${category}`);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-base font-sans bg-base">
      <div className="py-[100px]">
        <PageTitle title="내 서재" />
      </div>
      <div className="grid grid-cols-4 gap-[50px] text-center">
        {Object.entries(categories).map(([key, value], i) => {
          return (
            <IconItem
              key={i}
              src={`/icon/${key}.svg`}
              title={value}
              onClick={() => goCategory(key)}
            />
          );
        })}
      </div>
    </div>
  );
}
