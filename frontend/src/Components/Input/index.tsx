import React, {InputHTMLAttributes, useEffect, useRef} from "react";
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = ({name, ...rest}: InputProps): JSX.Element =>  {
    const inputRef = useRef(null);
    const { fieldName, registerField } = useField(name);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef,
        getValue: ref => {
          return ref.current.value
        },
        setValue: (ref, value) => {
          ref.current.value = value
        },
        clearValue: ref => {
          ref.current.value = ''
        },
      })
    }, [fieldName, registerField])

    return (
        <input ref={inputRef} type="text" name={name} {...rest} />
    );
}