import { useLogin } from "@/hooks/useLogin";

export default function LogoutButton() {
  const { logout } = useLogin();

  return (
    <button
      onClick={logout}
      className="absolute top-6 right-6 text-blue-600 hover:text-blue-800"
    >
      <img src="/icon/logout.svg" alt="Logout" className="w-6 h-6" />
    </button>
  );
}
