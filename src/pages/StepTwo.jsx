/* eslint-disable linebreak-style */
import React from "react";
import { Button, ListOfInputs } from "../components";
export const StepTwo = () => {
  return (
    <div className="variants-quiz">
      <div className="question">
        <h2>1. Занимательный вопрос</h2>
        <ul className="variants">
          <ListOfInputs variant={4} />
        </ul>
        <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
      </div>
    </div>
  );
};
