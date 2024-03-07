import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props)=>{
    

    
    const postCodeStyle = {
        backgroundColor:'white',
        width:'500px'
    };


    return (
        <div style={{
            backgroundColor:"rgba(0,0,0,0.8)",
            position:"fixed",
            top:0,
            bottom:0,
            left:0,
            right:0,
            zIndex:2,
            display:"flex",
            alignItems:'center',
            justifyContent:'center',

        }}>
            <div style={postCodeStyle}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p>우편번호 검색</p>
                    <button type="button" onClick={props.onClose} className="postCode_btn">닫기</button>
                </div>
                <DaumPostcode onComplete={props.handlePostCode} />
            </div>
        </div>
    )
}
export default PopupPostCode;