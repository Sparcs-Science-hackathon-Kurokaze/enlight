"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { useLogin } from "@/hooks/useLogin";

export default function Home() {
  const { isLoggedIn } = useLogin(); // 로그인 상태를 확인
  const router = useRouter();

  // 컴포넌트가 마운트되면 2초 후 로그인 상태에 따라 페이지 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        router.push("/mylibrary");
      } else {
        router.push("/login");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoggedIn, router]);

  return (
    <div className="flex justify-center items-center min-h-screen space-x-4 bg-base">
      <img src="/logo.png" alt="App Logo" className="w-60 h-60" />
    </div>
  );
}
