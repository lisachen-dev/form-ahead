import React from 'react';

export default function NumberInput({ question, handleChange, formDataVal }) {

    const { id, isRequired, type, min, max, step, prompt, placeholder, contextNote } = question;

    return(
        <fieldset>
            <label htmlFor={id}>
                <legend>{prompt}</legend>
                <input
                    id={id}
                    name={id}
                    type="number"
                    min={min}
                    max={max}
                    step={step}
                    value={formDataVal ?? 1}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={isRequired}
                    aria-describedby={`${id}-note`}
                />
            </label>
            <small id={`${id}-note`}>{contextNote}</small>
        </fieldset>
    )
}