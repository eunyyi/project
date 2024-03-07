import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import '../custom.css';
import MainVisual1 from "../images/mainVisual/01.jpg";
import MainVisual2 from "../images/mainVisual/02.jpg";
import MainVisual3 from "../images/mainVisual/03.jpg";

const ContentDiv =  styled.div`
    position: absolute;
    bottom: 175px;
    left: 80px;
`;

const ContentP = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 15px;
`;

const ContentP2 = styled.p`
    font-size: 24px;
    font-weight: 350;
`;

export const MainVisual = () => {

    return(
        <Swiper  
        slidesPerView={1}
        navigation={true} 
        modules={[Navigation]}
        style={{
            width: '100%',
            position: 'relative'
        }}
        >
            <SwiperSlide 
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative'
            }}>
                <img src={MainVisual1} alt="" style={{width:'100%'}}/>
                <ContentDiv>
                    <ContentP>
                        New♥
                        <br />
                        Bloody Liar Coating Tint
                    </ContentP>
                    <ContentP2>
                        더 앙큼하게 돌아온
                        <br />
                        과즙틴트의 원조 #광플러팅
                    </ContentP2>
                </ContentDiv>

            </SwiperSlide>
            <SwiperSlide 
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative'
            }}>
                <img src={MainVisual2} alt="" style={{width:'100%'}}/>
                <ContentDiv>
                    <ContentP>
                        #CHEESE EDITION
                        <br />
                        MOOD KEYBOARD
                    </ContentP>
                    <ContentP2>
                        다채로운 치즈빛 음영을 담은
                        <br />
                        녹진하고 고소한 치즈 팔레트
                    </ContentP2>
                </ContentDiv>

            </SwiperSlide>
            <SwiperSlide 
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative'
            }}>
                <img src={MainVisual3} alt="" style={{width:'100%'}}/>
                <ContentDiv>
                    <ContentP>
                        #CHEESE EDITION
                        <br />
                        Love Beam Blur Cheek
                    </ContentP>
                    <ContentP2>
                        크리미한 옐로우 발색을 담은
                        <br />
                        뽀용한 치즈빛 블러셔
                    </ContentP2>
                </ContentDiv>

            </SwiperSlide>
        </Swiper>
    );
};