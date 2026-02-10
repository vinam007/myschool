import { useEffect, useRef, useState } from "react";

const DebouseFn = () => {
    const [inputValue, setinputValue] = useState('');
    const  input=useRef('');
    
    const nameClicked = (input: any) => {
        setinputValue(input);
    }
    useEffect(() => {
        var timer = setTimeout(() => {
         input.current=inputValue;
       console.log(input.current);
        }, 1000);
        return () => { return clearTimeout(timer) };
    }, [inputValue]);

    return (<><div>
        <input type="text" name="Name" onChange={(e) => { setinputValue(e.currentTarget.value) }} value={inputValue} />
        <p>{input.current}dd</p>
    </div></>)
}

export default DebouseFn;