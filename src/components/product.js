import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Sec2Span = styled.span`
    font-family: 'Poppins', sans-serif;
`;

const Sec2P = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin: 13px 0 6px;
`;

const Th = styled.img`
    width: 429px;
    height: 595px;
`;
export const Product = ({product}) => {
    return(
        <div style={{width:'428px', marginBottom:'60px', cursor:'pointer'}}>
            <Link to={`/detail/${product.id}`}>
                <Th src={product.image}/>
                <Sec2P>
                {product.name}
                </Sec2P>
                <div>
                    <Sec2Span 
                    style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#FF9D6A'
                    }}>{product.percent}%</Sec2Span>
                    <Sec2Span
                    style={{
                        fontSize: '13px',
                        fontWeight: '700',
                        color: '#000',
                        margin: '0 7px'
                    }}>{product.disPrice}원</Sec2Span>
                    <Sec2Span
                    style={{
                        fontSize: '13px',    
                        fontWeight: '400',
                        color: '#8C8C8C',
                        textDecoration: 'line-through'
                    }}>{product.price}원</Sec2Span>
                </div>
            </Link>
        </div>
    )
}