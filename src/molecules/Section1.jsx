import S1_subTitle from "../atom/S1_subTitle"
import S1_title from "../atom/S1_title"
import S1_button from "../atom/S1_button"

const Section1 = () => {
    return <>
    <section className="bg-slate-500 relative w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-10 justify-center items-center">
        <S1_title>Lifetime Mobility</S1_title>
        <S1_subTitle>라이프타임 모빌리티 플랫폼, 쏘카</S1_subTitle>
        </div>
        <S1_button>쏘카 앱 다운로드</S1_button>
    </section>
    </>
}
 
export default Section1;