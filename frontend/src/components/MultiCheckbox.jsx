import React, { useState } from 'react';

export default function MultiCheckbox({ question, formData, setFormData }){

    const { id, prompt, options } = question;
    const checkedItems = formData[id];

    const handleCheckbox = (e) => {
        const {value, checked} = e.target;

        const newItems = checked
            ? [...checkedItems, value]
            : checkedItems.filter(item => item !== value);

        setFormData({
            ...formData,
            id: newItems
        })
    }

    return (
        <div>
            <fieldset>
                <legend>{prompt || "Select all that apply"}</legend>
                {options.map( option => (
                    <label key={option.value} htmlFor={option.value}>
                        <input
                            id={option.value}
                            name={id}
                            type="checkbox"
                            value={option.value}
                            onChange={handleCheckbox}
                            checked={checkedItems?.includes(option.value)}
                        />
                        {option.label}
                    </label>
                ))}
            </fieldset>
        </div>
    )
};


