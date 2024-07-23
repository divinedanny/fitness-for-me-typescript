import { ActionButton } from '@/shared/actionbutton';
import { SelectedPage } from '@/shared/types'
import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphics from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsoreFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


interface Props {
    setSelectedPage: (value: SelectedPage) => void;

}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1110px)");
    return (
        <section
        id='home'
        className='py-10 bg-gray-20 gap-16 md:h-full md:pb-0'
        >
            {/* IMAGES AND MAIN HEADER */}
            <motion.div className='md:flex w-5/6 mx-auto items-center justify-center md:h-5/6'
                        onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
            >
                {/* MAIN HEADER */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* HEADINGS */}
                    <motion.div className='md:-mt-20'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount:0.3}}
                                transition={{duration:0.8}}
                                variants={{
                                    hidden: {opacity: 0, x:-80},
                                    visible: {opacity: 1, x:0}
                                }}
                    >
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText} alt="home" />
                            </div>
                        </div>
                        <p className='text-sm mt-7'>
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>

                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div className='mt-10 flex items-center gap-10'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.2, duration: 1.0 }}
                                variants={{
                                    hidden: { opacity: 0, x: -80 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                    >
                        <ActionButton 
                        setSelectedPage={setSelectedPage}
                        
                        >
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 hover:text-secondary-500 underline"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* IMAGES */}
                <div className='flex basis-3/5 justify-center md:ml-30 md:z-10 md:mt-15 md:justify-items-end'>
                    <img src={HomePageGraphics} alt="homepage-graphics" />

                </div>
            
            </motion.div>
            {/* SPONSORS */}
            {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-7'>
                        <img src={SponsorRedBull} alt="sponsor-redbull" />
                        <img src={SponsorForbes} alt="sponsor-forbes" />
                        <img src={SponsoreFortune} alt="sponsor-fortune" />
                    </div>
                </div>
            </div>
            )}
        
        </section>
    )
}

export default Home
