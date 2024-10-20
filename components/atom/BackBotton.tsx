import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.push('/mylibrary');// 이전 페이지로 이동
  };

  return (
    <button
      onClick={goBack}
      className="flex items-center text-blue-600 hover:text-blue-800 font-bold p-2"
    >
      <img src="/icon/fa.svg" alt="Back" className="w-6 h-6 mr-2" />
    </button>
  );
}
