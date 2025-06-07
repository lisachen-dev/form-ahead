import React from 'react';

export default function TextAreaInput({ question, handleChange, formDataVal }) {

    const { id, isRequired, prompt, columns, rows, placeholder} = question;

    return(
        <fieldset>
            <label htmlFor={id}>
                <legend>{prompt}</legend>
                <textarea
                    key={id}
                    id={id}
                    name={id}
                    value={formDataVal}
                    onChange={handleChange}
                    cols={columns}
                    rows={rows}
                    placeholder={placeholder}
                    required={isRequired}
                />
            </label>
        </fieldset>
    )
}