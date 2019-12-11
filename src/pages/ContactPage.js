import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {

    state = {
        value: "",
        isEmpty: true
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: "",
            isEmpty: true
        })
    }

    handleChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            })
        }
        else {
            this.setState({
                value: e.target.value,
                isEmpty: true
            })
        }
    }

    render() {
        return (
            <div className="Container_contact-form">
                <div className="contact">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Contact us</h1>
                        <div className="Contact__Details">S.C.A. NTRA. SRA. DEL ROSARIO
                    <br></br>
                            Avda. Manuel Pimentel, s/n
                        <br></br>
                            11.680 Algodonales (Cádiz)
<br></br>
                            Phone: +(34) 956 13 71 56
                        <br></br>
                            Fax: +(34) 956 13 77 01
</div>

                        <textarea value={this.state.value} onChange={this.handleChange} placeholder="You can place your order here...">
                        </textarea>
                        <button>Send</button>
                    </form>
                    <Prompt
                        when={!this.state.isEmpty}
                        message="Masz niewypelniony formularz. Czy na pewno chcesz opuscic strone?"
                    />
                </div>
            </div>

        );
    }
}

export default ContactPage;