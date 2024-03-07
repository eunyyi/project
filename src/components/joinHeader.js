import { FlexContainer, JoinContainer, JoinWrapper, MainArea, MainAreaEtc, MainHeader, MainTitle, Process, ProcessDetailArrow } from "../styled/loginHeaderStyled";


export const JoinHeader = ()=>{
    return(
        <>
    
        <JoinWrapper>
            <JoinContainer>
                <MainHeader>
                    <MainArea>
                        <li>
                            <MainAreaEtc>/</MainAreaEtc>
                        </li>
                    </MainArea>
                </MainHeader>
                <MainTitle>
                    <h2>회원 가입</h2>
                </MainTitle>
                
            </JoinContainer>
        </JoinWrapper>
        </>
    )
};
export default JoinHeader;