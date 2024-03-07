import styled from "@emotion/styled";

export const Process = styled.div`
margin: 40px 0 50px;
font-size: 13px;
display: flex;
justify-content: center;
color: #939393;
`;

export const FlexContainer = styled.ol`
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
export const ProcessDetail = styled.li``;
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

export const AgreementContainer = styled.form`
max-width: 1920px;
    min-height: 800px;
    padding: 0 80px 200px;
    margin: 0 auto;
    /* padding: 10px 80px; */
`;
export const CheckedAll = styled.div`
    font-weight:bold;
    margin-bottom:20px;
    
`;
export const CheckBoxContainer = styled.div`
    /* margin-top:10px; */
    /* margin:0; */
    padding:0;
    display:flex;
    align-items:center;
    
`;
export const Lable = styled.p`
    word-spacing:4px;
    font-size:16px;
    margin-right:40px;
`;

export const CheckedAllBox = styled.div`
    display:flex;
    justify-content:center;
    margin:0;
    padding:0 50px;

`;
export const Checkedleft = styled.div`
    padding-top:30px;
    display:flex;
    flex-direction:column;
    /* row-gap:5px; */
    flex:1;
    margin-right:40px;
    /* padding:80px; */
`;
export const ContentBox = styled.div`
    display:block;
    min-width:700px;
    height: 450px;
    /* overflow: hidden; */
    /* overflow-y: auto; */
    /* height: 250px; */
    margin: 20px 0 0;
    padding: 20px;
    color: #6d6d6d;
    font-size: 12px;
    line-height: 20px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    overflow:scroll;

`;
export const View = styled.div`
    word-wrap: break-word;
    word-break:keep-all;
   
`;

export const Checkedright = styled.div`
    padding-top:30px;
    display:flex;
    flex-direction:column;
    /* row-gap:5px; */
    flex:1;
    /* padding:80px; */
`;
export const CheckedBox1 = styled.div`
    display:block;
    min-width:700px;
    height:150px;
    margin: 20px 0 0;
    padding: 20px;
    color: #6d6d6d;
    font-size: 12px;
    line-height: 20px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
     overflow:scroll;
`;

export const OptionBox = styled.div`
    padding:0;
    display:flex;
    align-items:center;
    margin-right:10px;

`;
export const CheckedBox2 = styled.div`
    display:block;
    min-width:700px;
    height:168px;
    margin: 20px 0 0;
    padding: 20px;
    color: #6d6d6d;
    font-size: 12px;
    line-height: 20px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
     overflow:scroll;
`;
export const ButtonContainer = styled.div`
    margin: 50px 0 0;
    text-align: center;
    display:flex;
    justify-content:center;
    /* margin-right:20px; */
`;
export const Btn = styled.button`
    padding: 13px 20px;
    width:140px;
    height: 40px;
    font-size: 13px;
    display: block;
    /* padding: 12px 20px; */
    height: 40px;
    font-size: 13px;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid #bcbcbc;
    line-height: 1;
    font-weight: normal;
    text-decoration: none;
    /* vertical-align: middle; */
    word-spacing: -0.5px;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
    color: #000;
    background-color: #fff;
    -webkit-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
`;