import styled from "@emotion/styled";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import Close from "../images/close.png";

const TitleP = styled.p`
    font-size:25px;
    margin-bottom:50px;
`;
const OrderUl = styled.ul`
    width: 353px;
    margin: 0 auto;
    margin-bottom:50px;
    justify-content:space-between;
`;

const OrderLi = styled.li`
    font-size: 14px;
`;
const Cate = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    text-align:left;
`;
const CateSpan = styled.span`
    display: inline-block;
    width: 260px;
    height: 54px;
    text-align: center;
    line-height: 54px;
    font-size: 13px;
    font-weight: bold;
    border: 1px solid black;
`;
const CartDiv = styled.div`
    width: 1180px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;
const CartH3 = styled.h3`
    font-size: 13px;   
    font-weight: 700;
    text-align:left;
    height: 57px;
    line-height:57px;
`;
const CartNormal = styled.div`
    font-size: 13px;
    width: 100%;
    height:55px;
    line-height:55px;
    padding-left:15px;
    background-color: #f6f6f6;
    text-align:left;
`

//order
const OrderDiv = styled.div`
    width: 300px;
    height: 230px;
    padding: 20px;
    border: 1px solid black;
    margin-bottom:20px;
`;
const OrderH3 = styled.h3`
    font-size: 14px;
    font-weight: 700;
    text-align:left;
    margin-bottom:19px;
`;
const OrderCons = styled.div`
    padding:20px 0;
    border-top:1px solid black;
    border-bottom:1px solid black;
`;
const OrderTotal = styled.div`
    width: 100%;
    justify-content:space-between;
`;
const OrderBtn = styled.div`
    width: 300px;
    height: 50px;
    border-radius:50px;
    background-color:#000;
    color:#fff;
    text-align:center;
    line-height:50px;
`;
const CartP = styled.p`
    text-align:left
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
    line-height:28px;
    border:1px solid #e5e5e5;

    &:focus {
        border:none;
    }
`;
const CloseBtn = styled.img`
    width: 15px;
    position: absolute;
    right: 0;
    top: 20px;
    opacity:.4;
`;
const ChangeBtn = styled.button`
    width: 64px;
    height: 30px;
    margin-left: 6px;
    font-size: 12px;
    line-height: 12px;
    background: none;
    border: 1px solid #bcbcbc;
`

export const CartCons = () => {
    const [baskets, setBaskets] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("baskets")) || [];
        setBaskets(getItem);
        updateTotalPrice(getItem);
        setCartItemCount(getItem.length);
    }, []); 
    
    useEffect(() => {
        setCartItemCount(baskets.length);
    }, [baskets]);  
 
    useEffect(() => {
        const selectedProducts = baskets.filter(item => selectedItems.includes(item.id));
        const newTotalPrice = selectedProducts.reduce((acc, item) => acc + (item.disPrice * item.num), 0);
        setTotalPrice(newTotalPrice);
    }, [selectedItems, baskets]);

    useEffect(() => {
        if (totalPrice >= 15000) {
            setShippingCost(0);
        } else {
            setShippingCost(2500);
        }
    }, [totalPrice]);

    const removeFromCart = (productId) => {
        const updatedBaskets = baskets.filter(item => item.id !== productId);
        setBaskets(updatedBaskets);
        localStorage.setItem("baskets", JSON.stringify(updatedBaskets));
        updateTotalPrice(updatedBaskets);
    };
    
    const handleCheckboxChange = (productId) => {
        let updatedSelectedItems;
        if (selectedItems.includes(productId)) {
            updatedSelectedItems = selectedItems.filter(id => id !== productId);
        } else {
            updatedSelectedItems = [...selectedItems, productId];
        }
    
        setSelectedItems(updatedSelectedItems);
        
        const selectedProducts = baskets.filter(item => updatedSelectedItems.includes(item.id));
        const newTotalPrice = selectedProducts.reduce((acc, item) => acc + (item.disPrice * item.num), 0);
        setTotalPrice(newTotalPrice);
    };
    
    const handleQuantityChange = (productId, newQuantity) => {
        const updatedBaskets = baskets.map(item => {
            if (item.id === productId) {
                return { ...item, num: parseInt(newQuantity) };
            }
            return item;
        });
        setBaskets(updatedBaskets);
    };

    const updateTotalPrice = (items) => {
        const selectedProducts = items.filter(item => selectedItems.includes(item.id));
        const newTotalPrice = selectedProducts.reduce((acc, item) => acc + (item.disPrice * item.num), 0);
        setTotalPrice(newTotalPrice);
    };

    const onIncrease = (product) => {
        if (product.num !== 9) {
            const newQuantity = product.num + 1;
            handleQuantityChange(product.id, newQuantity);
        }
    };
    
    const onDecrease = (product) => {
        if (product.num !== 1) {
            const newQuantity = product.num - 1;
            handleQuantityChange(product.id, newQuantity);
        } else {
            alert('최소 1개 이상 선택해야합니다');
        }
    };
    
    return(
        <section style={{padding: '100px 80px', marginTop:'104px', textAlign:"center"}}>
            <TitleP>장바구니</TitleP>
            <OrderUl className="row">
                <OrderLi>1. 장바구니</OrderLi>
                <OrderLi style={{color:'#939393'}}>2. 주문서작성</OrderLi>
                <OrderLi style={{color:'#939393'}}>3. 주문완료</OrderLi>
            </OrderUl>
            <div>
                <Cate>
                    <CateSpan>국내배송상품</CateSpan>
                </Cate>
                <div className="row" style={{paddingTop:'50px', width: '100%', justifyContent:'space-between'}}>
                    <CartDiv>
                        <CartH3>장바구니 상품</CartH3>
                        <CartNormal>일반상품</CartNormal>
                        {
                            baskets && baskets.map((product)=>
                                <div key={product.id} style={{display:baskets.includes(product) ? 'flex' : 'none', padding:"15px 0", position:'relative'}}>
                                    <Checkbox onChange={()=> handleCheckboxChange(product.id)}/>
                                    <img width={81} height={83} src={product.image}/>
                                    <div style={{marginLeft:'10px'}}>
                                        <CartP>{product.name}</CartP>
                                        <CartP style={{fontSize:'13px', color: "#000"}}>{(product.disPrice * product.num).toLocaleString()}원</CartP>
                                        <br/>
                                        <CartP>[옵션: {product.option}]</CartP>
                                        {/* <CartP style={{margin:'5px 0'}}>수량:{product.num}</CartP> */}
                                        <div className="row" style={{width:"147px", height:"30px", alignItems:"center", marginTop: '20px'}}>
                                            <Count onClick={()=>onDecrease(product)} style={{cursor:'pointer'}}>-</Count>
                                            <CountP style={{textAlign:"center"}}>{product.num}</CountP>
                                            <Count onClick={()=>onIncrease(product)} style={{cursor:'pointer'}}>+</Count>
                                            <ChangeBtn onClick={() => handleQuantityChange()}>변경</ChangeBtn>
                                        </div>
                                        <CloseBtn src={Close} onClick={() => removeFromCart(product.id)}/>
                                    </div>
                                </div>
                            
                            )
                        }   
                    </CartDiv>
                    <div>
                        <OrderDiv>
                            <OrderH3>주문상품</OrderH3>
                            <OrderCons>
                                <OrderTotal className="row" style={{marginBottom:'15px'}}>
                                    <p style={{fontSize:'13px'}}>총 상품금액</p>
                                    <p style={{fontSize:'13px'}}>{totalPrice.toLocaleString()}원</p>
                                </OrderTotal>
                                <OrderTotal className="row">
                                    <p style={{fontSize:'13px'}}>총 배송비</p>
                                    <p style={{fontSize:'13px'}}>{(shippingCost).toLocaleString()}원</p>    
                                </OrderTotal>
                            </OrderCons>
                            <OrderTotal className="row" style={{height:'45px', lineHeight:'45px'}}>
                                <OrderH3>결제예정금액</OrderH3> 
                                <p style={{fontWeight:'500'}}>{(totalPrice + shippingCost).toLocaleString()}원</p> 
                            </OrderTotal>
                        </OrderDiv>
                        <div>
                            <Link to={'/login'}>
                                <OrderBtn style={{marginBottom:'10px'}}>전체상품주문</OrderBtn>
                            </Link>
                            <Link to={'/login'}>
                                <OrderBtn style={{backgroundColor:"#fff", color:"#000", border: "1px solid #bcbcbc"}}>선택상품주문</OrderBtn>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};