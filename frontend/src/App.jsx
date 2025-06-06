import { useState } from 'react';
import './App.css';
import { DisplaySummary, Form } from './components';



function App() {

    const questionData = [
        {
             id: "fullName",
             isRequired: true,
             type: "text",
             prompt: "Name:",
             placeholder: "Ash Ketchum"
        },
        {
            id: "phone",
            isRequired: true,
            type: "tel",
            prompt: "Phone Number:",
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            placeholder: "e.g. 123-456-7890"
        },
        {
            id: "email",
            isRequired: true,
            type: "email",
            prompt: "Email:",
            placeholder: "e.g. user@email.com"
        },
        {
            id: "guestCount",
            type: "number",
            prompt: "Including yourself, how many people are you bringing?",
            placeholder: 1,
            contextNote: "Note: This helps us avoid double-counting. You can also send this link to others if they want to submit their own response."
        },
        {
            id: "allergies",
            isRequired: false,
            type: "textarea",
            prompt: "Please note any allergies or dietary restrictions we should know about.",
            columns: "30",
            rows: "2",
            placeholder:"e.g. pineapple, gluten, dairy..."
        },
        {
            id: "paymentMethod",
            isRequired: true,
            type: "select",
            prompt: "If we're sharing food or drinks, how do you prefer to handle the cost?",
            methods: [
                {
                    value: "",
                    display: "-- Select --"
                },
                {
                    value: "split",
                    display: "Split the check evenly"
                },
                {
                    value: "self",
                    display: "Pay only for what I ordered"
                },
                {
                    value: "ambivalent",
                    display: "I'm flexible / I don't care"
                }
            ]
        },
        {
            id: "availableDays",
            type: "checkbox",
            options: [
                {
                    label: "Friday May 16",
                    value: "option1"
                },
                {
                    label: "Saturday May 17",
                    value: "option2"
                },
                {
                    label: "Sunday May 18",
                    value: "option3"
                }
            ]
        },
        {
            id: "additionalNotes",
            type: "textarea",
            prompt: "Additional Notes:",
            placeholder: "Is there anything else I need to know?"
        }
    ]

    const defaultData = questionData.reduce((accumulator, question) => {
        if(question.type === "number"){
            accumulator[question.id] = question.default;
        } else if (question.type === "select" || question.type === "checkbox"){
            accumulator[question.id] = [];
        } else {
            accumulator[question.id] = '';
        }
        return accumulator;
    },{})

    const [formData, setFormData] = useState(defaultData);

    const handleChange = (e) => {
        const eventName = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [eventName] : value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!");
        console.log("Name: ", formData.fullName);
        console.log("Phone: ", formData.phone)
        console.log("Email: ", formData.email);
        console.log("GuestCount: ", formData.guestCount);
        console.log("Allergies: ", formData.allergies);
        console.log("Payment Method: ", formData.paymentMethod);
        console.log("Available Days: ", formData.availableDays);
        console.log("Additional Notes: ", formData.additionalNotes);
    }

    return (
        <div>
            <Form
                questionData={questionData}
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <DisplaySummary formData={formData} options={questionData[6].options}/>
        </div>
    )
}

export default App
