function NextButton({ dispatch, answer, index, numQuestions }) {
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
