import F_title from "../atom/F_title";
import F_subtitle from "../atom/F_subtitle";

const Footer = () => {
    return <div>
        <div className="flex flex-row gap-[100px] w-screen h-[500px] bg-slate-700 justify-center pt-20">
            <div className="flex flex-col gap-3">
                <F_title content={"회사"}></F_title>
                <F_subtitle content={"회사 소개"}></F_subtitle>
                <F_subtitle content={"채용 공고"}></F_subtitle>
            </div>
            <div className="flex flex-col gap-3">
                <F_title content={"쏘카"}></F_title>
                <F_subtitle content={"이용 안내"}></F_subtitle>
                <F_subtitle content={"요금 안내"}></F_subtitle>
                <F_subtitle content={"혜택 안내"}></F_subtitle>
                <F_subtitle content={"이용약관"}></F_subtitle>
            </div>
            <div className="flex flex-col gap-3">
                <F_title content={"문의"}></F_title>
                <F_subtitle content={"자주 하는 질문"}></F_subtitle>
                <F_subtitle content={"제휴 문의"}></F_subtitle>
            </div>
            <div className="flex flex-col gap-3">
                <F_title content={"관련 웹사이트"}></F_title>
                <F_subtitle content={"(주)쏘카"}></F_subtitle>
                <F_subtitle content={"쏘카플랜"}></F_subtitle>
                <F_subtitle content={"모두의주차장"}></F_subtitle>
                <F_subtitle content={"쏘카 엔터프라이즈"}></F_subtitle>
                <F_subtitle content={"쏘카일레클"}></F_subtitle>
                <F_subtitle content={"쏘카 항공권"}></F_subtitle>
                <F_subtitle content={"쏘카 숙박"}></F_subtitle>
            </div>
        </div>
    </div>;
}
 
export default Footer;