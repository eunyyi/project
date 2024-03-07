import styled from "@emotion/styled";
import "../basic.css";
import Search from "../images/icons/search.svg";
import Like from "../images/icons/like.svg";
import Cart from "../images/icons/cart.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = styled.header`
    width: 100%;
    position: fixed;
    top:0;
    z-index:997;
`;

const TopBanner = styled.div`
    display: block;
    width: 100%;
    height: 34px;
    background: #FF8382;
    line-height: 34px;
    text-align: center;
    position: relative;
    transition: height 300ms;
`;

const TopBannerP = styled.p`
    color: #fff;
    font-size: 12px;
`;

const TopBannerSpan = styled.span`
    display: block;
    background: #fff;
    position: absolute;
    transform: rotate(-45deg);
`;

const Nav = styled.nav`
    width: 100%;
    height: 69px;
    line-height: 69px;
    align-items: center;
    justify-content: space-between;
    padding: 0 78px;
    position: fixed;
    top: 34px;
    left: 0;
    background: transparent;
    transition: transform 1000ms;
    z-index: 99;
`;

const GnbUl = styled.ul`
    width: 346px;
    justify-content: space-between;
`;

const NavP = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #000;
    font-size: 18px;
    font-weight: 400;
`;
const GnbA = styled.a`
    font-family: 'Poppins', sans-serif;
    color: #000;
    font-size: 18px;
    font-weight: 400;
`;

const Logo = styled.a`
    width: 124px;
    display: block;
    background: url('https://eunyyi.github.io/project.github.io/assets/logo.png') no-repeat center / contain;
    text-indent: -9999px;
    margin-left:-62px;
`;

const SubMenuDiv = styled.div`
    margin-right: 21px;
`;

const SubMenuP = styled.p`
    margin: 0 6px;
    font-size:18px;
`;

const NavSpan = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #000;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    line-height: 15px;
    position: absolute; 
    top: 30px;
    right: 75px;
`;

const NavLi = styled.li`
    font-family: 'Poppins', sans-serif;
    color: #000;
    font-size: 18px;
    font-weight: 400;
`;
const useScroll = () => {
    const [state, setState] = useState({
      x:0,
      y:0,
    });
  
    const onScroll = () => {
      setState({y: window.scrollY, x: window.scrollX});
    }
  
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, [])
  
    return state;
  }

export const HeaderCons = () => {
    const [bannerIsOpen, setBannerIsOpen] = useState(true);
    const {y} = useScroll();

    return(
        <Header>
            {bannerIsOpen && (
            <TopBanner>
                <TopBannerP>회원가입 즉시 사용 가능 10% OFF 쿠폰 발급</TopBannerP>
                <p style={{cursor:'pointer'}} onClick={()=>setBannerIsOpen(false)}>
                    <TopBannerSpan className="left" 
                    style={{   
                        width: '15px',
                        height: '1px',
                        top: '50%',
                        right:'75px'}}/>
                    <TopBannerSpan 
                    style={{
                        width: '1px',
                        height: '15px',
                        top: '30%',
                        right: '82px'
                    }}/>
                </p>
            </TopBanner>
            )}
            <Nav className="row"
            style={{
                backgroundColor: y > 1000 ? 'white' : 'transparent'}}>
                <div className="gnb">
                    <GnbUl className="row">
                        <li>
                        <Link to="/shop">
                            <GnbA href="#" className="shop">
                                Shop
                            </GnbA>
                        </Link>
                        <div className="shopDiv" style={{display:'none'}}>
                            <NavP>#CHEESE PLATE</NavP>
                            <NavP>Best</NavP>
                            <NavP>Lip</NavP>
                            <NavP>Eye</NavP>
                            <NavP>Face</NavP>
                            <NavP>Set</NavP>
                            <NavP>Etc</NavP>
                            <NavP>All</NavP>
                            <NavP>EDTION</NavP>
                        </div>
                        </li>
                        <NavLi>
                            Brand
                        </NavLi>
                        <NavLi>
                            Event
                        </NavLi>
                        <NavLi>
                            Community
                            <div className="communityDiv" style={{display:'none'}}>
                            <NavP>Notice</NavP>
                            <NavP>Review</NavP>
                            <NavP>Q&amp;A</NavP>
                            <NavP>색상 교환 요청</NavP>
                            </div>
                        </NavLi>
                    </GnbUl>
                </div>
                <h1>
                    <Link to={'/'}>
                        <Logo href="#">릴리바이레드</Logo>
                    </Link>
                </h1>
                <div className="subMenu row">
                    <SubMenuDiv className="row">
                        <NavLi>
                            <SubMenuP><Link to={'/login'}style={{color:'black', fontSize:'18px'}}>Login</Link></SubMenuP>
                        </NavLi>
                            <SubMenuP>/</SubMenuP>
                        <NavLi>
                            <SubMenuP><Link to={'/join_membership'}style={{color:'black'}}>join</Link></SubMenuP>
                        </NavLi>
                    </SubMenuDiv>
                    <img src={Search} alt="" style={{marginBottom:'-4px'}}/>
                    <img src={Like} alt="" style={{margin:'0 16px', marginBottom:'-4px'}}/>
                    <Link to={'/cart'}>
                        <img src={Cart} alt="" style={{marginBottom:'-4px'}}/>
                    </Link>
                </div>
            </Nav>
        </Header>

    );
};