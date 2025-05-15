import { useState } from 'react';
import './App.css';


function App() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('');
    const [guestCount, setGuestCount] = useState(1);
    const [allergies, setAllergies] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!");
        console.log("Name: ", name);
        console.log("Phone: ", phone)
        console.log("Email: ", email);
        console.log("guestCount: ", guestCount);
        console.log("allergies: ", allergies);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input
                        required
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"/>
                </label>
                <label htmlFor="phone">
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
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="iAmAUsername@email.com"/>
                 </label>
                 <label htmlFor="guestCount">
                    <input
                        id="guestCount"
                        type="number"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))} />
                 </label>
                 <label htmlFor="allergies">
                    <textarea
                        id="allergies"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        cols="30"
                        rows="5"
                        placeholder="e.g. pineapple, gluten, dairy..."
                        />
                 </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App
