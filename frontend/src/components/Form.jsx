import React from 'react';
import { MultiCheckBox } from './'

export default function Form({formData, setFormData, handleChange, options, handleSubmit}){

    const {
        fullName,
        phone,
        email,
        guestCount,
        allergies,
        paymentMethod,
        availableDays,
        additionalNotes
   } = formData;


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">
                    <legend>Name:</legend>
                    <input
                        required
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => handleChange(e)}
                        placeholder="Jane Doe"/>
                </label>
                {/* TODO - phone regex replace with more robust validation */}
                <label htmlFor="phone">
                    <legend>Phone Number:</legend>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={phone}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={(e) => handleChange(e)}
                        autoComplete="tel"
                        placeholder="e.g. 123-123-1234" />
                </label>
                 <label htmlFor="email">
                     <legend>Email:</legend>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => handleChange(e)}
                        placeholder="USER@email.com"/>
                 </label>
                 <label htmlFor="guestCount">
                     <legend>Including yourself, how many people are you responding for?</legend>
                    <input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        value={guestCount}
                        onChange={(e) => handleChange(e)} />
                    <small>Note: This helps us avoid double-counting. You can also send this link to others if they want to submit their own response.</small>
                 </label>
                 <label htmlFor="allergies">
                     <legend>Please note any allergies or dietary restrictions we should know about.</legend>
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
                     <legend>If we’re sharing food or drinks, how do you prefer to handle the cost?</legend>
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
                    formData={formData}
                    setFormData={setFormData}
                    options={options}
                />
                <label htmlFor="additionalNotes">
                    <legend>Additional Notes: </legend>
                    <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={additionalNotes}
                        onChange={(e) => handleChange(e)}
                        placeholder="notes"/>
                 </label>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
