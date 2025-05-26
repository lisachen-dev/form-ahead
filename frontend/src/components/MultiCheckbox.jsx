import React, { useState } from 'react';

export default function MultiCheckbox({ options, checkedItems, formData, setFormData }){

    const handleCheckbox = (e) => {
        const updatedDays = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked){
            setFormData({
                ...formData,
                availableDays: [...checkedItems, updatedDays]
            });
        } else {
            setFormData({
                ...formData,
                availableDays: checkedItems.filter(item => item !== updatedDays)
          });
        }
    }

    return (
        <div>
            {options.map( option => (
                <fieldset key={option.value}>
                    <label htmlFor={option.value}>
                        <input
                            id={option.value}
                            name={option.value}
                            type="checkbox"
                            value={option.value}
                            onChange={handleCheckbox}
                            checked={checkedItems.includes(option.value)}
                        />
                        {option.label}
                    </label>
                </fieldset>
            ))}
{/*             <p>Selected values: {checkedItems.join("\n ")}</p> */}
            <p>{checkedItems.map(
                value => options.find(option => option.value === value)?.label
            ).join("\n ")}</p>
        </div>
    )
};


