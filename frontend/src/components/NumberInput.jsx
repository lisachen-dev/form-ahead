import React from 'react';

export default function NumberInput({ question, handleChange, formDataKey, formDataVal }) {

    const { isRequired, type, prompt, placeholder, contextNote } = question;

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
                    placeholder={placeholder}
                    required={isRequired}
                />
            </label>
            <small>{contextNote}</small>
        </fieldset>
    )
}