import { motion } from "motion/react"
import { ArrowDownToLine } from "lucide-react";

const S1_button = ({children}) => {
    const hidden = {y:40, opacity:0}
    const show = {y:0, opacity:1, transition:{duration:0.5, delay:1.5}}

    return <motion.button className="absolute bottom-10 right-20 bg-blue-600 gap-2 rounded-lg flex justify-center items-center p-5 px-7 text-white text-base font-medium"
    initial={hidden}
    animate={show}>
    <ArrowDownToLine size={20} strokeWidth={1.8}/>{children}</motion.button>;
}
 
export default S1_button;