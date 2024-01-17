import React, { useRef, useState } from 'react';
import emailsjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailsjs
            .sendForm('service_m1godfi', 'template_ciykrvs', form.current, '9MSSiray99VIT2MpN')
            .then((result) => {
                console.log("Email sent successfully:", result.text);
                // Show a pop-up message after successful submission
                alert("Thank you for sending the message! I will contact you shortly.");

                // Reset the form data after submission
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.log("Email sending failed:", error.text);
                // Show a pop-up message in case of an error
                alert("Oops! Something went wrong. Please try again later.");
            });
    };

    return (
        <section id='contact' className='pb-16'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-300px sm:h-[450px]'>
                        <iframe title='google-maps' src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jakarta&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            className='border-0 w-full h-full' allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form className='w-full' ref={form} onSubmit={sendEmail}>
                            <div className='mb-5'>
                                <input
                                    type='text'
                                    name='user_name'
                                    placeholder='Input Your Name'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                    value={formData.user_name}
                                    onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                                />
                            </div>
                            <div className='mb-5'>
                                <input
                                    type='text'
                                    name='user_email'
                                    placeholder='Input Your Email'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                    value={formData.user_email}
                                    onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                                />
                            </div>
                            <div className='mb-5'>
                                <textarea
                                    type='text'
                                    name='message'
                                    rows={3}
                                    placeholder='Write Your Message Here!'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColortext-center ease-linear duration-150'
                                disabled={formData.user_name.trim() === '' || formData.user_email.trim() === '' || formData.message.trim() === ''}
                            >
                                SEND MESSAGE!!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
