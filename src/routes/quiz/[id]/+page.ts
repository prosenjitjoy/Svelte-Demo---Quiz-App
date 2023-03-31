import quizzes from "../../../data.json"
import { error } from "@sveltejs/kit"
interface Quiz {
  id: number;
  name: string;
  imageUrl: string;
  total: number;
  questions: Question[];
}

interface Question {
  id: number;
  question: string;
  options: Option[];
  answer: string;
}

interface Option {
  id: number;
  label: string;
  text: string;
}


export function load({ params }: { params: { id: string } }) {
  const quiz = quizzes.find((quiz: Quiz) => quiz.id === parseInt(params.id));

  if (!quiz) {
    throw error(404, "Quiz not found")
  }
  return quiz;
}