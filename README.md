Cấu trúc câu hỏi
interface QuizQuestion {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: keyof QuizQuestion["options"]; // 'A', 'B', 'C', hoặc 'D'
  type: string;
  points: number; // Điểm khi trả lời đúng
}
