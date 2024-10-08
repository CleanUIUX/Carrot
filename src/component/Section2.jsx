import styled from "styled-components";

function Section2() {
    return(
        <Section>
            <Inner>
                <ImgBox>
                    <img src="/images/img-section2.webp" alt="" />
                </ImgBox>
                <TxtBox>
                    <p className="subTitle">중고거래</p>
                    <h3>믿을만한 <br /> 이웃 간 중고거래</h3>
                    <p className="desc">동네 주민들과 가깝고 따뜻한 거래를 <br /> 지금 경험해보세요.</p>
                    <BtnWrap>
                        <button>인기매물 보기</button>
                        <button>믿을 수 있는 중고거래</button>
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
        width:665px;
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
export default Section2;