import React from 'react';
import {
    EmailInput,
    MultiCheckBox,
    NumberInput,
    SelectInput,
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
                                key={question.id}
                                question={question}
                                handleChange={handleChange}
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
                    } else if(question.type == "email"){
                        return (
                            <EmailInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    } else if(question.type == "number"){
                        return (
                            <NumberInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    } else if(question.type == "textarea"){
                        return (
                            <TextAreaInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    } else if(question.type =="select"){
                        return (
                            <SelectInput
                                question={question}
                                handleChange={handleChange}
                                formDataKey={question.id}
                                formDataVal={formData[question.id]}
                            />
                        )
                    } else if(question.type == "checkbox"){
                        return (
                            <MultiCheckBox
                                question={question}
                                formData={formData}
                                setFormData={setFormData}
                            />
                        )
                    } else {
                        return <p>There is no componenet for this</p>
                    }
                })}

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
