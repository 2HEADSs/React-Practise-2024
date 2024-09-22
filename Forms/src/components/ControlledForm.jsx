import { useEffect, useState } from 'react';

export default function ControlledForm() {
    console.log('Render controlled');

    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        email: '',
        occupation: 'ai',
    });

    useEffect(() => {
        (async () => {
            const response = await fetch(
                'http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a'
            );
            const profile = await response.json();
            console.log(profile);

            setFormValues((oldValues) => ({
                ...oldValues,
                username: profile.username,
            }));
        })();
    }, []);
    const userNameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };
    const logoutHandler = (e) => {
        setUsername({});
    };

    const changeHandler = (e) => {
        setFormValues((oldValues) => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <>
            <h1>Form</h1>
            {/* 
            {user.username ? (
                <>
                    <p>Hello {user.username}</p>
                    <button onClick={logoutHandler}>Logout</button>
                </>
            ) : ( */}
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="@abv.bg"
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="email"
                        name="password"
                        id="password"
                        placeholder="****"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="@abv.bg"
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="occupation">Occupation</label>
                    <select
                        name="occupation"
                        id="occupation"
                        value={formValues.occupation}
                        onChange={changeHandler}
                    >
                        <option value="it">IT</option>
                        <option value="at">BA</option>
                        <option value="ai">AI</option>
                    </select>
                </div>
            </form>
            {/* )} */}
        </>
    );
}
