import { useState } from 'react';
import './App.css';
import questionData from './data/questionData';
import { DisplaySummary, Form } from './components';

function App() {

    const defaultData = questionData.reduce((accumulator, question) => {
        if(question.type === "number"){
            accumulator[question.id] = question.placeholder;
        } else if (question.type === "checkbox"){
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
