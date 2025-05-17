import React, { useState } from 'react';

export default function MultiCheckbox({ options, checkedItems, setCheckedItems }){

    const handleCheckbox = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked){
            setCheckedItems([...checkedItems, value]);
        } else {
            setCheckedItems(checkedItems.filter( item => item !== value));
        }
    }

    return (
        <div>
            {options.map( option => (
                <div key={option.value}>
                    <label htmlFor={option.value}>
                        <input
                            id={option.value}
                            type="checkbox"
                            value={option.value}
                            onChange={handleCheckbox}
                        />
                        {option.label}
                    </label>
                </div>
            ))}
            <p>Selected values: {checkedItems.join("\n ")}</p>
        </div>
    )
};


