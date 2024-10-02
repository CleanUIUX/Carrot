import { useState } from "react";
import styled from "styled-components";

function Button() {
    const [inputValue , setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <>
            <Wrap>
                <Inner>
                    <h1><img src="" alt="" /></h1>
                    <TitleBox>
                        <p>안녕하세요, 마케터를 위한 <br /> 데이터 가공 솔류션 <span>퍼즐</span>이에요👋</p>
                        <p className="intro">당신이 <span>인사이트에 더 쉽고 빠르게 도달</span> 하도록 <br /> 데이터 조각은 퍼즐이 맞춰드릴게요</p>
                    </TitleBox>
                    <InpBox>

                        <FormBox>
                            <input 
                                type="text" 
                                className="inp_base" 
                                title="아이디입력"
                                placeholder="아이디(사내 이메일 주소)를 입력 해주세요" 
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </FormBox>

                        <FormBox>
                            <input 
                                type="text" 
                                className="inp_base" 
                                title="비밀번호입력" 
                                placeholder="비밀번호를 입력해주세요"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </FormBox>
                        <BtnFindPwd>비밀번호를 잊어버리셨나요?</BtnFindPwd>
                        <BtnWrap>
                            <BtnLogin>로그인</BtnLogin> 
                            <button>회원가입</button>
                        </BtnWrap>
                    </InpBox>
                </Inner>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    background:#F2F5F7;
`
const Inner = styled.div`
    width:544px;
    padding:0 40px;
    margin:0 auto;
`
const TitleBox = styled.div`
    p{
        font-size:30px;
        font-weight:700;
        line-height:39px;
        letter-spacing:-.2px;
        text-align:center;

        span{
            color:#FE5F1B;
        }
    }
    .intro{
        margin-top:8px;
        font-size:18px;
        font-weight:500;
        line-height:23px;
    }
`
const InpBox = styled.div`
    margin-top:48px;
    padding:48px 82px;
    border-radius:30px;
    background:#fff;
    box-shadow:0px 0px 24px rgba(0, 0, 0, 0.1) ;
`
const FormBox = styled.div`
    position:relative;
    margin-top:16px;

    &:first-child{
        margin-top:0;
    }
    .inp_base{
        width:100%;
        height:50px;
        padding:8px 16px;
        font-size:14px;
        line-height:24px;
        color:#90969c;
        border:1px solid #e0e0e0;
        border-radius:10px;
        box-sizing:border-box;
    }
`
const BtnFindPwd = styled.a`
    display:flex;
    justify-content:right;
    margin-top:8px;
    padding:0;
    border:0;
    background:none;
    font-size:14px;
    font-weight:500;
    color:#fe5f18;
`
const BtnWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:40px;
`
export default Button;