import React from 'react';

export default function TelInput({ question, handleChange, formDataKey, formDataVal }) {

    const { isRequired, type, prompt, pattern, placeholder } = question;

    return(
        <fieldset>
            <label htmlFor={formDataKey}>
                <legend>{prompt}</legend>
                <input
                    key={formDataKey}
                    id={formDataKey}
                    name={formDataKey}
                    type={type}
                    value={formDataVal}
                    onChange={handleChange}
                    pattern={pattern}
                    placeholder={placeholder}
                    autoComplete="tel"
                    required={isRequired}
                />
            </label>
        </fieldset>
    )
}