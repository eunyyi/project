import { CartCons } from "./components/cart";
import { FooterCons } from "./components/footer";
import { HeaderCons } from "./components/header";

export const CartPage = ({cartItemCount}) => {
    return(
        <>
            <HeaderCons cartItemCount={cartItemCount}/>
            <CartCons/>
            <FooterCons/>
        </>
    );
};