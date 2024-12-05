import React, { useState } from 'react';
import './MailingList.css';

const MailingList = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email) {
            setMessage('Please enter your email address');
            return;
        }

        try {
            // This is where you'll add your API call to store the data
            // For now, we'll just console.log the data
            console.log({
                email,
                isSubscribed,
                dateSubscribed: new Date()
            });
            
            setMessage('Thank you for subscribing!');
            setEmail('');
            setIsSubscribed(false);
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="mailing-list-container">
            <h2>Join our mailing list and we'll keep you posted</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL HERE*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                
                <div className="checkbox-button-wrapper">
                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={isSubscribed}
                                onChange={(e) => setIsSubscribed(e.target.checked)}
                            />
                            <span className="checkbox-text">
                                YES, SUBSCRIBE ME<br />TO YOUR NEWSLETTER.
                            </span>
                        </label>
                    </div>

                    <button type="submit" className="subscribe-button">
                        SUBSCRIBE NOW
                    </button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
};

export default MailingList;
