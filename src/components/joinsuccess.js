import { HeaderCons } from "./header";
import JoinHeader from "./joinHeader";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

export const Process = styled.div`
margin: 40px 0 50px;
font-size: 13px;
display: flex;
justify-content: center;
color: #939393;
`;

export const HFlexContainer = styled.ol`
display: flex;
justify-content:center;
list-style-type: decimal;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;
& > li {
    display: inline-block;
    font-size: 14px;
    color: #939393;
}
`;
export const ProcessDetail = styled.li`

`;
export const ProcessDetailArrow = styled.li`

    &::after{
    margin: -2px 30px 0;
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    vertical-align: middle;
    border-left: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    }
`;
export const FlexContainer = styled.div`
    /* padding:300px; */
    margin:0 auto;
    position:relative;
    margin-left:5px;
    max-width: 898px;
    margin: 0px auto;
    display:flex;
    justify-content:center;
    
`;

export const Container = styled.div`
    width:896px;
    margin:0;
    /* height:396px; */
    padding: 180px;
    border: 1px solid #e5e5e5;
    display:inline-block;
    justify-content:center;
    /* flex-direction:column; */
    row-gap:20px;
    overflow: hidden;
    position: absolute;
	left: 0;
	/* width: 100%; */
	height: 100%;
    white-space: nowrap;
`;
export const Text = styled.p`
    position: absolute;
	top: 80px;
	left: 0;
	width: 100%;
	height: 100%;
    font-size: 16px;
    width:100%;
    /* position:relative; */
    color: #000000;
    text-align:center;
    margin-top:50px;
`;
export const Benefit = styled.div`
    font-size:13px;
    text-align:center;
    position: absolute;
    top:170px;
    left:0;
    width: 100%;
    height: 100%;
    margin-top:30px;
`;

export const ButtonContainer = styled.div`
    /* text-align: center; */
    /* margin: 50px 0 0; */
    /* margin-top:50px; */
    /* padding:0; */
    position:absolute;
    top:420px;


`;
export const MainButton = styled.button`
    cursor:pointer;
    min-width: 135px;
    padding-left: 15px;
    padding-right: 15px;
    display: inline-block;
    padding: 12px 20px;
    height: 40px;
    font-size: 13px;
    box-sizing: border-box;
    border: 1px solid #bcbcbc;
    line-height: 1;
    font-weight: normal;
    text-decoration: none;
    vertical-align: middle;
    word-spacing: -0.5px;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
    color: #000;
    background-color: #fff;
    -webkit-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
`;

export const JoinSuccessPage = ()=>{
    const navigate = useNavigate();
    const MoveMain = ()=>{
    navigate('/')
}
    return(
        <>
            <HeaderCons/>
            <JoinHeader/>
            <Process>
                    <HFlexContainer>
                        <ProcessDetailArrow>1. 약관동의</ProcessDetailArrow>
                        <ProcessDetailArrow>2. 정보입력</ProcessDetailArrow>
                        <ProcessDetail style={{color:'black'}}>3. 가입완료</ProcessDetail>
                    </HFlexContainer>
                </Process>
                <FlexContainer>
                    <Container>
                        <Text>회원가입이 완료 되었습니다.</Text>
                        <Benefit><strong>100만원 이상</strong>구매시 1%을 추가적립 받으실 수 있습니다.(최대100,000원)</Benefit>
                    </Container>
                    <ButtonContainer>
                        <MainButton onClick={MoveMain}>메인으로 이동</MainButton>
                    </ButtonContainer>
                </FlexContainer>
        </>
    )
};