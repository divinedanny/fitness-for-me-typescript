import React from 'react'
import Logo from "@/assets/Logo.png"


const Footer = () => {
    return (
        <footer 
        className='bg-primary-100 py-16'
        >
            <div
            className='justify-content mx-auto w-5/6 gap-16 md:flex'
            >
                <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="Logo" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, sed consequuntur doloremque officia quos itaque cum,
                    perferendis autem maxime assumenda eveniet distinctio unde quasi a non 
                    laborum eligendi iusto repudiandae.
                </p>
                <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className='md:mt-0 mt-16 basis-1/4'>
                <h4 className='font=bold' > Divine Ndubuisi Daniel</h4>
                <h4 className='font=bold' >Links</h4>
                    <p className='mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='mt-5'> Sapiente cupiditate quae vero ipsum nam eius corporis soluta voluptates illo. </p>
                    <p className='mt-5'>Quidem eos non, nostrum minus eius doloribus rerum quos similique cum?</p>
                </div>
                <div>
                    <h4 className='font=bold' > Ndubuisi Divine Daniel</h4>
                    <h4 className='font=bold' >Contact Developer</h4>
                    <p className='mt-5' >(+234) 70 4949 7394</p>
                    <p className='mt-5'> Email: Divinedaniel202@gmail.com</p>
                    <p className='mt-5'>Other Information To be found</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
