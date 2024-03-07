import JoinHeader from "./joinHeader"
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { HeaderCons } from "./header";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AgreementContainer, Btn, ButtonContainer, CheckBoxContainer, CheckedAll, CheckedAllBox, CheckedBox1, CheckedBox2, Checkedleft, Checkedright, ContentBox, Lable, OptionBox, Process, ProcessDetailArrow, View } from "../styled/agreementStyled";
import { FlexContainer, ProcessDetail } from "./joinsuccess";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export const AgreementPage = ()=>{
    // 전체동의
    const [allCheck, setAllCheck] = useState(false);
    // 이용약관동의(필수)
    const [ageCheck, setAgeCheck] = useState(false);
    // 개인정보(필수)
    const [useCheck, setUseCheck] = useState(false);
    // 쇼핑정보수신(선택)
    const [shoppingCheck, setShoppingCheck] = useState(false);
    //sms 수신(선택)
    const [smsCheck, setSmsCheck] = useState(false);
    //이메일(선택)
    const [emailCheck, setEmailCheck] = useState(false);

    //전체동의는 필수항목들과 onChange로 구현
    const allBtnEvent =()=>{
        if(allCheck === false) {
          setAllCheck(true);
          setAgeCheck(true);
          setUseCheck(true);
          setShoppingCheck(true);
          setSmsCheck(true);
          setEmailCheck(true);
        }else {
          setAllCheck(false);
          setAgeCheck(false);
          setUseCheck(false);
          setShoppingCheck(false);
          setSmsCheck(false);
          setEmailCheck(false);
        } 
      };

      const ageBtnEvent =()=>{
        if(ageCheck === false) {
          setAgeCheck(true)
        }else {
          setAgeCheck(false)
        }
      };

      const useBtnEvent =()=>{
        if(useCheck === false) {
          setUseCheck(true)
        }else {
          setUseCheck(false)
        }
      };

      const shoppingCheckBtnEvent =()=>{
        if(shoppingCheck === false) {
            setSmsCheck(true);
            setEmailCheck(true);
          }else {
            setSmsCheck(false);
            setEmailCheck(false);
          } 
        };

      const SmsCheckBtnEvent =()=>{
        if(smsCheck === false) {
            setSmsCheck(true)
        }else {
            setSmsCheck(false)
        }
      };
      const emailCheckBtnEvent =()=>{
        if(emailCheck === false) {
            setEmailCheck(true)
        }else {
            setEmailCheck(false)
        }
      };

 
      useEffect(()=>{
        if(ageCheck===true && useCheck===true && shoppingCheck===true && smsCheck===true && emailCheck===true){
          setAllCheck(true)
        } else {
          setAllCheck(false)
        }
      }, [ageCheck,useCheck,shoppingCheck,smsCheck,emailCheck])

      useEffect(()=>{
        if(ageCheck===true && useCheck===true){
            setAllCheck(true)
        }else{
            setAllCheck(false)
        }
      },[ageCheck, useCheck])

      useEffect(()=>{
        if(smsCheck===true && emailCheck===true){
            setShoppingCheck(true)
        }else{
            setShoppingCheck(false)
        }
      },[smsCheck,emailCheck])
    const navigate = useNavigate();

    const submit = ()=>{
      if(allCheck===true || (useCheck===true && ageCheck===true) ){
          navigate('/join_membership')
      }else if(!useCheck===true || (shoppingCheck===true && smsCheck===true && emailCheck===true)){
         alert('필수동의해야합니다')
      }else if(!allCheck===true || !(useCheck===true && ageCheck===true)){
        navigate('/join_membership')
      }
    }
      const Main = ()=>{
        navigate('/')
      }
    return(
            <>
            <HeaderCons />
            <JoinHeader/>
            <Process>
                    <FlexContainer>
                        <ProcessDetailArrow style={{color:'black'}}>1. 약관동의</ProcessDetailArrow>
                        <ProcessDetailArrow>2. 정보입력</ProcessDetailArrow>
                        <ProcessDetail>3. 가입완료</ProcessDetail>
                    </FlexContainer>
                </Process>
            {/* form태그 */}
            <AgreementContainer onSubmit={submit}>
                <CheckedAll>전체동의</CheckedAll>
                <CheckBoxContainer>
                    <Checkbox {...label} id="all-check" checked={allCheck} onChange={allBtnEvent} />
                    <Lable>이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다. </Lable>
                </CheckBoxContainer>
                <CheckedAllBox>
                    <Checkedleft>
                        <CheckBoxContainer>
                            <Checkbox {...label} id="check1" checked={ageCheck} onChange={ageBtnEvent}/>
                            <Lable>이용약관 동의 (필수)</Lable>
                        </CheckBoxContainer>
                        <ContentBox>
                            <View>

                            <p>제1조(목적)</p>
                            <br />
                            이 약관은 주식회사 디와이디(전자상거래 사업자)가 운영하는 릴리바이레드 온라인 공식몰
                            (이하 "을" 이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스" 라 한다)를 이용
                            함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                            <br />
                            ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」
                            <br/>
                            <br/>
                            <br/>
                            <p>제2조(정의)</p>
                            ① “몰”이란 주식회사 디와이디 가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 
                            정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 
                            사업자의 의미로도 사용합니다.
                            <br/>
                            ② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                            <br />
                            <p>제3조 (약관 등의 명시와 설명 및 개정)</p>
                            ① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 
                            전화번호.모사전송번호.전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자등을 이용자가 쉽게 알 수 있도록 00 
                            사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
                            </View>
                        </ContentBox>
                    </Checkedleft>
                    <Checkedright>
                    <CheckBoxContainer>
                            <Checkbox {...label} id="check2" checked={useCheck}  onChange={useBtnEvent} />
                            <Lable>개인정보처리방침 동의(필수)</Lable>
                        </CheckBoxContainer>
                        <CheckedBox1>
                            <View>
                            ** 본 양식은 쇼핑몰 운영에 도움을 드리고자 샘플로 제공되는 서식으로 쇼핑몰 운영형태에 따른 수정이 필요합니다. 
                            쇼핑몰에 적용하시기 전, 쇼핑몰 운영 사항 등을 확인하시고 적절한 내용을 반영하여 사용하시기 바랍니다. **
                            <br/>
                            <br/>
                            <p>1. 개인정보 수집목적 및 이용목적</p>
                            <br/>
                            가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
                            <br/>
                            콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스
                            <br/>
                            <br/>
                            나. 회원 관리
                            <br/>
                            회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 
                            연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달

                            </View>
                        </CheckedBox1>
                        <br/>
                        <CheckBoxContainer>
                            <Checkbox {...label} id="check3" checked={shoppingCheck}  onChange={shoppingCheckBtnEvent}/>
                            <Lable>쇼핑정보 수신 동의 (선택)</Lable>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <OptionBox>
                                <Checkbox {...label} id="check4" checked={smsCheck}  onChange={SmsCheckBtnEvent}/>
                                <Lable style={{fontSize:"14px"}}>SMS 수신 동의(선택)</Lable>
                                <Checkbox {...label} id="check5" checked={emailCheck}  onChange={emailCheckBtnEvent}/>
                                <Lable style={{fontSize:"14px"}}>이메일 수신 동의 (선택)</Lable>
                            </OptionBox>
                        </CheckBoxContainer>
                        <CheckedBox2>
                            <p>할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는 유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다. 
                                단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.</p>
                            <br/>
                            <br/>
                            <p>선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.</p>
                        </CheckedBox2>
                    </Checkedright>
                </CheckedAllBox>
                <ButtonContainer>
                    <Btn style={{marginRight:"15px"}} onClick={Main}>취소</Btn>
                    <Btn style={{backgroundColor:"black", color:"white"}} type="submit"><Link to={'/join_membership'}></Link>확인</Btn>
                </ButtonContainer>
            </AgreementContainer>
        </>
    )
};
