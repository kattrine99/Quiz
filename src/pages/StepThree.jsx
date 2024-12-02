import { Button, Input } from "../components";
import {answersWithImages} from "../constants"
export const StepThree = () => {
  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>3. Занимательный вопрос</h2>
        <ul className="emoji-variants">
          {
            answersWithImages.map(({ label, img }, index) => {
              const alt = img.split('.')[0]
              const src = '/img/' + img
              return <li className="variant-wrapper" key={index}>
                <Input type="radio" name="variant" id={`variant-${index}`} />
                <label htmlFor={`variant-${index}`}>
                  <img src={src} alt={alt} />
                  <p>{label}</p>
                </label>
              </li>
            })
          }
        </ul>
        <Button type="button" id="next-btn" text="Далее" disabled />
      </div>
    </div>
  );
};
