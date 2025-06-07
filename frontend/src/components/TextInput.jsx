import React from 'react';

export default function TextInput({ question, handleChange, formDataVal }) {

    const { id, isRequired, type, prompt, placeholder } = question;

    return(
        <fieldset>
            <label htmlFor={id}>
                <legend>{prompt}</legend>
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={formDataVal}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={isRequired}
                />
            </label>
        </fieldset>
    )
}