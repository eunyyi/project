import { FooterCons } from "./components/footer";
import { HeaderCons } from "./components/header";
import { ItemCons } from "./components/item";

export const ShopPage = ({cartItemCount}) => {
    return(
        <>
            <HeaderCons cartItemCount={cartItemCount}/>
            <ItemCons/>
            <FooterCons/>
        </>
    );
};