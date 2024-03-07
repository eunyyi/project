import styled from "@emotion/styled";

export const JoinWrapper = styled.div`
margin:0;
padding:0;
/* position:relative; */
`;

export const JoinContainer = styled.div`
max-width: 1920px;
padding: 80px;
padding-bottom:0px;
margin: 0 auto;
min-width: 1025px;
`;

export const MainHeader = styled.div`
overflow: hidden;
margin: 10px 0 0;
line-height: 30px;
display: flex;
justify-content:flex-end;
`;

export const MainArea = styled.ol`
float: right;
display: block;
list-style-type: decimal;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;
/* position:relative; */

& > li {
    display: inline-block;
}
`;

export const MainAreaEtc = styled.span`
 display: inline-block;
margin: 0 4px 0 2px;
color: #7d7d7d;
font-size: 10px;
vertical-align: middle;

&::before{
color: #7d7d7d;
text-decoration: none;
cursor: pointer;
content: 'Home';
color: #7d7d7d;
color: currentColor;
font-size: 12px;
margin-right:3px;
}

&::after{
content:'회원가입';
color: #000;
font-size: 12px;
font-weight: normal;
margin-left:3px;

}
`;
export const MainTitle = styled.div`
/* margin-top: 55px; */
margin: 55px 0 45px;
text-align: center;
padding: 0;
font-size: 13px;
font-family: 'Poppins','Noto Sans KR',"맑은 고딕","malgun gothic","돋움","dotum",sans-serif;

& > h2{
font-size: 25px;
font-weight: normal;
text-align: center;
/* position:absolute; */
/* padding: 0;
margin: 0; */
}
`;


