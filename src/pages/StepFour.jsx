import { Button, Input } from "../components";
import {keysforList} from "../constants"
export const StepFour = () => {
  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>4. Занимательный вопрос</h2>
        <ul className="level-variants">
          {keysforList.map((variant) => (
            <li className="variant-wrapper">
              <Input InputType="radio" InputName="variant" InputID={`variant-${variant}`} />
              <label htmlFor={`variant-${variant}`}>{variant}</label>
            </li>
          ))}
        </ul>
        <Button type="button" id="next-btn" text="Далее" disabled />
      </div>
    </div>
  );
};
