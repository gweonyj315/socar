import { motion } from "motion/react"

const S1_title = ({children}) => {
    const hidden = {y:40, opacity:0}
    const show = {y:0, opacity:1, transition:{duration:0.5}}

    return <motion.h2
    className="font-bold text-white text-7xl"
    initial={hidden}
    animate={show}>
    {children}</motion.h2>;
}
 
export default S1_title;