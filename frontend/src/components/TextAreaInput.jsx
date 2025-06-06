import React from 'react';

export default function TextAreaInput({ question, handleChange, formDataKey, formDataVal }) {

    const { isRequired, prompt, columns, rows, placeholder} = question;

    return(
        <fieldset>
            <label htmlFor={formDataKey}>
                <legend>{prompt}</legend>
                <textarea
                    key={formDataKey}
                    id={formDataKey}
                    name={formDataKey}
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