/* eslint-disable linebreak-style */
import React from "react";
import { Button, Input } from "../components";
export const StepThree = () => {
  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>3. Занимательный вопрос</h2>
        <ul className="emoji-variants">
          {/* TODO: Заменить на map (key) */}
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-1" />
            <label htmlFor="variant-1">
              <img src="./img/laugh.png" alt="laugh" />
              <p>Ваш ответ 1</p>
            </label>
          </li>
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-2" />
            <label htmlFor="variant-2">
              <img src="./img/hearts.png" alt="hearts" />
              <p>Ваш ответ 2</p>
            </label>
          </li>
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-3" />
            <label htmlFor="variant-3">
              <img src="/public/img/smirk.png" alt="smirk" />
              <p>Ваш ответ 3</p>
            </label>
          </li>
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-4" />
            <label htmlFor="variant-4">
              <img src="./img/fright.png" alt="fright" />
              <p>Ваш ответ 4</p>
            </label>
          </li>
        </ul>
        <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
      </div>
    </div>
  );
};
