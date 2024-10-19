interface Quiz {
    question: string;
    choices: string[];
    answer: number;
    explanation: string;
}

export const dinoQuiz:Quiz = {
    question: "트라이아스 초기 바다에 살던 생물이 아닌 것을 고르시오.",
    choices: ["연골어류", "암모나이트", "원시 양서류", "호모 사피엔스"],
    answer: 3,
    explanation: "호모 사피엔스는 현 인류이며 고생대에 초기에 살지 않았습니다."
}