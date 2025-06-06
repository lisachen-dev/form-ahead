import React, { useState } from 'react';

export default function MultiCheckbox({ question, formData, setFormData }){

    const { id, type, isRequired, options } = question;
    const { availableDays } = formData;

    const handleCheckbox = (e) => {
        const {value, checked} = e.target;

        const newDays = checked
            ? [...availableDays, value]
            : availableDays.filter(item => item !== value);
        setFormData({
            ...formData,
            availableDays: newDays
        })
    }

    return (
        <div>
            {options.map( option => (
                <fieldset key={id}>
                    <label htmlFor={option.value}>
                        <input
                            id={option.value}
                            name={option.value}
                            type="checkbox"
                            value={option.value}
                            onChange={handleCheckbox}
                            checked={availableDays?.includes(option.value)}
                        />
                        {option.label}
                    </label>
                </fieldset>
            ))}
            <p>{availableDays.map(
                value => options.find(option => option.value === value).label
            ).join("\n ")}</p>
        </div>
    )
};


