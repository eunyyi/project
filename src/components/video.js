import styled from '@emotion/styled';
import YouTube from 'react-youtube';
import "../basic.css";

const VideoSec = styled.section`
    width: 100%;
    height: 1155px;
    padding: 145px 191px;
    background: #FFD2E4D2;
    margin-bottom: 137px;
`;
export const VideoCons = () => {

    return(
        <VideoSec>
            <YouTube
            videoId="https://www.youtube.com/embed/p6pXpQX1vwM?autoplay=1&playsinline=1&controls=0&mute=1&rel=0&fs=1&loop=1&playlist=p6pXpQX1vwM&enablejsapi=1&origin=https://lilybyred.co.kr&widgetid=1"
            opts={{
            width: "80.104vw",
            height: "100vw",
            playerVars: {
            autoplay: 1, 
            modestbranding: 0, 
            loop: 1, 
            playlist: "https://www.youtube.com/embed/p6pXpQX1vwM?autoplay=1&playsinline=1&controls=0&mute=1&rel=0&fs=1&loop=1&playlist=p6pXpQX1vwM&enablejsapi=1&origin=https://lilybyred.co.kr&widgetid=1", 
            },
            }}
            onReady={(e) => {
            e.target.mute(); 
            }}
            />
        </VideoSec>
    );
};