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
                                key={question.id}
                                question={question}
                                handleChange={handleChange}
                                formDataVal={formData[question.id]}
                            />
                        )
                    } else if(question.type == "email"){
                        return (
                            <EmailInput
                                key={question.id}
                                question={question}
                                handleChange={handleChange}
                                formDataVal={formData[question.id]}
                            />
                        )
                    } else if(question.type == "number"){
                        return (
                            <NumberInput
                                key={question.id}
                                question={question}
                                handleChange={handleChange}
                                formDataVal={formData[question.id]}
                            />
                        )
                    } else if(question.type == "textarea"){
                        return (
                            <TextAreaInput
                                key={question.id}
                                question={question}
                                handleChange={handleChange}
                                formDataVal={formData[question.id]}                            />
                        )
                    } else if(question.type =="select"){
                        return (
                            <SelectInput
                                key={question.id}
                                question={question}
                                handleChange={handleChange}
                                formDataVal={formData[question.id]}
                            />
                        )
                    } else if(question.type == "checkbox"){
                        return (
                            <MultiCheckBox
                                key={question.id}
                                question={question}
                                formData={formData}
                                setFormData={setFormData}
                            />
                        )
                    } else {
                        return <p>Unknown input type: {question.type}</p>
                    }
                })}

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
