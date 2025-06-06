import React from 'react';
import {
    EmailInput,
    MultiCheckBox,
    NumberInput,
    TelInput,
    TextAreaInput,
    TextInput
    } from './';

export default function Form({questionData, formData, setFormData, handleChange, handleSubmit}){

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
                {questionData.map(question => {
                    if(question.type == "text"){
                        return (
                            <TextInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    }
//                  TODO - phone regex replace with more robust validation
                    else if(question.type == "tel"){
                        return (
                            <TelInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    }

                    else if(question.type == "email"){
                        return (
                            <EmailInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    }
                    else if(question.type == "number"){
                        return (
                            <NumberInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    }
                    else if(question.type == "textarea"){
                        return (
                            <TextAreaInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    }
                })}

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
                   formData={formData}
                   setFormData={setFormData}
                   options={questionData[6].options}
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
