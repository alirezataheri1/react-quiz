import { useQuiz } from "./QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{numQuestions} questions to test you React Mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "startQuiz" })}>
        let's start!
      </button>
    </div>
  );
}

export default StartScreen;
