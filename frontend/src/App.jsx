import { useState } from 'react';
import './App.css';
import { MultiCheckBox } from './components'


function App() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('');
    const [guestCount, setGuestCount] = useState(1);
    const [allergies, setAllergies] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [availableDays, setAvailableDays] = useState([]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!");
        console.log("Name: ", name);
        console.log("Phone: ", phone)
        console.log("Email: ", email);
        console.log("GuestCount: ", guestCount);
        console.log("Allergies: ", allergies);
        console.log("Payment Method: ", paymentMethod);
        console.log("Available Days: ", availableDays);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        required
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"/>
                </label>
                {/* TODO - phone regex replace with more robust validation */}
                <label htmlFor="phone">
                    Phone Number:
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={phone}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        placeholder="e.g., 123-123-1234" />
                </label>
                 <label htmlFor="email">
                     Email:
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="iAmAUsername@email.com"/>
                 </label>
                 <label htmlFor="guestCount">
                     Including yourself, how many people are you responding for?
                    <input
                        id="guestCount"
                        type="number"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))} />
                    <small>Note: This helps us avoid double-counting. You can also send this link to others if they want to submit their own response.</small>
                 </label>
                 <label htmlFor="allergies">
                     Please note any allergies or dietary restrictions we should know about.
                    <textarea
                        id="allergies"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        cols="30"
                        rows="5"
                        placeholder="e.g. pineapple, gluten, dairy..."
                        />
                 </label>
                 <label htmlFor="paymentMethod">
                     If we’re sharing food or drinks, how do you prefer to handle the cost?
                     <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange = {(e) => setPaymentMethod(e.target.value)}
                     >
                        <option value="">-- Select --</option>
                        <option value="split">Split the check evenly</option>
                        <option value="self">Pay only for what I ordered</option>
                        <option value="ambivalent">I'm flexible / I don't care</option>
                     </select >
                 </label>
                 <MultiCheckBox checkedItems={availableDays} setCheckedItems={setAvailableDays} options={options}/>




                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App
