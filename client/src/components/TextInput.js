import React, { useState } from 'react'
import {InputContainer, Label, Input} from "./styles/Input.styled"

const TextInput = ({inputName, setParentState, min, step, value}) => {
    const [state, setState] = useState();

    const handleChange = (e) => {
        setState(e.target.value);
        setParentState(e.target.value);
    }

    return (
        <InputContainer>
        <Label>{inputName}</Label>
        <Input name={inputName} onChange={handleChange} type={min ? "number" : "text"} min={min ? min : undefined} step={step ? step : undefined} value = {value}/>
        </InputContainer>
    )
}

export default TextInput;
