import { useState } from 'react';
import './App.css';
import { Form } from './components';



function App() {

    const [formData, setFormData] = useState({
        name : '',
        phone : '',
        email : '',
        guestCount : 1,
        allergies : '',
        paymentMethod : '',
        availableDays : []
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
        console.log("Name: ", formData.name);
        console.log("Phone: ", formData.phone)
        console.log("Email: ", formData.email);
        console.log("GuestCount: ", formData.guestCount);
        console.log("Allergies: ", formData.allergies);
        console.log("Payment Method: ", formData.paymentMethod);
        console.log("Available Days: ", formData.availableDays);
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
        </div>
    )
}

export default App
