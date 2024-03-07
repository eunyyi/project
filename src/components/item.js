import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Product } from "./product";

const Item = styled.section`
    padding:96px 80px 341px;
`;

const ItemH1 = styled.h1`
    font-size:25px;
    font-weight:normal;
    text-align:center;
    margin-bottom:47px;
`;

const ItemUl = styled.ul`
    width: 524px;
    justify-content:space-between;
    margin: 0 auto;
`;

const ItemA = styled.a`
    color:#999999;
    font-size: 15px;
`;

export const ItemCons = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        axios.get('/data/products.json').then((data)=>{
            setProducts(data.data.products);
        });
    },[setProducts]);

    return(
        <Item>
            <ItemH1>Shop</ItemH1>
            <ItemUl className="row">
                <li>
                    <ItemA>회원 전용 ZONE</ItemA>
                </li>
                <li>
                    <ItemA>Best</ItemA>
                </li>
                <li>
                    <ItemA>Lip</ItemA>
                </li>
                <li>
                    <ItemA>Eye</ItemA>
                </li>
                <li>
                    <ItemA>Face</ItemA>
                </li>
                <li>
                    <ItemA>Set</ItemA>
                </li>
                <li>
                    <ItemA>All</ItemA>
                </li>
                <li>
                    <ItemA>Edition</ItemA>
                </li>
            </ItemUl>
            <div className="row" style={{marginTop:'120px', flexWrap:'wrap', justifyContent:'space-between'}}>
                {products && products.map((product)=>{
                    return <Product key={'key=${product.id}'} product={product}/>
                })}
            </div>
        </Item>
    );
};