interface Quiz {
    question: string;
    choices: string[];
    answer: number;
    explanation: string;
}

export const dinoQuiz: Quiz[] =
    [
        {
            question: "트라이아스 초기 바다에 살던 생물이 아닌 것을 고르시오.",
            choices: ["연골어류", "암모나이트", "원시 양서류", "호모 사피엔스"],
            answer: 3,
            explanation: "호모 사피엔스는 현 인류이며 고생대에 초기에 살지 않았습니다."
        },
        {
            question: "2억 3200만년 전 카르니안절 우기 사건으로 번성한 생물 그룹?",
            choices: ["양서류", "초기 포유류", "공룡", "연체동물"],
            answer: 2,
            explanation: "이 사건이 공룡의 번성에 중요한 역할을 했다."
        },
        {
            question: "익룡의 특징이 아닌것?",
            choices: ["골반이 움푹 들어감", "허벅지뼈가 골반 구멍에 들어감", "트라이아이스기에 출현", "등장 초기엔 새와 비슷한 작은 크기였다"],
            answer: 1,
            explanation: "익룡의 허벅지뼈는 골반의 구멍이 아닌 움푹 들어간 곳에 위치한다."
        },
        {
            question: "트라이아스기 대멸종 이후?",
            choices: ["거대 용각류 대부분이 멸종했다", "치골이 뒤로 향하고 소화기관이 커진 조반목 공룡이 번성했다", "백악기 후기 산소 농도가 감소했다", "대형 양서류와 단궁류가 번성했다"],
            answer: 1,
            explanation: "조반목 공룡의 치골이 뒤로 향해있어 소화기관이 발달해 먹이 경쟁에서 이점을 얻을 수 있었다"
        },
        {
            question: "백악기 후기에 번성한 공룡?",
            choices: ["스테고사우르스", "용각류", "뿔공룡과 곡룡류", "소형 수각류"],
            answer: 2,
            explanation: "백악기 후기엔 검룡류가 쇠퇴하고 곡룡류와 뿔공룡이 번성했다."
        },
        {
            question: "6500만년 전의 소행성 충돌 이후 살아남은 생물 그룹?",
            choices: ["곡룡류", "수각류의 일부", "익룡", "검룡류"],
            answer: 1,
            explanation: "수각류가 조류 진화하였다"
        }
    ];