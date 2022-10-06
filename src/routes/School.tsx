import styled from "styled-components";

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
const UnderLine = styled.span`
background: #defd63a4;
`;

function School() {
    return (
        <Conitainer>
        <Header>
            <Tiltle>학교 생활</Tiltle>
        </Header>
        <ContentBox>
            <BoxContent>
            대학 시절 스마트 IT를 전공한 저는 JAVA 활용 능력, UX/UI 설계 및 구현 등의 코드 관리 능력을 습득하였습니다. 
            그리고 이러한 저의 역량들을 기반으로 졸업 작품인 챗봇과 혼잡도를 이용한 길 찾기 앱을 개발하였습니다. 
            코로나 시대에 사람들이 많이 모이는 것을 기피하고 있는 상황에서 버스에 있는 혼잡도 시스템을 지하철에 넣으면 좀 더 안심하고 편안하게 목적지에 갈 수 있지 않을까라는 생각에서 개발하게 되었습니다. 
            이러한 졸업 작품을 진행하면서 저는 여러 가지 배울 수 있었습니다. 
            </BoxContent>
            <BoxContent>
            <UnderLine>첫째 팀 과제를 하면서 의사소통 능력을 향상시켰습니다. </UnderLine>
            팀원분들과의 의견을 제시하고 조율하는 과정에서 자신의 의견만 내세우지 않고 상대를 존중하고 의견을 경청하면서 불화 없이 진행할 수 있었습니다.{"\n"}
            <UnderLine>둘째 프로그래밍 능력을 향상시켰습니다.</UnderLine>
            1학년과 2학년 때는 언어의 기초적인 부분만 배워서 3학년 때 앱을 만들 수 있을지 걱정이 많았습니다. 
            하지만 직접 주제 선정, DB 설계, 서버 구축, 개발로 앱이 만들어지는 것을 보고 성취감을 느낄 수 있었습니다. 
            또한 모르는 부분은 팀원분들에게 물어보고 같이 고민하면서 협동심을 기를 수 있었습니다. 
            졸업 작품을 진행하면서 안드로이드 스튜디오에서 자바로 Retrofit 2를 사용하는 방법 등 JAVA에 여러 함수에 대해 더 많이 알게 되었고 학교에서 배우지 않았던 PHP를 이용하여 서버를 연결하고 회원 추가, 수정 등 회원 관리에 대한 전반적인 부분들 또한 알게 되고 활용함으로써 프로그램 능력을 키울 수 있었습니다
            </BoxContent>

        </ContentBox>


    </Conitainer>        
    )


}
export default School;