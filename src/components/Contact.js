import { useState } from "react";
import { Textarea } from "react-bootstrap-icons";



export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({ ...formDetails, [category]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=utf-8" },
                body: JSON.stringify(formDetails),
            });
            const result = await response.json();
            setFormDetails(formInitialDetails);
            setButtonText("Send");
            if (result.code === 200) {
                setStatus({ success: true, message: 'Message envoyé avec succès !' });
            } else {
                setStatus({ success: false, message: 'Échec d\'envoi, veuillez réessayer.' });
            }
        } catch {
            setStatus({ success: false, message: 'Une erreur est survenue.' });
            setButtonText("Send");
        }
    };

    return (
        <section>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                />
                <Textarea
                    rows="6"
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                />
                <button type="submit">{buttonText}</button>
                {status.message && (
                    <p>{status.message}</p>
                )}
            </form>
        </section>
    );
};
