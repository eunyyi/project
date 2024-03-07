import styled from "@emotion/styled";

const Sec4 = styled.section`
    width: 100%;
`;

const Sec4P1 = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 300;
    color: #333333;
    text-align: center;
    margin-bottom: 4px;
`;

const InsP = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: #000;
    text-align: center;
    margin-bottom: 50px;
`;

const SnsDiv = styled.div`
    margin-bottom: 61px;
`;

const SnsUl = styled.ul`
    width: 100%;
    height: 319px;
`
const SnsLi1 = styled.li`
    width: 16.66666%;
    background: url('/assets/sns/01.jpg') no-repeat center / cover;

    &:hover {
        opacity:.8;
    }
`;
const SnsLi2 = styled.li`
    width: 16.66666%;
    background: url('/assets/sns/02.jpg') no-repeat center / cover;

    &:hover {
        opacity:.8;
    }
`;
const SnsLi3 = styled.li`
    width: 16.66666%;
    background: url('/assets/sns/03.jpg') no-repeat center / cover;

    &:hover {
        opacity:.8;
    }
`;
const SnsLi4 = styled.li`
    width: 16.66666%;
    background: url('/assets/sns/04.jpg') no-repeat center / cover;

    &:hover {
        opacity:.8;
    }
`;
const SnsLi5 = styled.li`
    width: 16.66666%;
    background: url('/assets/sns/05.jpg') no-repeat center / cover;

    &:hover {
        opacity:.8;
    }
`;
const SnsLi6 = styled.li`
    width: 16.66666%;
    background: url('/assets/sns/06.jpg') no-repeat center / cover;

    &:hover {
        opacity:.8;
    }
`;
export const SnsCons = () => {
    return(
        <Sec4>
            <Sec4P1>@lilybyred_official</Sec4P1>
            <InsP>Instagram</InsP>
            <SnsDiv>
                <SnsUl className="row">
                    <SnsLi1/>
                    <SnsLi2/>
                    <SnsLi3/>
                    <SnsLi4/>
                    <SnsLi5/>
                    <SnsLi6/>

                </SnsUl>
            </SnsDiv>
            </Sec4>

    );
};