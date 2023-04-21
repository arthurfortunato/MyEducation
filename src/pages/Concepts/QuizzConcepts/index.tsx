import { HeaderContentCards } from "../../../components/HeaderContentCards";
import { BodyContainer } from "../../../components/BodyContainer";
import { ButtonContinue } from "../../../components/ButtonContinue";
import { useState } from "react";
import { Correct } from "../../../components/Correct";
import { Wrong } from "../../../components/Wrong";
import { StyledSection, ContainerStyled } from "./styles";
import { api, rest, restFul, statusCode } from "./answers";
import { apiQuestion, restQuestion, restFulQuestion, statusCodeQuestion } from "./questions";
import { ButtonNextContent } from "../../../components/ButtonNextContent";
import { useNavigate } from "react-router-dom";

export const QuizzConcepts = () => {
  const [answers, setAnswers] = useState(null);
  const [confirmedAnswer, setConfirmedAnswer] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState(api);
  const [currentQuestion, setCurrentQuestion] = useState(apiQuestion);
  const [changeButton, setChangeButton] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(100 / 5);

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setAnswers(event.target.value);
  };

  const handleRevealAnswer = (event: any) => {
    event.preventDefault();
    setConfirmedAnswer(true);
    const correctOption: any = currentAnswers.find(
      (option: any) => option.answer
    );
    setRightAnswer(answers === correctOption?.id);
    setChangeButton(true);
  };

  const handleTryAgain = () => {
    setAnswers(null);
    setConfirmedAnswer(false);
    setRightAnswer(false);
    setChangeButton(false);
  };

  const handleNextQuestion = () => {
    setAnswers(null);
    setConfirmedAnswer(false);
    setRightAnswer(false);
    setChangeButton(false);
    setLoadingProgress((prevProgress) => prevProgress + 100 / 5);

    if (currentAnswers === api) {
      setCurrentAnswers(rest);
      setCurrentQuestion(restQuestion);
    } else if (currentAnswers === rest) {
      setCurrentAnswers(restFul);
      setCurrentQuestion(restFulQuestion);
    } else if(currentAnswers === restFul){
      setCurrentAnswers(statusCode);
      setCurrentQuestion(statusCodeQuestion);
    } else {
      navigate("/concepts");
    }
  };

  return (
    <ContainerStyled>
      <HeaderContentCards
        loadingProgress={loadingProgress}
        backRoute="/concepts"
      />

      <BodyContainer>
        <div>
          <StyledSection>
            <form>
              <h2>{currentQuestion}</h2>
              {currentAnswers.map((options: any) => (
                <div key={options.id}>
                  <label>
                    <input
                      type="radio"
                      value={options.id}
                      checked={answers === options.id}
                      onChange={handleChange}
                      disabled={confirmedAnswer}
                    />
                    <p>{options.text}</p>
                  </label>
                </div>
              ))}
            </form>
            {confirmedAnswer && (
              <div>
                <p>{rightAnswer ? <Correct /> : <Wrong />}.</p>
              </div>
            )}
          </StyledSection>
        </div>
      </BodyContainer>

      {changeButton === false && (
        <ButtonContinue onClick={handleRevealAnswer}>
          Verificar Resultado
        </ButtonContinue>
      )}
      {changeButton === true && rightAnswer === false && (
        <ButtonContinue
          onClick={handleTryAgain}
          style={{ backgroundColor: "#fff", color: "#000" }}
        >
          Tentar Novamente
        </ButtonContinue>
      )}
      {changeButton === true && rightAnswer === true && (
        <ButtonNextContent onClick={handleNextQuestion}>Next</ButtonNextContent>
      )}
    </ContainerStyled>
  );
};
