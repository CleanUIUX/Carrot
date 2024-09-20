import styled from "styled-components";

function Section3() {
    return(
        <Section>
            <Inner>
                <TxtBox>
                    <p className="subTitle">동네생활</p>
                    <h3>이웃만 아는 <br /> 동네 정보와 이야기</h3>
                    <p className="desc">우리동네의 다양한 정보와 이야기를<br />공감과 댓글로 나누어요.</p>
                    <VillageList>
                        <li>
                            <img src="/images/ico-village1.svg" alt="" />
                            <p className="title">동네모임</p>
                            <span className="info">근처 이웃들과 동네 <br /> 이야기를 해보세요.</span>
                        </li>
                        <li>
                        <img src="/images/ico-village2.svg" alt="" />
                            <p className="title">동네질문</p>
                            <span className="info">궁금한 게 있을 땐 <br /> 이웃에 물어보세요.</span>
                        </li>
                        <li>
                        <img src="/images/ico-village3.svg" alt="" />
                            <p className="title">동네분실센터</p>
                            <span className="info">무언가를 잃어버렸다면 <br />글을 올려보세요.</span>
                        </li>
                    </VillageList>
                </TxtBox>
                <ImgBox>
                    <img src="/images/img-section3.webp" alt="" />
                </ImgBox>
            </Inner>
        </Section>
    )
}

const Section = styled.div`
    background:#FFF8F1;
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
const VillageList = styled.ul`
    display:flex;
    gap:16px;
    margin-top:16px;

    .title{
        margin:16px 0 8px;
        font-size:14px;
        font-weight:700;
    }
    .info{
        font-size:12px;
        color:#7c7c7c;
    }
`
export default Section3;