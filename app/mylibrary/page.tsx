"use client";
import PageTitle from "@/components/atom/PageTitle";
import IconItem from "@/components/molecule/IconItem";
import { categories } from "@/constants/category";
import { useRouter } from "next/navigation";

export default function MyLibrary() {
  const router = useRouter();

  const goCategory = (category: string) => {
    router.push(`./${category}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="py-[140px]">
        <PageTitle title="내 서제" />
      </div>
      <div className="grid grid-cols-4 gap-[140px]">
        {categories.map((c, i) => {
          return <IconItem src="/logo.png" title={c} />;
        })}
      </div>
    </div>
  );
}
