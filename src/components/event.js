import styled from "@emotion/styled";

const Sec3 = styled.section`
    width: 100%;
    height: 247px;
    margin-bottom: 119px;
`;

const Sec3Ul = styled.li`
    width: 100%;
    height: 100%;
`;

const Li1 = styled.li`
    width:50%;
    height: 100%;
    background: url('https://eunyyi.github.io/project.github.io/assets//04.jpg') no-repeat center / cover; 
`
const Li2 = styled.li`
    width:50%;
    height: 100%;
    background: url('https://eunyyi.github.io/project.github.io/assets//05.jpg') no-repeat center / cover; 
`
export const EventCons = () => {
    return(
        <Sec3>
            <Sec3Ul className="row">
                <Li1></Li1>
                <Li2></Li2>
            </Sec3Ul>
        </Sec3>
    );
};