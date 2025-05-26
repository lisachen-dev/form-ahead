import React from 'react';
import { MultiCheckBox } from './'

export default function Form({formData, setFormData, handleChange, options, handleSubmit}){

    const {
        name,
        phone,
        email,
        guestCount,
        allergies,
        paymentMethod,
        availableDays
   } = formData;


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        required
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Jane Doe"/>
                </label>
                {/* TODO - phone regex replace with more robust validation */}
                <label htmlFor="phone">
                    Phone Number:
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={phone}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        onChange={(e) => handleChange(e)}
                        autoComplete="tel"
                        placeholder="e.g., 123-123-1234" />
                </label>
                 <label htmlFor="email">
                     Email:
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="iAmAUsername@email.com"/>
                 </label>
                 <label htmlFor="guestCount">
                     Including yourself, how many people are you responding for?
                    <input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        value={guestCount}
                        onChange={(e) => handleChange(e)} />
                    <small>Note: This helps us avoid double-counting. You can also send this link to others if they want to submit their own response.</small>
                 </label>
                 <label htmlFor="allergies">
                     Please note any allergies or dietary restrictions we should know about.
                    <textarea
                        id="allergies"
                        name="allergies"
                        value={allergies}
                        onChange={(e) => handleChange(e)}
                        cols="30"
                        rows="5"
                        placeholder="e.g. pineapple, gluten, dairy..."
                        />
                 </label>
                 <label htmlFor="paymentMethod">
                     If we’re sharing food or drinks, how do you prefer to handle the cost?
                     <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange = {(e) => handleChange(e)}
                     >
                        <option value="">-- Select --</option>
                        <option value="split">Split the check evenly</option>
                        <option value="self">Pay only for what I ordered</option>
                        <option value="ambivalent">I'm flexible / I don't care</option>
                     </select >
                 </label>
                 <MultiCheckBox
                    checkedItems={formData.availableDays}
                    setFormData={setFormData}
                    options={options}/>




                <button type="submit">Submit</button>
            </form>
        </>
    )
}
