import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="header">
                    <h2 className="horizontal"><span>Contact</span></h2>
                </div>
                <div className="spacer"></div>
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="number" name="number" placeholder="Your Phone number" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Message"></textarea>
                            </div>
                            <button>Send Massage</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p><i className="fas fa-phone"></i> +8801315-839775</p>
                        <p><i className="fas fa-envelope"></i> taohid130@gmail.com</p>
                        <p><i className="fas fa-map-marker-alt"></i> Phartali, Raozan, Chittagong</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
