import React from 'react';

export default function TextInput({ question, handleChange, formDataVal }) {

    const { id, isRequired, type, prompt, placeholder } = question;

    return(
        <fieldset>
            <label htmlFor={id}>
                <legend>Name:</legend>
                <input
                    required
                    id={id}
                    name={id}
                    type={type}
                    value={formDataVal}
                    onChange={(e) => handleChange(e)}
                    placeholder={question.placeholder}
                />
            </label>
        </fieldset>
    )
}