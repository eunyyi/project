import { DetailCons } from "./components/detail";
import { FooterCons } from "./components/footer";
import { HeaderCons } from "./components/header";

export const ShopDetailPage = ({cartItemCount}) => {
    return(
        <>
            <HeaderCons cartItemCount={cartItemCount}/>
            <DetailCons />
            <FooterCons/>
        </>
    );
};