import styled from "@emotion/styled";
import BigImg from "../images/big.jpg";

const Sec1 = styled.section`
    padding: 121px 0 131px;
    width: 1500px;
    margin: 0 auto;
`;

const H1 = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 51px;
    text-align: center;
`;

const H2 =styled.h2`
    font-size: 13px;
    font-weight: 300;
    color: #333333;
    margin-bottom: 6px;
    text-align: center;
`;

const BigImgImg = styled.img`
    width: 691px;
    margin-right: 15px;
`;

const PickImg1 = styled.div`
    width: 369px;
    height: 512px;
    background: url('https://eunyyi.github.io/project.github.io/assets/pick/th01.jpg') no-repeat center / cover;
`;
const PickImg2 = styled.div`
    width: 369px;
    height: 512px;
    background: url('https://eunyyi.github.io/project.github.io/assets/pick/th02.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/pick/th02-h.jpg') no-repeat center / cover;
    }
`;
const PickImg3 = styled.div`
    width: 369px;
    height: 512px;
    background: url('https://eunyyi.github.io/project.github.io/assets/pick/th03.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/pick/th03-h.jpg') no-repeat center / cover;
    }
`;
const PickImg4 = styled.div`
    width: 369px;
    height: 512px;
    background: url('https://eunyyi.github.io/project.github.io/assets/pick/th04.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/pick/th04-h.jpg') no-repeat center / cover;
    }
`;

const PickUl = styled.ul`
    flex-wrap: wrap;
`;

const PickLi = styled.li`
    margin-bottom: 60px;
`;

const PickP = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin: 13px 0 6px;
`;

const PickSpan = styled.span`
    font-family: 'Poppins', sans-serif;
`;

export const PickCons = () => {

    return(
        <Sec1>
            <H2>예나's Pick</H2>
            <H1>상콤한 과즙 메이크업이 궁금하다면♥</H1>
            <div className="row">
                <div className="bigImg">
                    <BigImgImg src={BigImg} alt="" />
                </div>
                <div className="pick">
                    <PickUl className="row">
                        <PickLi style={{ marginRight: '15px'}}>
                            <PickImg1></PickImg1>
                            <PickP>[SET] 스마일리 립 블렌딩 스틱 + 픽싱 틴트</PickP>
                            <div>
                                <PickSpan
                                style={{
                                    fontSize:'14px',
                                    fontWeight:'700',
                                    color:'#ff9d6a'
                                    }}>32%</PickSpan>
                                <PickSpan
                                style={{
                                    fontSize:'13px',
                                    fontWeight:'700px',
                                    color:'#000',
                                    margin:'0 7px'
                                }}>14,900원</PickSpan>
                                <PickSpan
                                style={{
                                    fontSize:'13px',
                                    fontWeight:'400',
                                    color:'#8c8c8c'
                                }}>22,000원</PickSpan>
                            </div>
                        </PickLi>
                        <PickLi>
                            <PickImg2></PickImg2>
                            <PickP>러브빔 글로우 베일 (+미니 하트 퍼프 증정)</PickP>
                            <div>
                                <PickSpan 
                                style={{
                                    fontSize:'14px',
                                    fontWeight:'700',
                                    color:'#ff9d6a'
                                    }}>35%</PickSpan>
                                <PickSpan
                                style={{
                                    fontSize:'13px',
                                    fontWeight:'700px',
                                    color:'#000',
                                    margin:'0 7px'
                                }}>9,400원</PickSpan>
                                <PickSpan
                                style={{
                                    fontSize:'13px',
                                    fontWeight:'400',
                                    color:'#8c8c8c'
                                }}>14,500원</PickSpan>
                            </div>
                        </PickLi>
                        <PickLi style={{ marginRight: '15px'}}>
                            <PickImg3></PickImg3>
                            <PickP>New, 앙큼 라이어 코팅 틴트</PickP>
                            <div>
                                <PickSpan
                                style={{
                                    fontSize:'14px',
                                    fontWeight:'700',
                                    color:'#ff9d6a'
                                    }}>13,000원</PickSpan>
                                <PickSpan
                                style={{
                                    fontSize:'13px',
                                    fontWeight:'700px',
                                    color:'#000',
                                    margin:'0 7px'
                                }}>13,000원</PickSpan>
                            </div>
                        </PickLi>
                        <PickLi>
                            <PickImg4></PickImg4>
                            <PickP>릴리바이레드 스마일리 애교살 라이너</PickP>
                            <div>
                                <PickSpan
                                style={{
                                    fontSize:'14px',
                                    fontWeight:'700',
                                    color:'#ff9d6a'
                                    }}>35%</PickSpan>
                                <PickSpan
                                style={{
                                    fontSize:'13px',
                                    fontWeight:'700px',
                                    color:'#000',
                                    margin:'0 7px'
                                }}>7,200원</PickSpan>
                                <PickSpan
                                style={{
                                    fontSize:'13px',
                                    fontWeight:'400',
                                    color:'#8c8c8c'
                                }}>11,000원</PickSpan>
                            </div>
                        </PickLi>
                    </PickUl>
                </div>
            </div>
        </Sec1>
    );
};