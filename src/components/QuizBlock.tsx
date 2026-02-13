import React from 'react'

type Props = {
        question: string;   
        options: {
    text: string;
    correct: boolean;
    explanation?: string | undefined;
}[]
}

const QuizBlock = (props: Props) => {
  return (
    <div>QuizBlock</div>
  )
}
export default QuizBlock