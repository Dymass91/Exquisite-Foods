import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {
    return (
        <>
            <h2>Footer</h2>
            <Route path="/:path/:idProduct" exact render={(props) => {
                return (
                    <>
                        <p>Jestes na <span>{props.match.params.idProduct}</span></p>
                        <p>Jestes na <span>{props.match.url}</span></p>
                        <p>Jestes na <span>{props.match.path}</span></p>
                    </>
                )
            }} />
            <Route path="/:Page" exact render={(props) => {
                return (
                    <>
                        <p>Jestes na <span>{props.match.params.Page}</span></p>
                        <p>Jestes na <span>{props.match.url}</span></p>
                        <p>Jestes na <span>{props.match.path}</span></p>
                    </>
                )
            }} />
        </>
    );
}

export default Footer;