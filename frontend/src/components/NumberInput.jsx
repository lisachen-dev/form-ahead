import React from 'react';

export default function NumberInput({ question, handleChange, formDataVal }) {

    const { id, isRequired, min, max, step, prompt, placeholder, contextNote } = question;

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
                    value={formDataVal ?? ''}
                    onChange={handleChange}
                    onInvalid={(e) => e.target.setCustomValidity(`Please enter a number between ${min} and ${max}.`)}
                    onInput={(e) => e.target.setCustomValidity('')} // clear message when user fixes input
                    placeholder={placeholder}
                    required={isRequired}
                    aria-describedby={`${id}-note`}
                />
            </label>
            <small id={`${id}-note`}>{contextNote}</small>
        </fieldset>
    )
}