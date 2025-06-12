import React from 'react';

export default function EmailInput({question, handleChange, formDataVal}){

    const { id, isRequired, prompt, placeholder } = question;

    return (
        <fieldset>
            <label htmlFor={id}>
                <legend>{prompt}</legend>
                <input
                    id={id}
                    name={id}
                    type="email"
                    onChange={handleChange}
                    placeholder={placeholder}
                    value={formDataVal}
                    required={isRequired}
                    autoComplete="email"
                    spellCheck={false}
                />
            </label>
        </fieldset>
    )
}