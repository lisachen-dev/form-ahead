import React from 'react';

export default function TelInput({ question, handleChange, formDataVal }) {

    const { id, isRequired, type, prompt, pattern, placeholder } = question;

    return(
        <fieldset>
            <label htmlFor={id}>
                <legend>{prompt}</legend>
                <input
                    id={id}
                    name={id}
                    type="tel"
                    inputMode="tel"
                    value={formDataVal}
                    onChange={handleChange}
                    placeholder={placeholder}
                    autoComplete="tel"
                    required={isRequired}
                />
            </label>
        </fieldset>
    )
}