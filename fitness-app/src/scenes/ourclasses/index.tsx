import { SelectedPage, ClassType } from '@/shared/types' 
import React from 'react'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';
import Class from "./Class"

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "lorem Ipsum AFgsh dxfmcxg dsdAgsdnh gxdfsaSfd gshdfmcg xdsASFgn cgfdsAghncg xfzsDbgcnx fzdSvbcfdv bcvxzcdfzb xfzsddcz fvncx gdfzsdAF szgdxhm bvbgfvdc vmnbnbcxc zvxm cztfchvk jhbklh hgjhg yhgj hhg ",
        image: image1
    },
    {
        name: "Yoga Training Classes",
        description: "lorem Ipsum AFgsh dxfmcxg dsdAgsdnh gxdfsaSfd gshdfmcg xdsASFgn cgfdsAghncg xfzsDbgcnx fzdSvbcfdv bcvxzcdfzb xfzsddcz fvncx gdfzsdAF szgdxhm bvbgfvdc vmnbnbcxc zvxm cztfchvk jhbklh hgjhg yhgj hhg ",
        image: image2
    },
    {
        name: "Muscle Training Classes",
        description: "lorem Ipsum AFgsh dxfmcxg dsdAgsdnh gxdfsaSfd gshdfmcg xdsASFgn cgfdsAghncg xfzsDbgcnx fzdSvbcfdv bcvxzcdfzb xfzsddcz fvncx gdfzsdAF szgdxhm bvbgfvdc vmnbnbcxc zvxm cztfchvk jhbklh hgjhg yhgj hhg ",
        image: image3
    },
    {
        name: "Athletic Training Classes",
        description: "lorem Ipsum AFgsh dxfmcxg dsdAgsdnh gxdfsaSfd gshdfmcg xdsASFgn cgfdsAghncg xfzsDbgcnx fzdSvbcfdv bcvxzcdfzb xfzsddcz fvncx gdfzsdAF szgdxhm bvbgfvdc vmnbnbcxc zvxm cztfchvk jhbklh hgjhg yhgj hhg ",
        image: image4
    },
    {
        name: "Weight Loss Training Classes",
        description: "lorem Ipsum AFgsh dxfmcxg dsdAgsdnh gxdfsaSfd gshdfmcg xdsASFgn cgfdsAghncg xfzsDbgcnx fzdSvbcfdv bcvxzcdfzb xfzsddcz fvncx gdfzsdAF szgdxhm bvbgfvdc vmnbnbcxc zvxm cztfchvk jhbklh hgjhg yhgj hhg ",
        image: image5
    },
    {
        name: "Streaded Training Classes",
        description: "lorem Ipsum AFgsh dxfmcxg dsdAgsdnh gxdfsaSfd gshdfmcg xdsASFgn cgfdsAghncg xfzsDbgcnx fzdSvbcfdv bcvxzcdfzb xfzsddcz fvncx gdfzsdAF szgdxhm bvbgfvdc vmnbnbcxc zvxm cztfchvk jhbklh hgjhg yhgj hhg ",
        image: image6
    },
]

interface Props {
    setSelectedPage:(value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section
        id="ourclasses"
        className='w-full bg-primary-100 py-40'
        >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ourclasses)}
        >
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
            }}
            >
            <div className='md:w-3/5 ml-6'>
                <Htext>
                    <p className='py-5'>
                        dcghtgre fsgd
                    </p>
                </Htext>
                        <p className='py-5'>
                            dcghtgre fsgd xfgdzsa Wfghfngxde fsagdh fn gxdfzsA gnhgf zsDA gdhmcfgds AFDgs dhfmgcf xndzs
                            AFg shdxfmcx gdsdA gsdnh gxdfs aSf dgshdfm cgxdsASFg ncgf dsAgh ncgxf zsDb gcnxfzd Svbcfdv bcvx zcdfzbxf zsd
                            dcz fvncx gdfzsdAFs zgd xhm,bvbg fvdcvm nbnbc xczvxm cztfc hvkjhb klhhgjh gyhg jhh gj
                        </p>
            </div>
            </motion.div>
            <div className='mt-10 h-[353px] overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item:ClassType, index) => (
                        <Class 
                            key ={`${item.name} - ${index}`}
                            name={item.name}
                            description={item.description}  
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
        </section>
    )
}

export default OurClasses
