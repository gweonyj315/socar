import S2_title from "../atom/S2_title";
import S3_imgbox from "../atom/S3_imgbox";

const Section3 = () => {
    return <>
    <section className="bg-slate-900 pb-20 w-screen h-fit flex justify-center items-center">
        <div className="w-[980px] h-fit p-10 flex flex-col gap-20">
            <S2_title children1={"끊임없이 확장되는 이동 경험"} children2={"쏘카의 다양한 서비스"}></S2_title>
            <div className="flex flex-col gap-8 h-fit">
                <S3_imgbox img={"first"} title={"쏘카플랜"} subtitle1={"한 달 이상 원하는 만큼 내 차처럼 이용하는"} subtitle2={"중장기 차량 대여 서비스"}></S3_imgbox>
                <S3_imgbox img={"second"} title={"모두의주차장"} subtitle1={"주차장 정보부터 할인까지 한번에 받는"} subtitle2={"주차장 연계 서비스"}></S3_imgbox>
                <S3_imgbox img={"third"} title={"쏘카 엔터프라이즈"} subtitle1={"쏘카의 이동상품을 맞춤 제공하는"} subtitle2={"기업 전용 서비스"}></S3_imgbox>
            </div>
        </div>
    </section>
    </>;
}
 
export default Section3;