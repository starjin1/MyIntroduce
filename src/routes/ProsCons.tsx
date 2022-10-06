import styled from "styled-components";

function ProsCons() {
const Conitainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin:3rem 7rem;
border:1px dotted #424242;
padding: 1.5rem 0;

@media (max-width:1056px) {
    margin: 2rem 5rem;
    
}

@media (max-width:746px) {
    margin: 2rem 3rem;
    
}
@media (max-width:456px) {
    margin: 2rem 1rem;
    
}

`;

const Header = styled.header`
`;

const Tiltle = styled.h3`
font-family: 'Noto Sans KR', sans-serif;
color:${props => props.theme.titleColor};
font-size:2rem;
text-transform: uppercase;
margin-bottom: 3rem;
font-weight: 700;
/* margin-left: 0.5rem; */
border-width: 0px 5px 0px 5px;
border-color: #BAABDA;
border-style: solid;
padding: 0 1rem;
@media (max-width:1056px) {
  font-size:1.5rem;
  margin-bottom: 2rem;
    
}
@media (max-width:746px) {
    font-size: 1rem;
    
}

` ;

const ContentBox = styled.div`
width: 80%;
text-align: start;

@media (max-width:1056px) {
    width: 85%;
}

@media (max-width:746px) {
    width: 90%;
}
    
`;

const UnderLine = styled.span`
background: #defd63a4;
`;

const BoxContent = styled.p`
line-height: 2;
white-space:pre-wrap;
@media (max-width:1056px) {
  font-size:1rem;
    
}
@media (max-width:746px) {
    font-size: 0.8rem;
    
}

    
`;
    return (
        <Conitainer>
        <Header>
            <Tiltle>장점과 단점</Tiltle>
        </Header>
        <ContentBox>
            <BoxContent>
            <UnderLine>포기를 모르는 도전 정신은 저의 가장 큰 장점이라고 생각합니다. </UnderLine>
            그리고 이러한 정신으로 불가능할 것만 같았던 Django 을 사용한 나만의 blog 만들기 기말 과제를 높은 점수로 마무리할 수 있었습니다. 
            나만의 blog 앱에 기능과 디자인을 추가하는 과정에서 오류가 나왔었습니다. 
            기능과 디자인을 추가하지 않아도 제출 요건이 맞아서 제출해도 되지만 포기하지 않고 끈기 있게 오류의 문제를 찾아보고 꾸준히 시간을 투자한 결과 오류들을 다 해결하여 제출할 수 있었고 뿌듯함과 성취감을 얻을 수 있었습니다. 
            </BoxContent>
            <BoxContent>
            2학년 2학기 때 개발자들이 많이 쓰고 있는 프레임워크 순위에 React가 들어가 있어 React는 어떤 프레임워크 일까 하는 궁금증에 한 번 배워보고 싶다는 도전 욕구가 생기게 되었습니다. 
            학교에서 따로 배우지 않았기에 저는 방학 때 따로 노마드 코더에서 React 기본 클래스와 JavaScript 기본 편을 들었었습니다. React를 처음 배우기 때문에 용어들이 헷갈리고 오류들이 자주 나서 힘들었지만, 끈기를 가지고 배운 결과 Movie Rest API를 활용하여 간단한 Movie List 웹을 만들 수 있었습니다. 
            이렇듯 저는 더 좋은 개발자가 되기 위해 <UnderLine>앞으로도 끊임없이 도전하고 도전하는 과정에서 포기하지 않고 열정적인 태도를 보이고 배움으로써 실력을 계속 향상시킬 것 입니다.</UnderLine>
            </BoxContent>
            <BoxContent>
            제 성격에 단점은 소심한 것입니다. 
            많은 사람들 앞에서 얘기하거나 낯선 사람과 얘기하는 것을 어려워했습니다. 
            단점을 보완하기 위해 관계를 생성하고 이어 나가는 데 있어서 수동적이고 방어적인 모습 대신 팀원분들에게 먼저 인사를 건네고 의견을 제시하는 등 능동적이고 적극적인 태도를 가지도록 노력했습니다. 
            또한 ui /ux 설계 발표 등 발표 또한 적극적으로 하였고 그 외 아르바이트를 하면서 보완하려고 노력하였습니다.
            </BoxContent>

        </ContentBox>


    </Conitainer>        
    )
}

export default ProsCons;