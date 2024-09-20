import styled from "styled-components";

function Section1() {
    return(
        <Section>
            <Inner>
                <TxtBox>
                    <h2>당신 근처의 <br /> 지역 생활 커뮤니티</h2>
                    <p className="txt">동네라서 가능한 모든 것 <br /> 당근에서 가까운 이웃과 함께해요.</p>
                </TxtBox>
                <BtnWrap>
                    <button className="btn-google">Google Play</button>
                    <button className="btn-app">App Store</button>
                </BtnWrap>
            </Inner>
        </Section>
    )
}

const Section = styled.div`
    display:flex;
    align-items:center;
    height:760px;
    margin-top:24px;
    background:#fffae0;
`
const Inner = styled.div`
    position:relative;
    width:1024px;
    margin:0 auto;

    &::after{
        content:'';
        position:absolute;
        top:50%;
        right:0;
        width:500px;
        height:700px;
        background:url(/images/img-section1.webp) no-repeat 50% 50% / 650px 800px;
        transform:translateY(-50%);
    }
`
const TxtBox = styled.div`
    h2{
        font-size:54px;
        font-weight:700;
        line-height:64px;
    }
    .txt{
        margin-top:32px;
        font-size:20px;
        line-height:24px;
        color:#7c7c7c;
    }
`
const BtnWrap = styled.div`
    display:flex;
    gap:10px;
    margin-top:20px;
    button{
        width:180px;
        height:56px;
        padding:14px 20px 14px 46px;
        font-size:16px;
        font-weight:700;
        color:#fff;
        border:0;
        border-radius:8px;
        box-sizing:border-box;
    }
    .btn-google{
        background:#FF6F0F url(/images/ico-google.svg) no-repeat 18% 50% / 18px 21px;
    }
    .btn-app{
        background:#FF6F0F url(/images/ico-app.svg) no-repeat 24% 44% / 18px 22px;
    }
`
export default Section1;