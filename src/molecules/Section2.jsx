import S2_imgbox from "../atom/S2_imgbox";
import S2_title from "../atom/S2_title";

const Section2 = () => {
    return <>
        <section className="bg-slate-900 w-screen h-screen flex justify-center items-center">
            <div className="w-[980px] h-[650px] p-10 flex flex-col gap-20">
                <S2_title children1={"차가 필요한 모든 순간"} children2={"쏘카 카셰어링"}></S2_title>
                <S2_imgbox title={"전국 어디서나"} subtitle1={"가까운 거리에 있는 쏘카존이나"} subtitle2={"내가 있는 곳으로 차를 불러 편하게 이동"}></S2_imgbox>
            </div>
            
        </section>
    </>;
}
 
export default Section2;