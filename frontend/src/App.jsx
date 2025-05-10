import { useState } from 'react';
import './App.css';


function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

  return (
    <>
        <h1 class="font-script bg-mint-500 text-3xl font-bold underline">
          Hello world!
        </h1>
        <form>
            <label> Name
                <input
                    type="text"
                    value={name}
                    onChange={handleOnChange}
                />
            </label>
            <label> Name
                <input
                    type="email"
                    value={email}
                    onChange={handleOnChange}
                />
            </label>
            <input type="submit" />

        </form>
    </>
  )
}

export default App
