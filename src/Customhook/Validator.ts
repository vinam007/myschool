import { useState } from "react";
import { text } from "stream/consumers";

const InputValidator = (input: string, type: 'radio' | 'text' | 'button' | 'checkbox' | 'password' | 'email'): any => {
    const [value, setValue] = useState<string>('hellow');
    
    const reset = () => {
        setValue(input);
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        type: type,
        value,
        onChange: handleInputChange,
        reset
    }
}
export default InputValidator;
