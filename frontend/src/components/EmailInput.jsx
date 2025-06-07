import React from 'react';

export default function EmailInput({question, handleChange, formDataVal}){

    const { id, isRequired, type, prompt, placeholder } = question;

    return (
        <fieldset>
            <label htmlFor={id}>
                <legend>{prompt}</legend>
                <input
                    key={id}
                    id={id}
                    name={id}
                    type={type}
                    onChange={handleChange}
                    placeholder={placeholder}
                    value={formDataVal}
                    required={isRequired}
                />
            </label>
        </fieldset>
    )
}