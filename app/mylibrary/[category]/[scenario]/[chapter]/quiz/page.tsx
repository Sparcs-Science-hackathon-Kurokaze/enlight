"use client";
import Button from "@/components/atom/Button";
import PageTitle from "@/components/atom/PageTitle";
import { dinoQuiz } from "@/constants/quiz";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // 뒤로 가기를 위한 useRouter
import { sendMessage } from "@/utils/sendMessage";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { dinoChapter } from "@/constants/chapter";

const alphabet = ["A", "B", "C", "D"];

// 해석을 위한 Modal 컴포넌트
const Modal = ({
  isVisible,
  onClose,
  explanation,
}: {
  isVisible: boolean;
  onClose: () => void;
  explanation: string;
}) => {
  if (!isVisible) return null;

  return (
    <div className=" fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-4 flex flex-col items-center justify-center">
      <h2 className="text-point text-2xl font-bold mb-4">오답입니다!</h2>
      <p className="mb-4 text-normal">{explanation}</p> {/* 해석 표시 */}
      <Button text="닫기" onClick={onClose} />
    </div>
  );
};

export default function QuizPage() {
  const [select, setSelect] = useState<number | null>(null);
  const [hasSubmit, setHasSubmit] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false); // 모달 상태
  const router = useRouter(); // 뒤로 가기를 위한 라우터

  const { category, scenario: scenarioId, chapter } = useParams();
  const pages = useMemo(() => dinoChapter[parseInt(chapter as "0")], [chapter]);

  useEffect(() => {
    (async () => {
      const systemMessage: ChatCompletionMessageParam = {
        role: "system",
        content: "너는 과학을 문제를 제시하는 전문가야. ",
      };

      const newMessage: ChatCompletionMessageParam = {
        role: "user",
        content: JSON.stringify(pages),
      };
      const message = await sendMessage([systemMessage, newMessage]);
      console.log(message);
    })();
  },[pages]);

  const handleSubmit = useCallback(() => {
    if (select === null) return;
    setHasSubmit(true); // 제출 상태 설정
    if (quiz.answer !== select) {
      setShowModal(true); // 오답일 경우 모달을 띄운다
    }
  }, [select]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false); // 모달 닫기
  }, []);

  const quiz = useMemo(() => dinoQuiz[parseInt(chapter as "")], [chapter]);

  const handleFinish = useCallback(() => {
    // router.back(); // 뒤로 가기
    const intChapter = parseInt(chapter as string);
    const storeChapter = localStorage.getItem(`${category}/${scenarioId}`);
    const key = `${category}/${scenarioId}`;
    if (storeChapter) {
      const intStoreChapter = parseInt(storeChapter);
      if (intStoreChapter < intChapter) {
        localStorage.setItem(key, `${intChapter + 1}`);
      }
    } else {
      localStorage.setItem(key, `${intChapter + 1}`);
    }
    router.replace(`/mylibrary/${category}/${scenarioId}`);
  }, [router]);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-base font-sans">
      <div className="w-[720px] text-center pt-[120px]">
        <PageTitle title={`Quiz. ${quiz.question}`} />
        <div className="w-full h-2 rounded-full bg-point mt-2"></div>
      </div>
      <div className="flex flex-col gap-6 py-6">
        {quiz.choices.map((c, i) => {
          let txColor = "";
          let bgColor = "";
          let display = "";

          if (i === select && hasSubmit && quiz.answer === select) {
            txColor = "text-text";
            bgColor = "bg-point";
            display = "- 정답!";
          } else if (i === select && hasSubmit && quiz.answer !== select) {
            txColor = "text-point";
            bgColor = "bg-selection";
            display = "- 오답!";
          } else if (i === select && !hasSubmit) {
            txColor = "text-text";
            bgColor = "bg-point";
          } else {
            txColor = "text-text";
            bgColor = "bg-normal";
          }

          return (
            <div
              key={i}
              onClick={() => {
                if (hasSubmit) return;
                setSelect(i);
              }}
              className={`${bgColor} ${txColor} text-24pt -text px-8 min-w-72 py-2 font-noto font-bold rounded-2xl flex justify-center items-center`}
            >
              {alphabet[i]}.{c} {display}
            </div>
          );
        })}
        {/* 채점 후에는 "마무리하기"로 변경 */}
        <Button
          text={hasSubmit ? "마무리하기" : "채점하기"}
          onClick={hasSubmit ? handleFinish : handleSubmit}
        />
      </div>
      {/* 모달에 quiz의 해석 전달 */}
      <Modal
        isVisible={showModal}
        onClose={handleCloseModal}
        explanation={quiz.explanation}
      />
    </div>
  );
}
