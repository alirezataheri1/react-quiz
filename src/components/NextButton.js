import { useQuiz } from "./QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (index < numQuestions - 1) {
    return (
      <>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            next
          </button>
        )}
      </>
    );
  } else {
    return (
      <>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finishQuiz" })}
          >
            finish
          </button>
        )}
      </>
    );
  }
}

export default NextButton;
