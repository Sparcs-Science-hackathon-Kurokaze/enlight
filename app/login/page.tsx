"use client";

import BackButton from "@/components/atom/BackBotton";
import Button from "@/components/atom/Button";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
    const {login} = useLogin();
  const handleLogin = () => {
    alert("로그인 버튼이 클릭되었습니다.");
    login("true")
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base">
      <Button text="로그인" onClick={handleLogin} />
    </div>
  );
}
