import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

import styled from '@emotion/styled';

const Sec2 = styled.section`
    width: 100%;
    position: relative;
    padding: 121px 0 131px;
`;

const Sec2H1 = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 51px;
    text-align: center;
`;

const Sec2H2 = styled.h2`
    font-size: 13px;
    font-weight: 300;
    color: #333333;
    margin-bottom: 6px;
    text-align: center;
`;

const Sec2P = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin: 13px 0 6px;
`;

const Th1 = styled.div`
    width: 429px;
    height: 595px;
    background: url(' https://eunyyi.github.io/project.github.io/assets/best/th01.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/best/th01-h.jpg') no-repeat center / cover;
    }
`;
const Th2 = styled.div`
    width: 429px;
    height: 595px;
    background: url('https://eunyyi.github.io/project.github.io/assets/best/th02.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/best/th02-h.jpg') no-repeat center / cover;
    }
`;
const Th3 = styled.div`
    width: 429px;
    height: 595px;
    background: url('https://eunyyi.github.io/project.github.io/assets/best/th03.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/best/th03-h.jpg') no-repeat center / cover;
    }
`;
const Th4 = styled.div`
    width: 429px;
    height: 595px;
    background: url('https://eunyyi.github.io/project.github.io/assets/best/th04.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/best/th04-h.jpg') no-repeat center / cover;
    }
`;
const Th5 = styled.div`
    width: 429px;
    height: 595px;
    background: url('https://eunyyi.github.io/project.github.io/assets/best/th05.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/best/th05-h.jpg') no-repeat center / cover;
    }
`;
const Th6 = styled.div`
    width: 429px;
    height: 595px;
    background: url('https://eunyyi.github.io/project.github.io/assets/best/th06.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/best/th06-h.jpg') no-repeat center / cover;
    }
`;
const Th7 = styled.div`
    width: 429px;
    height: 595px;
    background: url('https://eunyyi.github.io/project.github.io/assets/best/th07.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/best/th07-h.jpg') no-repeat center / cover;
    }
`;
const Th8 = styled.div`
    width: 429px;
    height: 595px;
    background: url('https://eunyyi.github.io/project.github.io/assets/best/th08.jpg') no-repeat center / cover;

    &:hover {
        background: url('https://eunyyi.github.io/project.github.io/assets/best/th08-h.jpg') no-repeat center / cover;
    }
`;

const Sec2Span = styled.span`
    font-family: 'Poppins', sans-serif;
`;

export const BestCons = () => {
    return(
        <Sec2>
        <Sec2H2>릴바레 best 품목을 한눈에 !</Sec2H2>
        <Sec2H1>Best Seller</Sec2H1>
        <div className="swiper-best row">
            {/* <div className="bestNavigation row">
                <div className="swiper-best-button-prev">
                    <a href="#" className="bestPrev">
                    <img src="images/ui/prev.svg" alt="" />
                    </a>
                </div>
                <div className="swiper-best-button-next">
                    <a href="#" className="bestNext">
                    <img src="images/ui/next.svg" alt="" />
                    </a>
                </div>
            </div> */}
            <Swiper className="swiper-best row"
                modules={[Autoplay]}
                  slidesPerView={4}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  loop={true}
                //   navigation
                  style={{
                    width:'90%',
                    margin:'0 auto',
                    overflow: 'hidden'
                  }}>
                <SwiperSlide style={{width:'429px'}}>
                    <Th1></Th1>
                    <Sec2P>
                        릴리바이레드 스태리아이즈 나인투나인 슬림 <br />젤 아이라이너
                    </Sec2P>
                    <div>
                        <Sec2Span 
                        style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#FF9D6A'
                        }}>30%</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#000',
                            margin: '0 7px'
                        }}>6,300원</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',    
                            fontWeight: '400',
                            color: '#8C8C8C'
                        }}>9,000원</Sec2Span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:'429px'}}>
                    <Th2></Th2>
                    <Sec2P>릴리바이레드 러브빔 치크밤</Sec2P>
                    <div>
                        <Sec2Span
                        style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#FF9D6A'
                        }}>42%</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#000',
                            margin: '0 7px'
                        }}>7,000원</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',    
                            fontWeight: '400',
                            color: '#8C8C8C'
                        }}>12,000원</Sec2Span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:'429px'}}>
                    <Th3></Th3>
                    <Sec2P>
                        [공식몰 단독 증정] [치즈에디션] 무드키보드 <br />
                        (+미니 브러쉬 2종 증정)
                    </Sec2P>
                    <div>
                        <Sec2Span
                        style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#FF9D6A'
                        }}>30%</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#000',
                            margin: '0 7px'
                        }}>18,900원</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',    
                            fontWeight: '400',
                            color: '#8C8C8C'
                        }}>27,000원</Sec2Span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:'429px'}}>
                    <Th4></Th4>
                    <Sec2P>[공식몰 단독 증정] [치즈에디션] 러브빔 블러 치크</Sec2P>
                    <div>
                        <Sec2Span
                        style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#FF9D6A'
                        }}>30%</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#000',
                            margin: '0 7px'
                        }}>9,100원</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',    
                            fontWeight: '400',
                            color: '#8C8C8C'
                        }}>13,000원</Sec2Span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:'429px'}}>
                    <Th5></Th5>
                    <Sec2P>
                        [SET] 나인투나인 서바이벌 펜라이너 + 나인투나인 <br />
                        서바이벌 컬러카라 (+미니 리무버 증정)
                    </Sec2P>
                    <div>
                        <Sec2Span
                        style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#FF9D6A'
                        }}>46%</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#000',
                            margin: '0 7px'
                        }}>12,900원</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',    
                            fontWeight: '400',
                            color: '#8C8C8C'
                        }}>24,000원</Sec2Span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:'429px'}}>
                    <Th6></Th6>
                    <Sec2P>
                        릴리바이레드 나인투나인 서바이벌 펜라이너 <br />
                        내추럴 1+1 (+미니 리부머 증정)
                    </Sec2P>
                    <div>
                        <Sec2Span
                        style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#FF9D6A'
                        }}>46%</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#000',
                            margin: '0 7px'
                        }}>12,900원</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',    
                            fontWeight: '400',
                            color: '#8C8C8C'
                        }}>24,000원</Sec2Span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:'429px'}}>
                    <Th7></Th7>
                    <Sec2P>[큐피드클럽] 브 이아이피 멤버쉽 키트</Sec2P>
                    <div>
                        <Sec2Span
                        style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#FF9D6A'
                        }}>44%</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#000',
                            margin: '0 7px'
                        }}>20,900원</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',    
                            fontWeight: '400',
                            color: '#8C8C8C'
                        }}>37,000원</Sec2Span>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:'429px'}}>
                    <Th8></Th8>
                    <Sec2P>[큐피드클럽] 무드키보드+스태리아이즈 젤 라이너 SET</Sec2P>
                    <div>
                        <Sec2Span
                        style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#FF9D6A'
                        }}>45%</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#000',
                            margin: '0 7px'
                        }}>19,900원</Sec2Span>
                        <Sec2Span
                        style={{
                            fontSize: '13px',    
                            fontWeight: '400',
                            color: '#8C8C8C'
                        }}>36,000원</Sec2Span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </Sec2>

    );
};