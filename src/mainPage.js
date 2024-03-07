import styled from "@emotion/styled";

import { HeaderCons } from "./components/header";
import { MainVisual } from "./components/mainVisual";
import { BannerCons } from "./components/banner";
import { PickCons } from "./components/pick";
import ReviewEvent from '../src/images/event/reviewEvent.jpg';
import { VideoCons } from "./components/video";
import { EventCons } from "./components/event";
import { SnsCons } from "./components/sns";
import { BestCons } from "./components/best";
import { FooterCons } from "./components/footer";

const ReviewEventImg = styled.img`
    width: 100%;
`;

export const MainPage = ({cartItemCount}) => {
    return(
        <>
            <HeaderCons cartItemCount={cartItemCount}/>
            <MainVisual/>
            <BannerCons/>
            <PickCons/>
            <ReviewEventImg src={ReviewEvent} alt=""/>
            <BestCons/>
            <VideoCons/>
            <EventCons/>
            <SnsCons/>
            <FooterCons/>
        </>
    );
};