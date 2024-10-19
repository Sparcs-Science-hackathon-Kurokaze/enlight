import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // next/navigation 사용

export const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // 로컬 스토리지에서 로그인 상태를 확인하는 함수
  const checkLoginStatus = () => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(token !== null);
  };

  // 로그인 함수
  const login = (token: string) => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
    router.push("/mylibrary"); // 로그인 후 mylibrary 페이지로 이동
  };

  // 로그아웃 함수
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    router.push("/login"); // 로그아웃 후 로그인 페이지로 이동
  };

  useEffect(() => {
    checkLoginStatus(); // 컴포넌트가 마운트될 때 로그인 상태 확인
  }, []);

  return { isLoggedIn, login, logout };
};
