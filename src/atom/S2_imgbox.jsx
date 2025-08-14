import { motion } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react";

const S2_imgbox = ({title, subtitle1, subtitle2}) => {
    const hidden = {y:40, opacity:0}
    const show = {y:0, opacity:1, transition:{duration:0.5}}
    
    return <motion.div className="bg-[url(img1.jpg)] bg-cover bg-center  relative w-full h-[450px] p-10 text-white bg-blue-950 rounded-2xl flex flex-col gap-4"
    initial={hidden}
    whileInView={show}
    viewport={{amount:"all", once:true}}>
        <div className="text-2xl font-semibold">{title}</div>
        <div className="flex flex-col gap-1 font-medium text-[15px]">
            <span>{subtitle1}</span>
            <span>{subtitle2}</span>
        </div>
        <div className="w-fit h-fit absolute left-10 top-1/2"><ChevronLeft color="gray" size={45} strokeWidth={1.3}/></div>
        <div className="w-fit h-fit absolute right-10 top-1/2"><ChevronRight color="gray" size={45} strokeWidth={1.3}/></div>
    </motion.div>;
}
 
export default S2_imgbox;