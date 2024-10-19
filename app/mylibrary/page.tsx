"use client";
import BackButton from "@/components/atom/BackBotton";
import LogoutButton from "@/components/atom/LogOutButton";
import PageTitle from "@/components/atom/PageTitle";
import IconItem from "@/components/molecule/IconItem";
import { categories } from "@/constants/category";
import { useRouter } from "next/navigation";

export default function MyLibrary() {
  const router = useRouter();

  const goCategory = (category: string) => {
    if (category !== "biology") {
      category = "error";
      router.push(`/${category}`);
    } else {
    router.push(`/mylibrary/${category}`);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-base font-noto bg-base">
      <LogoutButton />
      <div className="py-[100px]">
        <PageTitle title="내 서재" />
      </div>
      <div className="grid grid-cols-4 gap-[30px] text-center">
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
