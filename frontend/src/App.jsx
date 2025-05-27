import { useState } from 'react';
import './App.css';
import { DisplaySummary, Form } from './components';



function App() {

    const [formData, setFormData] = useState({
        fullName : '',
        phone : '',
        email : '',
        guestCount : 1,
        allergies : '',
        paymentMethod : '',
        availableDays : [],
        additionalNotes : ''
    });

    const options=[
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
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
                options={options}
                handleSubmit={handleSubmit}
            />
            <DisplaySummary formData={formData} options={options}/>
        </div>
    )
}

export default App
