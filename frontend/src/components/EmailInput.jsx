import React from 'react';

export default function EmailInput({question, handleChange, formDataKey, formDataVal}){

    const { isRequired, type, prompt, placeholder } = question;

    return (
        <fieldset>
            <label htmlFor={formDataKey}>
                <legend>{prompt}</legend>
                <input
                    key={formDataKey}
                    id={formDataKey}
                    name={formDataKey}
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