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

export const ErrMsg = styled.p`
  color : black;
  font-size : 13px;
  margin-left:10px;
  margin-top:14px;
`;
export const ErrMsg2 = styled.p`
  color : black;
  font-size : 13px;
  margin-left:10px;
  margin-top:9px;
  margin-right:13px;

`;
export const Title = styled.div`
    position: relative;
    margin: 50px 0 30px;
    text-align: left;
    display: flex;
    justify-content: space-between;

    & > h3 {
        font-size: 16px;
        padding: 0;
        margin: 0;
        font-weight: normal;
    }
    & > h3 > span {
        color: #7f7f7f;
        margin-left: 5px;
        font-size: 12px;
    }
    & > p {
        font-size: 13px !important;
        color: #000 !important;
        margin: -40px 0 ;
        line-height: 6;
        text-align: right;
        color: var(--font-color-base);
    }
    & > p::after {
        content: "*";
        color: red;
        vertical-align: middle;
        margin-right: 5px;
        margin-left:5px;
    }
`;
export const BasicInformation = styled.div`
    width: 100%;
    border-top: 1px solid #000;
    margin-top: -20px;
    padding: 0;
    font-size: 13px;
    text-align: center;
    & > table{
        width: 100%;
        border: 0;
        border-spacing: 0;
        border-collapse: collapse;
   
    }
`;
export const Tr = styled.tr`
    display: table-row;
    margin-bottom: 10px;
    vertical-align: inherit;
    border-color: inherit;
    & > td {
        padding: 20px 20px;
        height: auto;
        border-bottom: 1px solid #e5e5e5;
        line-height: 22px;
        vertical-align: middle;
        display: flex;
    }
`;
export const CheckedItem = styled.th`
    border-bottom: 1px solid #e5e5e5;
    background-color: #f6f6f6;
    line-height: 22px;
    vertical-align: middle;
    font-weight: 500;
    padding-right: 15px;
    padding: 10px 30px;
    text-align: left;
    width: 190px;
    &::after{
        content: "*";
        color: red;
        vertical-align: middle;
        margin-left: 5px;
    
    }
`;
export const Item = styled.th`
    border-bottom: 1px solid #e5e5e5;
    background-color: #f6f6f6;
    line-height: 22px;
    vertical-align: middle;
    font-weight: 500;
    padding-right: 15px;
    padding: 10px 30px;
    text-align: left;
    width: 190px;
`;
export const InputInformation = styled.input`
    width: 290px;
    height: 40px;
    line-height: 40px;
    padding: 2px 4px 2px 15px;
    border: 1px solid #e0e0e0;
    color: var(--font-color-base);
    font-size: 13px;
    box-sizing: border-box;
    outline: 1px;
`;
export const AddText = styled.span`
    margin-left: 10px;
    color: #868686;
    font-size: 12px;
    line-height: 22px;
    margin-top: 13px;
    font-weight: 500;
`;
export const AddressArea = styled.td`
    padding-top: 25px;
    border-bottom: 1px solid #e5e5e5;
    vertical-align: middle;
    padding-bottom: 15px;
    & > ul{
        display: flex;
        padding: 0;
        margin: 0;
        flex-direction: column;
    }
`;
export const AddressNumber = styled.li`
    margin-right: 30px;
    margin-bottom:10px;
    display: inline-flex;
`;   
export const InputAddress = styled.input`
    background: #f9f9f9;
    width: 190px;
    height: 40px;
    line-height: 40px;
    padding: 2px 4px 2px 15px;
    border: 1px solid #e0e0e0;
    color: var(--font-color-base);
    font-size: 13px;
    box-sizing: border-box;
    outline: 1px;
`;export const InputAddress2 = styled.input`
    background: #f9f9f9;
    width: 290px;
    height: 40px;
    line-height: 40px;
    padding: 2px 4px 2px 15px;
    border: 1px solid #e0e0e0;
    color: var(--font-color-base);
    font-size: 13px;
    box-sizing: border-box;
    outline: 1px;
`;
export const SearchAddressBtn = styled.button`
    cursor: pointer;
    margin-left: 10px;
    display: inline-block;
    padding: 12px 20px;
    height: 40px;
    font-size: 13px;
    box-sizing: border-box;
    border: 1px solid #bcbcbc;
    border-radius: 4px;
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
`;
export const SelectContainer = styled.td`
    display: flex;
    & > select {
        width: 86px;
        min-width: 0;
        margin-right: 5px;
        max-width: 100%;
        height: 40px;
        padding:0 30px 0 10px;
        font-size: 12px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        background-size: 11px auto;
        box-sizing: border-box;
    }
`;

export const InputPhone = styled.input`
    width: 290px;
    height: 40px;
    line-height: 40px;
    padding: 2px 4px 2px 15px;
    border: 1px solid #e0e0e0;
    color: var(--font-color-base);
    font-size: 13px;
    box-sizing: border-box;
    outline: 1px;
`;
export const InputBasicPhone = styled.input`
    width: 290px;
    height: 40px;
    line-height: 40px;
    padding: 2px 4px 2px 15px;
    border: 1px solid #e0e0e0;
    color: var(--font-color-base);
    font-size: 13px;
    box-sizing: border-box;
    outline: 1px;`;
export const InputBirth = styled.input`
    width: 86px;
    height: 40px;
    line-height: 40px;
    padding: 2px 4px 2px 15px;
    border: 1px solid #e0e0e0;
    color: var(--font-color-base);
    font-size: 13px;
    box-sizing: border-box;
    outline: 1px;
`;
export const TextInput = styled.span`
    margin-top: 8px;
    margin-left:10px;
    margin-right:10px;
    padding: 0;
`;
export const BirthSolar = styled.span`
    margin-left: 5px;
    line-height: px;
    display: flex;
    /* margin-top: 1px; */

    & > input {
        position: relative;
        opacity: 1;
        width: 18px;
        height: 18px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 0;
        background: url(//img.echosting.cafe24.com/skin/skin/common/bg_radio.png) no-repeat 0 0;
        background-size: 18px 18px;
        outline: 0;
        padding:0;
        margin-right: 10px;
        }
    & > label {
        padding-right: 20px;
        }
`;
export const JoinBtnContainer = styled.div`
    margin: 50px 0 0;
    text-align: center;
    &>button {
        min-width: 135px;
        padding-left: 15px;
        padding-right: 15px;
        height: 40px;
        font-size: 13px;
        display: inline-block;
        padding: 12px 20px;
        height: 40px;
        font-size: 13px;
        box-sizing: border-box;
        border: 1px solid transparent;
        line-height: 1;
        font-weight: bold;
        text-decoration: none;
        vertical-align: middle;
        word-spacing: -0.5px;
        letter-spacing: 0;
        text-align: center;
        white-space: nowrap;
        color: #fff;
        background-color: #000;
        cursor: pointer;
    }
`;
