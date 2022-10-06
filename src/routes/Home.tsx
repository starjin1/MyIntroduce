import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";

const Conitainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin:3rem 0;
`;

const Header = styled.header`
display: flex;
flex-direction: column;
align-items: center;
`;

const PrText = styled.h3`
margin-bottom: 2rem;
font-family: 'Noto Sans KR', sans-serif;
font-weight: 700;
text-decoration:underline;
text-decoration-color: #000051;

@media (max-width:1056px) {
    font-size:1rem;
    
}

@media (max-width:746px) {
    font-size:0.9rem;
    padding: 0 3rem;
    line-height: 1.3;
    
}
@media (max-width:456px) {
    font-size:0.4rem;
    padding: 0 4rem;
    line-height: 1.3;
    
}
`;

const Tiltle = styled.h3`
color:${props => props.theme.titleColor};
font-size:2rem;
text-transform: uppercase;
margin-bottom: 2rem;
margin-left: 0.5rem;
font-family: 'Indie Flower', cursive;
border-width: 0px 5px 0px 5px;
border-color: #BAABDA;
border-style: solid;
padding: 0 1rem;

@media (max-width:1056px) {
    font-size:1.7rem;
    
}

@media (max-width:746px) {
    font-size:1.4rem;
    
}
@media (max-width:456px) {
    font-size:1rem;
    
}

` ;

const List = styled.ul`
    
`;

const ListItem = styled.li`
background:${props => props.theme.linkColor};
margin-bottom: 2rem;
padding: 1rem 10rem;
border-radius: 1rem;
font-family: 'Noto Sans KR', sans-serif;
font-weight: 500;
box-shadow: 0.2rem 0.2rem 0.5rem #bdbdbd;
&:hover {
    background-color: rgba(170, 196, 255, 0.9);
}
@media (max-width:1056px) {
    padding: 1rem 7rem;
    font-size:1rem;
    
}

@media (max-width:746px) {
    padding: 1rem 5rem;
    font-size:0.8rem;
    
}
@media (max-width:456px) {
    padding: 0.6rem 4rem;
    font-size:0.5rem;
    
}
@media (max-width:239px) {
    padding: 0.6rem 2rem;
    font-size:0.5rem;
    
}
`;

const Footer = styled.footer`
display: flex;
align-items: center;
margin-top: 0.5rem;
font-family: 'Indie Flower', cursive;
`
const Icon = styled.span`
font-size: 1.7rem;
margin-right: 0.2rem;
`;

function Home() {
    return (
        <Conitainer>
            <Header>
                <Tiltle>Self-Introduce</Tiltle>
                <PrText>포기하지 않고 항상 최선을 다하며 열정적인 마인드로 임하는 조은채 입니다.</PrText>
            </Header>
            <List>
                    <Link to="/grouth">
                        <ListItem>성장 과정</ListItem>
                    </Link>
                    <Link to="/proscons">
                        <ListItem>성격의 장단점 </ListItem>
                    </Link>
                    <Link to="/school">
                        <ListItem>학교 생활</ListItem>
                    </Link>
                    <Link to="/motivate">
                        <ListItem>지원 동기 / 포부 </ListItem>
                    </Link>
            </List>
            <Footer>
            <Icon><FcLikePlaceholder/></Icon>GitHub :&nbsp;<a href="https://github.com/starjin1">https://github.com/starjin1</a>
            </Footer>


        </Conitainer>
    )
}

export default Home;