import styled from "styled-components";

function Section4() {
    return(
        <Section>
            <Inner>
                <ImgBox>
                    <img src="/images/img-section4.webp" alt="" />
                </ImgBox>
                <TxtBox>
                    <p className="subTitle">알바</p>
                    <h3>걸어서 10분! <br /> 동네 알바 구하기</h3>
                    <p className="desc">당근하듯 쉽고, 편하게 <br /> 당근 알바로 동네 알바를 구할 수 있어요.</p>
                    <BtnWrap>
                        <button>내근처 알바 보기</button>
                    </BtnWrap>
                </TxtBox>
            </Inner>
        </Section>
    )
}

const Section = styled.div`
    background:#f9f9f9;
`
const Inner = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:1024px;
    margin:0 auto;
`
const ImgBox = styled.div`

    img{
        width:650px;
    }
`
const TxtBox = styled.div`
    .subTitle{
        font-size:18px;
        font-weight:700;
        color:#ff6f0f;
    }
    h3{
        margin-top:10px;
        font-size:42px;
        font-weight:700;
        line-height:57px;
    }
    .desc{
        margin-top:10px;
        font-size:20px;
        line-height:30px;
        color:#7c7c7c;
    }
`
const BtnWrap = styled.div`
    margin-top:24px;
    button{
        margin-top:8px;
        padding:12px 2rem;
        font-size:18px;
        font-weight:700;
        line-height:23.76px;
        color:#212529;
        border:none;
        border-radius:6px;
        background-color:#E9ECEF;
        transition:color 0.2s ease;
    }
    :hover{
        color:#FF6F0F;
    }
`
export default Section4;