import {Link} from 'react-router-dom'
import styled from 'styled-components';
function Header() {
    return(
        <>
        <HeaderWrapper>
            <Inner>
                <Logo>
                    <Link to="/">
                        <img src="/images/img-logo.jpg" alt="당근홈페이지" />
                    </Link>
                </Logo>
                <Nav>
                    <ul>
                        <li><Link to="subpage1">중고거래</Link></li>
                        <li><Link to="subpage2">동네업체</Link></li>
                        <li><Link to="subpage3">알바</Link></li>
                        <li><Link to="subpage4">부동산</Link></li>
                        <li><Link to="subpage5">중고차 직거래</Link></li>
                    </ul>
                </Nav>
                <InpBox>
                    <input type="text" placeholder='물품이나 동네를 검색해보세요'/>
                    <button className='btn-chat'>채팅하기</button>
                </InpBox>
            </Inner>
        </HeaderWrapper>
        </>
    )
}

const HeaderWrapper = styled.header `
`
const Inner = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1200px;
    height:64px;
    margin:0 auto;
`
const Logo = styled.h1`
    img{
        width:50px;
        height:50px;
    }
    
`
const Nav = styled.nav`
    ul{
        display:flex;
        gap:30px;
        li{
            a{
                font-size:18px;
                font-weight:700;
                color:#333;
                text-decoration:none;
                transition:color 0.2s ease;
            }
            a:hover{
                color:#FF6F0F;
            }
        }
    }
`
const InpBox = styled.div`
    display:flex;
    gap:8px;
    input{
        width:288px;
        padding:9px 12px;
        border:none;
        color:#212124;
        border-radius:4px;
        background:#f2f3f6;
        box-sizing:border-box;
    }
    .btn-chat{
        padding:8px 16px;
        font-size:16px;
        font-weight:700;
        border:1px solid #d1d3d8;
        border-radius:4px;
        background:none;
    }
`
export default Header;