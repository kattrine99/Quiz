import { Input } from "../Input/Input";
export function ListOfInputs({ variants }) {
    return (
        <ul>
            {variants.map((variant) => (
                <li key={variant.id} className="variant-wrapper">
                    <Input
                        InputType="radio"
                        InputName="variant"
                        InputID={variant.id}
                    />
                    <label htmlFor={variant.id}>{variant.label}</label>
                </li>
            ))}
        </ul>
    );
}