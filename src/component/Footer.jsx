import styled from "styled-components";

function Footer() {
    return(
        <Footerwrap>
            <Inner>
                <TopArea>
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
                </TopArea>
                <BottomArea>
                    <Left>
                        <div>
                            <span>(주) 당근마켓 </span>
                            <span class="_1trxeqsd">
                                <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.5" x="0.535767" width="1.03646" height="10" fill="#868B94"></rect></svg>
                            </span>
                            <span><b>대표</b> 김용현, 황도연</span>
                            <span class="_1trxeqsd">
                                <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.5" x="0.535767" width="1.03646" height="10" fill="#868B94"></rect></svg>
                            </span>
                            <span><b>사업자번호</b>375-87-00088</span>
                        </div>
                        <div>
                            <span><b>직업정보제공사업 신고번호</b>J123456789</span>
                        </div>
                        <div>
                            <span><b>통신판매업 신고번호</b>J123456789</span>
                        </div>
                        <div>
                            <span><b>호스팅 사업자:</b>J123456789</span>
                        </div>
                        <div>
                            <span><b>주소</b>서울특별시 구로구 디지털로 300</span>
                        </div>
                        <div>
                            <span><b>전화</b>1544-9796</span>
                            <span class="_1trxeqsd">
                                <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.5" x="0.535767" width="1.03646" height="10" fill="#868B94"></rect></svg>
                            </span>
                            <span><b>고객문의</b>cs@daangn.com</span>
                        </div>
                    </Left>
                    <Right>
                        <ul>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <select name="" id="">
                                    <option value="">한국</option>
                                    <option value="">미국</option>
                                    <option value="">영국</option>
                                    <option value="">일본</option>
                                </select>
                            </li>
                        </ul>
                    </Right>
                </BottomArea>
            </Inner>
        </Footerwrap>
    )
}
const Footerwrap = styled.div`
    padding:48px 0;
    border-top:1px solid #ccc;
`
const Inner = styled.div`
    width:768px;
    margin:0 auto;
`
const TopArea = styled.div`
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

    button{
        padding:10px 1.5rem;
        font-size:16px;
        font-weight:700;
        line-height:23.76px;
        color:#212529;
        border:none;
        border-radius:6px;
        background-color:#E9ECEF;
    }
`
const BottomArea = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:48px;
    padding-top:24px;
    border-top:1px solid #ccc;
`
const Left = styled.div`

`
const Right = styled.div`
    
`
export default Footer;