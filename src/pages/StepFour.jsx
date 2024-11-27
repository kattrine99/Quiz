import { Button, ListOfInputs } from "../components";
export const StepFour = () => {
  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>4. Занимательный вопрос</h2>
        <ul className="level-variants">
          <ListOfInputs variant={4}/>
        </ul>
        <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
      </div>
    </div>
  );
};
