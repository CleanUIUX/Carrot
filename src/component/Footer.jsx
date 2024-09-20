import styled from "styled-components";

function Footer() {
    return(
        <Footerwrap>
            <Inner>
                <TopAeaa>
                    <Nav>
                        <ul>
                            <li>
                                <a href="">중고거래</a>
                            </li>
                            <li>
                                <a href="">동네업체</a>
                            </li>
                            <li>
                                <a href="">당근알바</a>
                            </li>
                            <li>
                                <a href="">부동산</a>
                            </li>
                            <li>
                                <a href="">중고차 직거래</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="">당근비즈니스</a>
                            </li>
                            <li>
                                <a href="">채팅하기</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="">자주 묻는 질문</a>
                            </li>
                            <li>
                                <a href="">회사 소개</a>
                            </li>
                            <li>
                                <a href="">인재 채용</a>
                            </li>
                        </ul>
                    </Nav>
                    <DownWrap>
                        <p className="title">당근 앱 다운로드</p>
                        <BtnWrap>
                            <button>App Store</button>
                            <button>Google Play</button>
                        </BtnWrap>
                    </DownWrap>
                </TopAeaa>
                
            </Inner>
        </Footerwrap>
    )
}
const Footerwrap = styled.div`
    padding-top:48px;
    border-top:1px solid #ccc;
`
const Inner = styled.div`
    width:768px;
    margin:0 auto;
`
const TopAeaa = styled.div`
    display:flex;
    justify-content:center;
    gap:50px;
`
const Nav = styled.nav`
    display:flex;

    ul{
        display:flex;
        flex-direction:column;
        li{
            margin:16px;
            font-size:14px;
            a{
                color:#333;
                text-decoration:none;
            }
            :hover{
                color:#ff6f0f;
            }
        }
    }
`

const DownWrap = styled.div`
    .title{
        font-size:14px;
        font-weight:700;
    }
`
const BtnWrap = styled.div`
    display:flex;
    gap:8px;
    margin-top:8px;
`
export default Footer;