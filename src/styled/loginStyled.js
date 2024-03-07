import styled from "@emotion/styled"

export const ErrMsgs = styled.p`
  color:red;
  font-size:12px;
  font-weight:600;
  padding-left:10px;
`;

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
    overflow-y: auto;
    margin: 0 auto;
    background-color: #fff; 
`;

export const Top = styled.div`
    text-align: center;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 70px;
`;

export const LoginWrapper = styled.div`
    width: 100%;
    padding-top: 80px;
    display: flex;
    align-items: stretch;
    justify-content: center;
`;

export const LoginLeft = styled.div`
    padding: 80px 80px 80px 0px;
`;
export const LoginBar = styled.h2`
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #EBEBEB;
    font-size: 26px;
    font-weight: 700;
    justify-content: space-between;
    display: flex;
    align-items: flex-end;
`;
export const Text = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: -5px;
`;
export const KakaoLogin = styled.div`
    margin-top: 25px;
`;
export const LoginKakaoBtn = styled.button`
    width: 350px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    color: #000;
    cursor: pointer;
    position: relative;
    background-color: #FEE500;
    border: 1px solid #FEE500;
        &::before{
            content: "";
            width: 13px;
            height: 12px;
            display: block;
            position: absolute;
            left: 5%;
            top: 50%;
            transform: translateY(-50%);
            background: url(https://cdn.snapfit.co.kr/image/sns_icon/icon_kakao.svg);
            background-repeat: no-repeat;
        }
        &::after{
            content: "카카오로 원터치 로그인/회원가입";
            font-size: 13px;
            font-weight: 700;
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
`;
export const LoginSideBar = styled.div`
    height: auto;
    border-right: 0.5px solid #EBEBEB;
    border-left: 0.5px solid #EBEBEB;
    position: relative;
    &::after{
      content: "OR";
      color: #C9C6C6;
      font-size: 14px;
      width: 20px;
      font-weight: 700;
      display: block;
      background-color: #fff;
      padding-top: 8px;
      position: absolute;
      left: -9px;
      bottom: 0;
    }
`;
export const LoginRight = styled.div`
    padding: 80px 0px 80px 80px;
`;
export const LoginRightContainer = styled.div`
    padding-top: -5px;
    position: relative;
    top: -8px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
export const Text2 = styled.p`
    display: inline-block;
    position: relative;
    padding-left: 60px;
    top: 18px;
    font-size: 14px;
    font-weight: 500;
    color: #BABABA;
`;
export const FormBox = styled.div`
    position: relative;
    width: 100%;
`;
export const FormInput = styled.div`
    margin-bottom: 15px;
`;

export const Input = styled.input`
    width: 100%;
    display: block;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px 20px;
    color: #a5a5a5;
    font-size: 13px;
    font-weight: 400;
    background-color: #fff;
    height: 40px;
`;
export const InputBtn = styled.button`
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    cursor: pointer;
    position: relative;
    width: calc(100% - 2px);
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    font-weight: 700;
    border-radius: 5px;
    margin-top: 40px;
`;
export const SearchMembers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
`;
export const SearchBtn = styled.button`
    color: #A5A5A5;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    border:none;
    outline: none;
    background-color: inherit;
`;
export const And = styled.span`
    display: inline-block;
    margin: 0 8px;
    color: #A5A5A5;
`;
export const SnsTitle = styled.div`
    margin: 30px 0 20px;
`;
export const SnsLogin = styled.span`
    font-size: 18px;
    font-weight: 700;
`;
export const SnsBtn = styled.button`
    width: calc(100% - 2px);
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    position: relative;
    display: block;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #E1E1E3;
    &::after{
        font-size: 16px;
        content: "네이버 계정으로 로그인";
        width: 100%;
        display: block;
        font-weight: 700;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        cursor: pointer;
    }
    &::before{
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 5%;
        top: 50%;
        transform: translateY(-50%);
        background-image:url(https://cdn.snapfit.co.kr/image/sns_icon/icon_naver_20.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        cursor: pointer;
    }
`;
export const JoinBtnWrapper = styled.div`
    position: relative;
`;
export const JoinMemberBtn = styled.button`
    border: none;
    width: 150px;
    height: 50px;
    line-height: 50px;
    display: flex;
    background-color: #FAFAFA;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 170px;
    left: 200px;
`;
export const JoinText = styled.span`
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    line-height: 50px;
    position: absolute;
    left: 40px;
`;
export const Arrow = styled.span`
    width: 6px;
    height: 6px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: rotate(-45deg);
    margin-left: 8px;
    position: relative;
    top: 21px;
    left: 90px;
`;