import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Close from "../images/close.png";
import Cart from "../images/icons/cart.svg";
import Heart from "../images/heart.png";
import Coupon from "../images/coupon.jpeg";
import Point from "../images/point.png";
import Modal from 'react-modal';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Detail = styled.section`
    width:  1350px;
    margin: 0 auto;
    /* border: 1px solid black; */
    padding: 200px 0;
`;

const DetailDiv = styled.div`
    /* border: 1px solid black; */
    padding-left:160px;
`;

const DetailImg = styled.div`
    width: 680px;
    height: 954px;
    background: url(${({image})=>image}) no-repeat center / cover;
    margin-right:80px;
`;

const Sec2Span = styled.span`
    font-family: 'Poppins', sans-serif;
`;

const Sec2P = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: #333;
    margin: 13px 0 6px;
`;

const DetailTxt = styled.div`
    width: 430px;
`;

const DetailP = styled.p`
    font-size: 14px;
    color: #555555;
    margin-bottom:8px;
`;
const SelectP = styled.p`
    font-size:13px;
    padding-top:8px;
`;
const SelectOption = styled.select`
    width: 430px;
    height: 45px;
    padding: 0 30px 0 10px;
    border:1px solid #e0e0e0;
    margin: 10px 0 5px;
`;
const CheckDiv = styled.div`
    border-top: 1px solid #e5e5e5;
    padding: 20px 0;
    width:390px;
    margin: 21px 20px 0;
    align-items:center;
    display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const CheckLeftP = styled.p`
    font-size:13px;
`;
const Count = styled.span`
    width:28px;
    height: 28px;
    text-align:center;
    border:1px solid #e5e5e5;
`;
const CountP = styled.p`
    width: 45px;
    height: 28px;
    border:1px solid #e5e5e5;

    &:focus {
        border:none;
    }
`;
const CloseImg = styled.img`
    width: 11px;
    height: 11px;
    margin-left:20px;
`;
const TotalDiv = styled.div`
    justify-content:space-between;
    padding:27px 0;
    border-top:1px solid #e5e5e5;
`;
const Total = styled.p`
    font-size:15px;
`;
const TotalSpan = styled.span`
    font-size: 13px;
    color:#7d7d7d;
`;
const ShopBtn = styled.button`
    width: 300px;
    height: 55px;
    align-items:center;
    line-height:55px;
    border:none;
    background-color:#000;
    color:#fff;
    font-size:16px;
    cursor: pointer;
`;
const GoBtn = styled.button`
    width: 300px;
    height: 55px;
    align-items:center;
    line-height:55px;
    border:none;
    background-color:#fff;
    color:#000;
    font-size:16px;
    cursor: pointer;
`;
const ImgDiv = styled.div`
    width: 58px;
    height: 55px;
    text-align:center;
    border:1px solid #bcbcbc;
    line-height:55px;
    margin-left:7px;
    cursor: pointer;
`;
const AddCart = styled.p`
    /* margin-top:34px; */
    height:69px;
`;
const AddCartClose = styled.img`
    width: 15px;
    height: 15px;
    position: absolute;
    right: 20px;
`;
const AddCartItem = styled.div`
    height: 149px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
`;
const PointImg = styled.img`
    width: 10px;
`;
const SelectedImg = styled.img`
    width: 80px;
`;
const SelectedName = styled.p`
    color: #2e2e2e;
    font-size: 12px;
`;
const SelectedNum = styled.p`
    color: #757575;
    font-size: 12px;
`

export const DetailCons = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [itemList, setItemList] = useState([]);
    const [selectedOption, setSelectedOption] = useState([]);
    const [product, setProduct] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const {id} = useParams();
    const navi = useNavigate();

    useEffect(()=>{
        axios.get('/data/products.json').then((res)=>{
            let target = res.data.products.find((product)=>{return product.id === Number(id)});
            // not exist product --> target === undefined

            if(!target){
                alert('존재하지않는 상품입니다');
                return;
            }

            setProduct(target);
            // console.log(target);
        });

    }, []);

    const onIncrease = (value) => {
        let cpy = JSON.parse(JSON.stringify(selectedOption));
        let target = cpy.find((el)=>el.option === value);
        if (target.num !=9) {
            target.num++;
        }

        setSelectedOption(cpy);
        return;
    };
    const onDecrease = (value) => {
        let cpy = JSON.parse(JSON.stringify(selectedOption));
        let target = cpy.find((el)=>el.option === value);

        if (target.num !=1) {
            target.num--;
            setSelectedOption(cpy);
        }else{
            alert('최소 1개이상 선택해야합니다');
        }
        return;
    };



    const onOptionSelect = (e)=>{
        //console.log (e.target.value);
        if(e.target.value === 0) return;
        if(selectedOption.find((el)=>el.option === e.target.value)){
            alert(`${e.target.value}는 이미 선택 하신 옵션입니다`);
            return;
        }

        setSelectedOption([...selectedOption , {option : e.target.value, num:1, ...product }]);
    }   

    const onClickBasket = () => { 

        
        let baskets = JSON.parse(localStorage.getItem('baskets'));
        if(!baskets){
            localStorage.setItem(
                "baskets", 
                JSON.stringify(selectedOption)
            );
        }else{
            localStorage.setItem(
                "baskets", 
                JSON.stringify([
                    ...baskets,
                    ...selectedOption
                ])
            );
        }
        
        navi('/cart');
        console.log(selectedOption);
        
    };

    const getTotalCnt = ()=>{

        let total = 0;
        for(let i = 0 ; i < selectedOption.length; i++){
            total += selectedOption[i].num;
        }
        return total;
    }

    if(product === null){
        return(<h1>loading</h1>)
    }

    return(
        <Detail>
            <DetailDiv className="row">
                <DetailImg image={product.image}/>
                <div>
                    <DetailTxt>
                                <Sec2P>
                                {product.name}
                                </Sec2P>
                                <Sec2Span 
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    color: '#FF9D6A'
                                }}>{product.percent}%</Sec2Span>
                                <Sec2Span
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    color: '#000',
                                    margin: '0 7px'
                                }}>{product.disPrice.toLocaleString()}원</Sec2Span>
                                <Sec2Span
                                style={{
                                    fontSize: '14px',    
                                    fontWeight: '400',
                                    color: '#8C8C8C',
                                    textDecoration: 'line-through'
                                }}>{product.price.toLocaleString()}원</Sec2Span>
                                <div className="row" style={{marginTop:'20px'}}>
                                    <DetailP style={{marginRight:'36px'}}>
                                        적립금
                                    </DetailP>
                                    <DetailP>
                                        5%
                                    </DetailP>
                                </div>
                                <div className="row">
                                    <DetailP style={{marginRight:'36px'}}>
                                        브랜드
                                    </DetailP>
                                    <DetailP>
                                        릴리바이레드
                                    </DetailP>
                                </div>
                                <div className="row">
                                    <DetailP style={{marginRight:'36px'}}>
                                        배송비
                                    </DetailP>
                                    <DetailP>
                                    2,500원 (15,000원 이상 구매 시 무료)
                                    </DetailP>
                                </div>
                                
                    </DetailTxt>
                    <SelectP>선택</SelectP>
                    <SelectOption onChange={onOptionSelect}>
                        <option value={0}>[필수]옵션을 선택해 주세요</option>
                        {
                            product.optionList.map((option)=>
                                <option key={option}>{option}</option>
                            )
                        }
                        
                    </SelectOption>
                    {
                        selectedOption.map((el)=><CheckDiv key={el.option} isOpen={true}>
                        <div className="row" style={{alignItems: "center"}}>
                            <div style={{width:"131px", marginRight:"10px"}}>
                                <CheckLeftP>{product.name}</CheckLeftP>
                                <CheckLeftP style={{color:"#7d7d7d"}}>{el.option}</CheckLeftP>
                            </div>
                            <div className="row" style={{width:"147px", height:"30px", alignItems:"center", marginLeft: '30px'}}>
                                    <Count onClick={()=>onDecrease(el.option)}>-</Count>
                                    <CountP style={{textAlign:"center"}}>{el.num}</CountP>
                                    <Count onClick={()=>onIncrease(el.option)}>+</Count>
                                    <CloseImg src={Close} isOpen={!isOpen} style={{cursor:'pointer'}}/>
                            </div>
                            <div style={{width:"100px"}}>
                                    <p style={{fontSize:"13px", textAlign:"right", fontWeight: 500}}>{(product.disPrice * el.num).toLocaleString()}원</p>
                                    <p style={{fontSize:"13px", textAlign:"right"}}>(<PointImg src={Point}/>{product.disPrice * 0.05 * el.num})원</p>
                            </div>
                        </div>
                    </CheckDiv>
                        )
                    }
                    <TotalDiv className="row">
                        <Total>TOTAL</Total>
                        <Total>{(getTotalCnt()*product.disPrice).toLocaleString()}원<TotalSpan>({getTotalCnt()}개)</TotalSpan></Total>
                    </TotalDiv>
                    <div className="row">
                        <Link to={'/login'}>
                            <ShopBtn>바로 구매하기</ShopBtn>    
                        </Link>
                        <ImgDiv onClick={()=>setModalIsOpen(true)}>
                            <img src={Cart} style={{width:"25px", marginBottom:"-4px"}}/>    
                        </ImgDiv>
                        <ImgDiv>
                            <img src={Heart} style={{width:"25px", marginBottom:"-4px"}}/>
                        </ImgDiv>
                    </div>
                    <img src={Coupon} style={{marginTop:"10px"}}/>
                </div>
            </DetailDiv>
            <div style={{position: 'position'}}>
                <Modal
                style={{
                    overlay: {
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        zIndex: 998,
                        background: "rgba(0, 0, 0, .5)"
                    },
                    content: {
                        width:"380px",
                        height:"100%",
                        position: 'fixed',
                        top: "0",
                        right: "0",
                        left:"auto",
                        transform: "translateX(0)",
                        backGround:"#fff", 
                        color:"#1a1a1a", 
                        display:"flex", 
                        flexDirection:"column", 
                        position:"relative",
                    }
                    }}
                    isOpen={modalIsOpen}>
                    <AddCart>Add to cart</AddCart>
                    <AddCartClose src={Close} onClick={()=>setModalIsOpen(false)}/>
                    <AddCartItem>
                    {
                        selectedOption.map((el)=><div key={el.option} isOpen={true}>
                            <div className="row" style={{padding:"15px 0"}}>
                                <SelectedImg src={product.image}/>
                                <div style={{marginLeft:'10px'}}>
                                    <SelectedName>{product.name}</SelectedName>
                                    <SelectedName>{el.option}</SelectedName>
                                    <SelectedNum style={{margin:'5px 0'}}>수량:{el.num}</SelectedNum>
                                    <SelectedNum style={{fontWeight:"bold", color: "#000"}}>{product.disPrice * el.num}원</SelectedNum>
                                </div>
                            </div>
                        </div>
                        )
                    }   
                    </AddCartItem>
                    <div style={{position:'fixed', bottom:'16px'}}>
                        <Link to={'/login'}>
                            <ShopBtn style={{width:'338px', height:'50px', margin: '10px 0'}}>바로 구매하기</ShopBtn>
                        </Link>
                        <ShopBtn onClick={onClickBasket} style={{width:'338px', height:'50px',backgroundColor:'#fff', color: '#000', border:'1px solid #bcbcbc'}}>장바구니 이동</ShopBtn>
                    </div>
                </Modal>
            </div>
        </Detail>
    );
};