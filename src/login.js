import App from './App';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useFormik} from "formik";
import { object, string,ref } from 'yup';
import { And, AppContainer, Arrow, ErrMsgs, FormBox, FormInput, Input, InputBtn, JoinBtnWrapper, JoinMemberBtn, JoinText, KakaoLogin, LoginBar, LoginKakaoBtn, LoginLeft, LoginRight, LoginRightContainer, LoginSideBar, LoginWrapper, SearchBtn, SearchMembers, SnsBtn, SnsLogin, SnsTitle, Text, Text2, Top } from './styled/loginStyled';
import { CheckBtn, CloseBtn, ModalDiv, ModalWrap } from './modal/joinModal';
import CloseIcon from '@mui/icons-material/Close';

let loginSchema = object({
  id:string('문자타입이 아닙니다')
  .min(4, '4글자 이상 입력하세요')
  .max(10, '10글자 미만 입력하세요'),
  password:string('문자타입이 아닙니다')
  .min(6, '6글자 이상 입력하세요')
  .max(20, '20글자 이하 입력하세요')
});

export const LoginPage = ()=>{
    
  //모달창
  const [open, setIsOpen] = useState(false);

  //모달창 열기
  const openModal = ()=>{
      setIsOpen(true)
      document.querySelector('body').style.overflow = 'hidden';
  }
  //모달창 닫기
  const closeModal = ()=>{
      setIsOpen(false)
      document.querySelector('body').style.overflow = 'auto';
  }

  const formik = useFormik({
    initialValues : {email : '', password:''},
    onSubmit : ()=>{
      openModal();
    },
    validationSchema : loginSchema
  })

    const navigate = useNavigate();
    const Success = ()=>{
      navigate('/')
  }
 

    return(
        <>
        <AppContainer>
        <Top></Top>
        <form onSubmit={formik.handleSubmit}
                      className='input_box'>
        <LoginWrapper>
          {/* 왼쪽 */}
            <LoginLeft>
              <LoginBar>간편하게 로그인하기</LoginBar>
              <Text>귀찮은 입력없이<br />
                카카오로 쉽고 빠르게 로그인해보세요.
              </Text>
                <KakaoLogin>
                  <LoginKakaoBtn onClick={()=>navigate('/kakaologin')}></LoginKakaoBtn>
                </KakaoLogin>
            </LoginLeft>
            {/* 왼쪽끝 */}
            <LoginSideBar></LoginSideBar>
            {/* 오른쪽 */}
            <LoginRight>
              <LoginRightContainer>
                <LoginBar>일반회원 로그인
                  <Text2>비회원 배송조회</Text2>
                </LoginBar>
              </LoginRightContainer>
              <FormBox>
                  <FormInput>
                    <Input 
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.id}
                      id='id' name='id' placeholder='아이디를 입력하세요'></Input>
                        {
                          formik.touched.id && formik.errors.id &&
                          <ErrMsgs>{formik.errors.id}</ErrMsgs>
                          }
                      {/* {touch.email &&<p>{errMsgs.email}</p>} */}
                  </FormInput>
                  <FormInput>
                    <Input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      id='password' type="password" name='password' placeholder='비밀번호를 입력하세요'></Input>
                        {
                          formik.touched.password && formik.errors.password &&
                          <ErrMsgs>{formik.errors.password}</ErrMsgs>
                          }
                      {/* {touch.password && <p>{errMsgs.password}</p>} */}
                  </FormInput>
                <div>
                  <InputBtn type="submit">로그인</InputBtn>
                </div>
                <SearchMembers>
                  <SearchBtn>아이디 찾기</SearchBtn>
                  <And>|</And>
                  <SearchBtn>비밀번호 찾기</SearchBtn>  
                </SearchMembers>
                {/* sns login */}
                  <SnsTitle>
                    <SnsLogin>SNS 로그인</SnsLogin>
                  </SnsTitle>
                  <div>
                    <SnsBtn></SnsBtn>
                  </div>
                  <JoinBtnWrapper>
                    <JoinMemberBtn onClick={()=>navigate('/join_agreement')}>
                      <JoinText>회원가입</JoinText>
                      <Arrow></Arrow>
                    </JoinMemberBtn>
                  </JoinBtnWrapper>
              </FormBox>
            </LoginRight>
           </LoginWrapper>
           <ModalWrap open={open}>
                <ModalDiv>
                    <p>{formik.values.id}님으로 로그인 되었습니다.</p>
                    <CloseBtn onClick={closeModal}> <CloseIcon/></CloseBtn>  
                    <CheckBtn onClick={Success}>확인</CheckBtn>
                </ModalDiv>
            </ModalWrap>
         </form>
      </AppContainer>
    </>
    )
}