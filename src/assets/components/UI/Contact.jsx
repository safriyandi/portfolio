import React from 'react'
import emailsjs from 'emailjs-com';
import { useRef } from "react";


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailsjs.sendForm('service_lhc9qvj', 'template_f29srhg', form.current, 'p3ovuG5gt4Bwk35Cs' )
            .then((result)=>{
                console.log(result.text);
            }, (error) =>{
                console.log(error.text);
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
                                <input type='text' name='user_name' placeholder='Masukan Nama Anda' className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                            </div>
                            <div className='mb-5'>
                                <input type='text' name='user_email' placeholder='Masukan Email Anda' className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                            </div>
                            <div className='mb-5'>
                                <textarea type='text' name='message' rows={3} placeholder='Tulis Pesanmu Disini!' className='w-full p-3 focus:outline-none rounded-[5px]'></textarea>
                            </div>

                            <button type='submit' className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColortext-center ease-linear duration-150'>
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact