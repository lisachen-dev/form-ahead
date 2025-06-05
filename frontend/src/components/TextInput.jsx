import React from 'react';

export default function TextInput({ question, handleChange, formDataKey, formDataVal }) {

    const { isRequired, type, prompt, placeholder } = question;
    console.log("Success! TextInput Component Created:");

    return(
        <fieldset>
            <label htmlFor={formDataKey}>
                <legend>{prompt}</legend>
                <input
                    id={formDataKey}
                    name={formDataKey}
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