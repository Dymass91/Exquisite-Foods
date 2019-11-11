import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlfor=""> Podaj login <input type="text" /> </label>
            <label htmlfor=""> Podaj haslo <input type="password" /> </label>
            <button>Zaloguj</button>
        </div>
    )
}
export default LoginPage;