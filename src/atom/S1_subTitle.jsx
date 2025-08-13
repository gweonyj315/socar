import { motion } from "motion/react"

const S1_subTitle = ({children}) => {
    const hidden = {y:40, opacity:0}
    const show = {y:0, opacity:1, transition:{duration:0.5, delay:0.7}}

    return <motion.h4
    className="font-medium text-white text-3xl"
    initial={hidden}
    animate={show}>
    {children}</motion.h4>;
}
 
export default S1_subTitle;