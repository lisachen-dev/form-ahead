import React, { useState } from 'react';

export default function SelectInput({ question, handleChange, formDataKey, formDataVal }){

    const { id, isRequired, type, prompt, methods } = question;

    return (
        <fieldset>
            <label htmlFor={formDataKey}>
                <legend>{prompt}</legend>
                <select
                    key={formDataKey}
                    id={formDataKey}
                    name={formDataKey}
                    value={formDataVal}
                    onChange={handleChange}
                    required={isRequired}
                >
                    {methods.map(method => (
                        <option
                            key={method.value}
                            value={method.value}
                        >
                            {method.display}
                        </option>
                    ))}
                </select>
            </label>
        </fieldset>
    )
};


