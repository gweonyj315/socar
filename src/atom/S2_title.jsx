import { motion } from "motion/react"

const S2_title = ({children1, children2}) => {
    const hidden = {y:40, opacity:0}
    const show = {y:0, opacity:1, transition:{duration:0.5}}
    
    return <motion.div className="flex flex-col gap-2 text-white"
    initial={hidden}
    whileInView={show}
    viewport={{amount:"all", once:true}}>
        <div className="text-3xl font-medium">{children1}</div>
        <div className="text-3xl font-semibold">{children2}</div>
    </motion.div>;
}
 
export default S2_title;