
import React from 'react';
import {useFormik} from "formik";
import {object,ref,string} from "yup"
import { useState } from 'react';
import PopupPostCode from './PopupPostCode';
import { ErrMsg, AddText, AddressArea, AddressNumber, BasicInformation, BirthSolar, CheckedItem, InputAddress, InputBirth, InputInformation, InputPhone, Item, JoinBtnContainer, SearchAddressBtn, SelectContainer, TextInput, Title, Tr, InputAddress2, Process, FlexContainer, ProcessDetailArrow, ProcessDetail, InputBasicPhone, ErrMsg2 } from './styled/joinMembershipStyled';
import { useNavigate } from 'react-router-dom';
import { JoinHeader } from './components/joinHeader';
import { HeaderCons } from './components/header';
// import * as React from 'react';
import Radio from '@mui/material/Radio';


  


const username = /^[가-힣]+$/;
// const phoneCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,4}$/;
const idcheck1 = /^(?=.*[a-z])(?=.*[0-9]).{4,10}$/;
const idcheck2 = /^(?=.*[a-z])(?=.*[^a-z0-9]).{4,10}$/;
const idcheck3 = /^(?=.*[^a-z0-9])(?=.*[0-9]).{4,10}$/;
const passwordcheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;


let userSchema = object({
    id:string('문자타입이 아닙니다')
        .matches(idcheck1 || idcheck2 || idcheck3, {message:'형식에 맞게 입력해주세요'})
        .required('필수입력값입니다'),
    password:string('문자타입이 아닙니다')
        .required('필수입력값입니다')
        .matches(passwordcheck,'형식에 맞게 입력해주세요'),
    passwordCheck:string('문자타입이 아닙니다')
        .oneOf([ref('password'), null], '비밀번호가 일치하지 않습니다')
        .min(6, '6글자 이상 입력하세요')
        .max(20, '20글자 이하로 입력')
        .required('필수입력값입니다'),
    name:string('문자타입이 아닙니다')
        .required('필수입력값입니다')
        .matches(username,'이름형식으로 입력해주세요'),
    phone:string('문장타입 아닙니다')
        .min(11, '11자리로 입력하여주세요')
        .max(11)
        .matches(/^[0-9]+$/, '숫자만 입력해주세요.')
        // .test()
        .required('필수입력값입니다'),
    phone2:string('문장타입 아닙니다')
        .min(11, '11자리로 입력하여주세요')
        .max(11)
        .matches(/^[0-9]+$/, '숫자만 입력해주세요.'),
    email:string('문자타입이 아닙니다')
        .email('이메일 형식이 아닙니다')
        .max(30, '30글자를 초과는 안됩니다')
        .required('필수입력값입니다.'),
    zipCode : string('문자타입이 아닙니다').required('필수입력값입니다'),
    address : string('문자타입이 아닙니다').required('필수입력값입니다'),
    addressDetail : string('문자타입이 아닙니다').notRequired(),
    birth:string('문자타입이 아닙니다')
        .min(4, '4자리로 입력하여주세요')
        .max(4)
        .matches(/^[0-9]+$/, '숫자만 입력해주세요.'),
    month:string('문자타입이 아닙니다')
        .min(2, '2자리로 입력하여주세요')
        .max(2)
        .matches(/^[0-9]+$/, '숫자만 입력해주세요.'),
    date:string('문자타입이 아닙니다')
        .min(2, '2자리로 입력하여주세요')
        .max(2)
        .matches(/^[0-9]+$/, '숫자만 입력해주세요.'),
});



export const JoinMembershipPage=()=>{
    const [selectedValue, setSelectedValue] = React.useState('a');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    }


    const navigate = useNavigate();
    //팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    //팝업창 열기
    const openPostCode = ()=>{
        setIsPopupOpen(true);
        
    }

    //팝업창 닫기
    const closePostCode = ()=>{
        setIsPopupOpen(false)
        
    }
    const formik = useFormik({
        initialValues : {
            email:'', 
            password:'', 
            passwordCheck:'',
            name:'',
            phone:'',
            id:'',
            zipCode:'',
            address:'',
            addressDetail:'',
            birth:'',
            month:'',
            date:''
        },
        onSubmit : ()=>{
           navigate('/join_success');
        },
        validationSchema : userSchema
    });

    const handlePostCode = (data)=>{
        let fullAddress = data.address;
        let extraAddress = '';

        if(data.addressType === 'R'){
            if(data.bname !== ''){
                extraAddress += data.bname;
            }
            if(data.buildingName !== ''){
                extraAddress += (extraAddress !== '' ? 
                `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '' );
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        formik.setFieldValue('address', fullAddress);
        formik.setFieldValue('zipCode', data.zonecode);
        setIsPopupOpen(false);
    }
    
   
    return(
    <>
            <HeaderCons/>
            <JoinHeader/>
            <Process>
                    <FlexContainer>
                        <ProcessDetailArrow>1. 약관동의</ProcessDetailArrow>
                        <ProcessDetailArrow style={{color:'black'}}>2. 정보입력</ProcessDetailArrow>
                        <ProcessDetail>3. 가입완료</ProcessDetail>
                    </FlexContainer>
                </Process>
                <form 
                    style={{maxWidth:'898px', margin:'0 auto'}}
                    onSubmit={formik.handleSubmit}>
                    <Title>
                        <h3>기본정보</h3>
                        <p>필수입력사항</p>
                    </Title>
                    <BasicInformation>
                        <table>
                            <tbody>
                                <Tr>
                                    <CheckedItem>아이디</CheckedItem>
                                    <td>
                                        <InputInformation
                                            onBlur={formik.handleBlur}
                                            name="id"
                                            onChange={formik.handleChange}
                                            value={formik.values.id}
                                            placeholder="아이디">
                        
                                        </InputInformation>
                                             {
                                            formik.touched.id && formik.errors.id &&
                                            <ErrMsg>{formik.errors.id}</ErrMsg>
                                             }
                                        <AddText>(영소문자와 숫자를 포함한 4~10글자)</AddText>
                                        
                                    </td>
                                    
                                </Tr>
                                <Tr>
                                    <CheckedItem>비밀번호</CheckedItem>
                                    <td>
                                        <InputInformation 
                                            onBlur={formik.handleBlur}
                                            name='password'
                                            type='password'
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            placeholder='비밀번호'>
                                        </InputInformation>
                                        {
                                            formik.touched.password && formik.errors.password &&
                                            <ErrMsg>{formik.errors.password}</ErrMsg>
                                        }
                                        <AddText>(영문소문자/숫자/기호를 포함한 8~15글자)</AddText>
                                    </td>
                                </Tr>
                                <Tr>
                                    <CheckedItem>비밀번호확인</CheckedItem>
                                    <td>
                                        <InputInformation 
                                            onBlur={formik.handleBlur}
                                            name='passwordCheck'
                                            type='password'
                                            onChange={formik.handleChange}
                                            value={formik.values.passwordCheck}
                                            placeholder='비밀번호확인'>
                                        </InputInformation>
                                        {
                                            formik.touched.passwordCheck && formik.errors.passwordCheck &&
                                            <ErrMsg>{formik.errors.passwordCheck}</ErrMsg>
                                        }
                                    </td>
                                </Tr>
                                <Tr>
                                    <CheckedItem>이름</CheckedItem>
                                    <td>
                                        <InputInformation 
                                            onBlur={formik.handleBlur}
                                            name='name'
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                            placeholder='이름'>
                                        </InputInformation>
                                            {
                                                formik.touched.name && formik.errors.name &&
                                                <ErrMsg>{formik.errors.name}</ErrMsg>
                                                }
                                    </td>
                                </Tr>
                                <Tr>
                                    <CheckedItem>주소</CheckedItem>
                                    <AddressArea>
                                        <ul>
                                            <AddressNumber>
                                                <InputAddress
                                                 name="zipCode" 
                                                 placeholder="우편번호"
                                                 value={formik.values.zipCode}
                                                 onChange={formik.handleChange}
                                                 onBlur={formik.handleBlur}
                                                 readOnly>
                                                </InputAddress>
                                                <SearchAddressBtn type="button" 
                                                 onClick={openPostCode}>주소검색
                                                </SearchAddressBtn>
                                                {
                                                    isPopupOpen && <PopupPostCode
                                                     handlePostCode={ handlePostCode}
                                                    onClose = {closePostCode}/> 
                                                }
                                                 {
                                                 formik.touched.zipCode && formik.errors.zipCode &&
                                                 <li><ErrMsg>{formik.errors.zipCode}</ErrMsg></li>
                                                }
                                            </AddressNumber>
                                            <AddressNumber>
                                            <InputAddress2 
                                                name="address" 
                                                placeholder="기본주소"
                                                value={formik.values.address}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                readOnly>
                                            </InputAddress2>
                                            {
                                                 formik.touched.address && formik.errors.address &&
                                                 <li><ErrMsg>{formik.errors.zipCode}</ErrMsg></li>
                                            }
                                            </AddressNumber>
                                            <AddressNumber>
                                            <InputInformation 
                                                name="addressDetail"
                                                placeholder="나머지주소(선택 입력 가능)"
                                                value={formik.values.addressDetail}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            ></InputInformation>
                                            </AddressNumber>
                                        </ul>
                                    </AddressArea>
                                </Tr>
                                <Tr>
                                    <CheckedItem>휴대전화</CheckedItem>
                                    <SelectContainer>
                                        <InputPhone 
                                            onBlur={formik.handleBlur}
                                            name='phone'
                                            placeholder="' - ' 을 제외한 전화번호를 입력하세요 "
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            maxLength={11}>
                                        </InputPhone>
                                        {
                                                 formik.touched.phone && formik.errors.phone &&
                                                 <li><ErrMsg>{formik.errors.phone}</ErrMsg></li>
                                            }
                                
                                    </SelectContainer>
                                </Tr>
                                <Tr>
                                    <Item>일반전화</Item>
                                    <SelectContainer>
                                        <InputBasicPhone
                                         onBlur={formik.handleBlur}
                                         name='phone2'
                                         placeholder="' - ' 을 제외한 전화번호를 입력하세요 "
                                         value={formik.values.phone2}
                                         onChange={formik.handleChange}
                                         maxLength={11}>
                                        </InputBasicPhone>
                                        {
                                                 formik.touched.phone2 && formik.errors.phone2 &&
                                                 <li><ErrMsg>{formik.errors.phone2}</ErrMsg></li>
                                            }
                                    </SelectContainer>
                                </Tr>
                                <Tr>
                                    <CheckedItem>이메일</CheckedItem>
                                    <td>
                                        <InputInformation
                                            onBlur={formik.handleBlur}
                                            name='email'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}>
                                        </InputInformation>
                                           
                                             {
                                                formik.touched.email && formik.errors.email &&
                                                <ErrMsg>{formik.errors.email}</ErrMsg>
                                                }
                                    </td>
                                </Tr>
                            </tbody>
                        </table>
                    </BasicInformation>
                    <Title>
                        <h3>추가정보<span>(선택)</span></h3>
                        <p>기념일에 맞춰 다양한 혜택이 제공됩니다.</p>
                    </Title>
                    <BasicInformation>
                        <table>
                            <tbody>
                                <Tr>
                                    <Item>생년월일</Item>
                                    <td>
                                        <InputBirth 
                                            onBlur={formik.handleBlur}
                                            type='text'
                                            name='birth'
                                            value={formik.values.birth}
                                            onChange={formik.handleChange}
                                            placeholder='ex)1988'
                                            maxLength={4}>
                                        </InputBirth>
                                        <TextInput>년</TextInput>
                                        <InputBirth 
                                            onBlur={formik.handleBlur}
                                            name='month'
                                            value={formik.values.month}
                                            onChange={formik.handleChange}
                                            placeholder="ex)03"
                                            maxLength={2}></InputBirth>
                                        <TextInput>월</TextInput>
                                        <InputBirth 
                                            onBlur={formik.handleBlur}
                                            name='date'
                                            value={formik.values.date}
                                            onChange={formik.handleChange}
                                            placeholder="ex)29"
                                            maxLength={2}></InputBirth>
                                        <TextInput>일</TextInput>
                                        {
                                            formik.touched.birth && formik.errors.birth &&
                                            <ErrMsg2>{formik.errors.birth}</ErrMsg2> || 
                                            formik.touched.month && formik.errors.month &&
                                            <ErrMsg2>{formik.errors.month}</ErrMsg2> ||
                                            formik.touched.date && formik.errors.date &&
                                            <ErrMsg2>{formik.errors.date}</ErrMsg2> 
                                        }
                                        <BirthSolar>
                                            <div>
                                            <span>양력</span>
                                            <Radio
                                                checked={selectedValue === 'a'}
                                                onChange={handleChange}
                                                value="a"
                                                color="default"
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'A' }}
                                            ></Radio>
                                             <span>음력</span>
                                            <Radio
                                                checked={selectedValue === 'b'}
                                                onChange={handleChange}
                                                value="b"
                                                color="default"
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'B' }}
                                            />
                                           
                                            </div>
                                        </BirthSolar>
                                    </td>
                                </Tr>
                                <Tr>
                                    <Item>지역</Item>
                                    <SelectContainer>
                                        <select>
                                            <option>선택</option>
                                            <option>경기</option>
                                            <option>서울</option>
                                            <option>인천</option>
                                            <option>강원</option>
                                            <option>충남</option>
                                            <option>충북</option>
                                            <option>대전</option>
                                            <option>경북</option>
                                            <option>경남</option>
                                            <option>대구</option>
                                            <option>부산</option>
                                            <option>울산</option>
                                            <option>전북</option>
                                            <option>전남</option>
                                            <option>광주</option>
                                            <option>세종</option>
                                            <option>제주</option>
                                            <option>해외</option>
                                        </select>
                                    </SelectContainer>
                                </Tr>
                                <Tr>
                                    <Item>추천인 아이디</Item>
                                    <td>
                                        <InputInformation />
                                    </td>
                                </Tr>
                            </tbody>
                        </table>
                    </BasicInformation>
                    <JoinBtnContainer>
                        <button>회원가입</button>
                    </JoinBtnContainer>
                </form>
    
    </>
 )
};