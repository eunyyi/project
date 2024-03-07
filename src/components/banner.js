import styled from "@emotion/styled";
import Banner1 from "../images/banner/01.jpg";
import Banner2 from "../images/banner/02.jpg";
import Banner3 from "../images/banner/03.jpg";
import "../basic.css";

const BannerTitle = styled.p`
    font-size: 26px;
    font-weight: 700;
    color: #323232;
    margin-bottom: 8px;
`;

const BannerInfo = styled.p`
    font-size: 18px;
    font-weight: 350;
    color: #323232;
`;

const BannerUl = styled.ul`
    width: 100%;
`;

const BannerLi = styled.li`
    position: relative;
    height: 343px;
    overflow: hidden;

    `;

const BannerImg = styled.div`
    width: 100%;
    height: 343px;

    &:hover {
        transform: scale(1.1);
    }
    `;

const BannerImgImg = styled.img`
    height: 343px;
    transition: transform 800ms;
`;

const BannerText = styled.div`
    position: absolute;
    left: 40px;
    bottom: 38px;
`;

export const BannerCons = () => {


    return(
        <BannerUl className="row">
            <BannerLi>
                <BannerImg>
                    <BannerImgImg src={Banner1} alt="" />
                </BannerImg>
                <BannerText>
                    <BannerTitle>
                    이거 하나면 충분해! <br />
                    VIP 멤버십 키트
                    </BannerTitle>
                    <BannerInfo>
                    웜 vs 쿨 <br />
                    고민할 필요없는 맞춤 키트
                    </BannerInfo>
                </BannerText>
            </BannerLi>
            <BannerLi>
                <BannerImg>
                    <BannerImgImg src={Banner2} alt="" />
                </BannerImg>
                <BannerText>
                    <BannerTitle>
                    투명한 영롱광채 펄감 <br />
                    러브빔 글로우 베일
                    </BannerTitle>
                    <BannerInfo>
                    온라인 런칭 기념 <br />
                    #1:1 미니 하트 퍼프 증정
                    </BannerInfo>
                </BannerText>
            </BannerLi>
            <BannerLi>
                <BannerImg>
                    <BannerImgImg src={Banner3} alt="" />
                </BannerImg>
                <BannerText>
                    <BannerTitle>
                    리틀 비티 모먼트 섀도우 <br />
                    1+1, SALE!
                    </BannerTitle>
                    <BannerInfo>
                    언제 어디서나 꺼내쓰는 <br />
                    2구 미니 섀도우
                    </BannerInfo>
                </BannerText>
            </BannerLi>
        </BannerUl>

    );
};