import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import React from 'react'
import ContactUsPageGraphics from "@/assets/ContactUsPageGraphic.png"
import Htext from '@/shared/Htext';
import { useForm } from 'react-hook-form';
interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `mt-5  w-full rounded-lg bg-primary-300 py-3 px-5 placeholder-white`
    const {
        register,
        trigger,
        formState: {errors}

    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }

    }
    return (
        <section
        id="contactus"
        className='mx-auto w-5/6 pt-24 pb-32'
        >
            <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* Header */}
                <motion.div
                className='md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <Htext>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </Htext>
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
                         libero nesciunt. Consequuntur accusantium voluptates inventore et
                          magni totam voluptate ullam deleniti omnis architecto nulla voluptatem 
                          cumque, alias excepturi perferendis similique?
                    </p>
                </motion.div>
                {/* FORM AND IAMGE */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div 
                        className='mt-10 basis-3/5 md:mt-10'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 30 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >  
                    <form target="_blank"
                        onSubmit={onSubmit}
                            action= "https://formsubmit.co/557f2953e6de78410a5c07c4f2425cbb"
                        method='POST'
                    >
                        <input className={inputStyles} 
                                    type="text"
                                    placeholder='NAME'
                                    {...register("name", {
                                        required: true,
                                        maxLength: 100
                                    })}
                            />

                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This Field is Required."}
                                    {errors.name.type === "maxLength" && "Max Length is 100 Characters."}
                            </p>
                        )}
                        <input className={inputStyles}
                            type="text"
                            placeholder='EMAIL'
                            {...register("email", {
                                required: true,
                                 pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />

                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This Field is Required."}
                                    {errors.email.type === "pattern" && "Invalid Email."}
                            </p>
                        )}
                        <textarea className={inputStyles}
                            rows={4}
                            cols={50}
                            placeholder='MESSAGE'
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })}
                        />

                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This Field is Required."}
                                {errors.message.type === "maxLength" && "Max Length is 2000 Characters."}
                            </p>
                        )}

                        <button
                        className='mb-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                        >
                            SUBMIT
                        </button>

                    </form>
                    </motion.div>

                    <motion.div
                        className='relative mt-5 basis-2/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.3,duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, x: -80 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <motion.div
                        className='before:absolute w-full before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'
                        >
                            <img 
                            className='w-full'
                            src={ContactUsPageGraphics} alt={`${ContactUsPageGraphics}`} />
                        </motion.div>

                    </motion.div>
                </div>
            </motion.div>
            
        </section>
    )
}

export default ContactUs
