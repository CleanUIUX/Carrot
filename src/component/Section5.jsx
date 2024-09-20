import styled from "styled-components";

function Section5() {
    return(
        <Section>
            <Inner>
                <TxtBox>
                    <p className="subTitle">동네업체</p>
                    <h3>내 근처에서 찾는 <br /> 동네업체</h3>
                    <p className="desc">이웃들의 추천 후기를 확인하고 <br /> 동네 곳곳의 업체들을 찾을 수 있어요.</p>
                    <BtnWrap>
                        <button>당근 동네업체 보기</button>
                    </BtnWrap>
                </TxtBox>
                <ImgBox>
                    <img src="/images/img-section5.webp" alt="" />
                </ImgBox>
            </Inner>
        </Section>
    )
}

const Section = styled.div`
    background:#F6FDEC;
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
export default Section5;