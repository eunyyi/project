import styled from "@emotion/styled";
import LogoImgImg from "../images/logo.png";
import Sns1 from "../images/ui/snsInsta.svg";
import Sns2 from "../images/ui/snsFace.svg";
import Sns3 from "../images/ui/snsYoutube.svg";
import Down from "../images/ui/down.svg";

const Footer = styled.footer`
    position: relative;
    height: 300px;
`;

const FamilySite = styled.div`
    &:hover ul {
        height: 260px;
    }
`;

const FamilySiteUl = styled.ul`
    width: 200px;
    height: 52px;
    line-height: 52px;
    overflow: hidden;
    display: block;
    border: 1px solid #D9D9D9;
    background: #fff;
    padding: 0 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 400;
    position: absolute;
    top: 100px;
    left: 80px;
    transition: height 300ms;
`;

const FamilySiteFirst = styled.p`
    &::after {
        content: url('images/ui/down.svg');
        display: inline-block;
        width: 10px;
        margin-left: 75px; 
    }
`;

const FamilySiteP = styled.p`
    background: #fff;
    color: #000;

    &:hover {
        color:#D9D9D9;
    }
`;

const LogoImg = styled.img`
        width: 139px;
        height: 36px;
        margin-bottom: 17px;
`;

const Copyright = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const SnsIcon = styled.div`
    margin-top: 92px;
    height: 20px;
    line-height: 20px;
    align-items: center;
`;

const SnsIconImg = styled.img`
    text-align: center;
    line-height: 20px;
`;

const FooterInfoH3 = styled.h3`
    font-family: 'Poppins', sans-serif;
    margin-bottom: 27px;
    font-size: 14px;
    font-weight: 500;
`;

const FooterInfoA = styled.a`
    /* font-family: 'Poppins', sans-serif; */
    margin-bottom: 6px;
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    color:#000;
    display:block;
`;

const FooterInfoP = styled.p`
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
`;

const Customer = styled.div`
    margin: 0 77px 0 68px;
`

const Company = styled.div`
    margin-right: 73px;
`;

const Left = styled.div`
    margin-left:80px;
`;
const DownImg = styled.img`
    width: 10px;
    height: 52px;
`;
export const FooterCons = () => {
    return(
        <Footer>
            <FamilySite className="familySite drop">
                <FamilySiteUl>
                    <li>
                        <div className="row" style={{height: '52px'}}>
                            <FamilySiteFirst>
                            Family site
                            </FamilySiteFirst>
                            <DownImg src={Down}/>
                        </div>
                        <div>
                        <FamilySiteP>해서린</FamilySiteP>
                        <FamilySiteP>디어오운</FamilySiteP>
                        <FamilySiteP>슬로우허밍</FamilySiteP>
                        <FamilySiteP>디와이디</FamilySiteP>
                        </div>
                    </li>
                </FamilySiteUl>
            </FamilySite>
            <div className="row" style={{marginLeft:'80px'}}>
                <div>
                    <a href="#" className="logo">
                        <LogoImg src={LogoImgImg} alt="" />
                    </a>
                    <Copyright>Copyright © lilybyred. All rights reserved.</Copyright>
                    <SnsIcon>
                        <a href="#">
                            <SnsIconImg src={Sns1} alt="" />
                        </a>
                        <a href="#" style={{margin:'0 15px'}}>
                            <SnsIconImg src={Sns2} alt="" />
                        </a>
                        <a href="#">
                            <SnsIconImg src={Sns3} alt="" />
                        </a>
                    </SnsIcon>
                </div>
                <div className="footerInfo row" style={{marginLeft:'80px'}}>
                    <div>
                        <FooterInfoH3>About</FooterInfoH3>
                        <FooterInfoA href="#">회사소개</FooterInfoA>
                        <FooterInfoA href="#">이용약관</FooterInfoA>
                        <FooterInfoA href="#">개인정보처리방침</FooterInfoA>
                    </div>
                    <Customer>
                        <FooterInfoH3>Customer center</FooterInfoH3>
                        <FooterInfoP 
                        style={{
                            // fontFamily:''Poppins', sansSerif
                        }}>1566-1696</FooterInfoP>
                        <FooterInfoP
                        style={{
                            marginBottom:'34px'
                        }}>
                            MON - FRI : 10 - 17시 <br />
                            점심시간 : 12 - 13시
                        </FooterInfoP>
                        <FooterInfoP>
                            국민은행 : 032901-04-321644 <br />
                            주식회사 디와이디
                        </FooterInfoP>
                    </Customer>
                    <Company>
                        <FooterInfoH3>Company info</FooterInfoH3>
                        <FooterInfoP>법인명 : 주식회사 디와이디</FooterInfoP>
                        <FooterInfoP>대표 : 정창래</FooterInfoP>
                        <FooterInfoP>
                            주소 : 경기도 고양시 덕양구 동송로 30 제엠비엔스튜디어동 18층 1805호
                        </FooterInfoP>
                        <FooterInfoP>사업자 등록번호 : 595-81-00040</FooterInfoP>
                        <FooterInfoP>개인정보관리자 : 전지영</FooterInfoP>
                        <FooterInfoP>통신판매신고번호 : 2021-고양덕양구-2799</FooterInfoP>
                        <FooterInfoP>Mail : cs@dyddaeyang.com</FooterInfoP>
                    </Company>
                    <div className="partnership">
                        <FooterInfoH3>Partnership</FooterInfoH3>
                        <FooterInfoA href="#">
                            도매/제휴문의 <br />
                            gtlim@dyddaeyang.com
                        </FooterInfoA>
                        <FooterInfoA href="#"
                        style={{
                            marginTop:'28px'
                        }}>
                            해외수출문의 <br />
                            overseasteam@dyddaeyang.com
                        </FooterInfoA>
                    </div>
                </div>
            </div>

        </Footer>

    );
};