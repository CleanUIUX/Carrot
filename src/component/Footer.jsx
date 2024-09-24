import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {

    const menus = [
        {
            title: "메인 메뉴",
            items: ["중고거래", "동네업체", "당근알바", "부동산", "중고차 직거래"],
        },
        {
            title: "비즈니스 메뉴",
            items: ["당근비즈니스", "채팅하기"],
          },
          {
            title: "정보 메뉴",
            items: ["자주 묻는 질문", "회사 소개", "인재 채용"],
          },
    ]

    return(
        <Footerwrap>
            <Inner>
                <TopArea>
                    <Nav>
                        {menus.map((menu, index) => (
                            <ul key={index}>
                                {menu.items.map((item, idx) =>(
                                    <li key={idx}>
                                        <Link to="/">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </Nav>
                    <DownWrap>
                        <p className="title">당근 앱 다운로드</p>
                        <BtnWrap>
                            <button>App Store</button>
                            <button>Google Play</button>
                        </BtnWrap>
                    </DownWrap>
                </TopArea>
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
// const BottomArea = styled.div`
//     display:flex;
//     justify-content:space-between;
//     margin-top:48px;
//     padding-top:24px;
//     border-top:1px solid #ccc;
// `
// const Left = styled.div`

// `
// const Right = styled.div`
    
// `
export default Footer;