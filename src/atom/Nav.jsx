import { AlignJustify } from "lucide-react";
import icon from '/logo.svg'
import { useInView, motion } from "motion/react"
import { useRef } from "react"

const Nav = () => {
    const section2Ref = useRef(null)
    const isSection2InView = useInView(section2Ref, {
        amount:0.1, once: false,
    })

    return <motion.div className="z-10 fixed pt-6 pl-12 pr-12 top-0 left-0 w-screen h-fit flex flex-row justify-between bg-transparent"
    animate={{backgroundColor: isSection2InView ? "#0a2870" : "rgba(0, 0, 0, 0)"}}
    transition={{duration:0.4}}>
        <img src={icon} alt="" className="w-[120px]"/>
        <div><AlignJustify color="white" size={35}/></div>
    </motion.div>;
}
 
export default Nav;