import { ArrowRight } from "lucide-react";

const Section4 = () => {
    return <div className="bg-[url(img6.jpg)] bg-cover bg-center w-full h-[250px] flex flex-col gap-6 justify-center items-center text-white">
        <div className="text-[27px] font-bold">쏘카가 새롭게 그려나가는 자유로운 이동</div>
        <button className="border-[1px] rounded-lg border-white flex flex-row gap-1 p-5">
            <span className="font-semibold text-lg">브랜드 센터 바로가기</span>
            <ArrowRight color="white" size={27} strokeWidth={2}/>
        </button>
    </div>;
}
 
export default Section4;