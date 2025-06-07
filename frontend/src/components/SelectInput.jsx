import React, { useState } from 'react';

export default function SelectInput({ question, handleChange, formDataVal }){

    const { id, isRequired, type, prompt, methods } = question;

    return (
        <fieldset>
            <label htmlFor={id}>
                <legend>{prompt}</legend>
                <select
                    type="number"
                    key={id}
                    id={id}
                    name={id}
                    value={formDataVal}
                    onChange={handleChange}
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


