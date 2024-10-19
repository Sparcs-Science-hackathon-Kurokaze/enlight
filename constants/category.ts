export const categories = {
    physics: "물리",
    chemistry: "화학",
    biology: "생명과학",
    astronomy: "천문학",
    mathematics: "수학",
    computer: "컴퓨터",
    neuroscience: "뇌과학",
    preparing: "준비중",
};

interface Scenario {
    id: number;
    title: string;
    chapters: string[];
    progress: number;
}

export const scenarios: Record<string, Scenario[]> = {
    biology: [
        {
            id: 0,
            title: "중생대 동물과 공룡",
            chapters: [
                '중생대란 무엇일까?',
                '트라이아스기의 번성',
                '익룡과 수장룡들',
                '대멸종과 쥬라기 월드',
                '대공룡시대, 백악기',
                '바이바이, 공룡'
            ],
            progress: 100,
        },
        {
            id: 1,
            title: "바이러스와 박테리아",
            chapters: [],
            progress: 0,
        },
       ]
}