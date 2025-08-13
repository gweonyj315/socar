import { motion } from "motion/react"
import { CircleArrowRight } from "lucide-react";

const S3_imgbox = ({title, subtitle1, subtitle2}) => {
    const hidden = {y:40, opacity:0}
    const show = {y:0, opacity:1, transition:{duration:0.5}}

    return <motion.div className="relative w-full h-[400px] p-10 text-white bg-blue-950 rounded-2xl flex flex-col gap-4"
    initial={hidden}
    whileInView={show}
    viewport={{amount:"all", once:true}}>
        <div className="text-2xl font-semibold">{title}</div>
        <div className="flex flex-col gap-1 font-medium text-[15px]">
            <span>{subtitle1}</span>
            <span>{subtitle2}</span>
        </div>
        <div className="w-fit h-fit absolute right-10 bottom-10"><CircleArrowRight color="white" size={65} strokeWidth={1}/></div>
    </motion.div>;
}
 
export default S3_imgbox;