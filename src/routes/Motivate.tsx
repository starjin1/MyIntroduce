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
function Motivate() {
    return (
        <Conitainer>
        <Header>
            <Tiltle>지원 동기 및 포부</Tiltle>
        </Header>
        <ContentBox>
            <BoxContent>
            저는 Python을 활용한 Django 와 JavaScript를 이용한 React와 TypeScript 등의 학교 수업과 개인적인 개발을 진행 하면서 특히 React를 이용하여 웹을 디자인하고 만드는 과정에 흥미를 느끼게 되었고 웹 개발 쪽을 희망하게 되었습니다. 
            저는 저의 <UnderLine>끈기 있는 성격</UnderLine>으로 업무를 할 때나 인간관계에서의 힘든 점이 올 때 쉽게 포기하지 않고 끈기 있게 방법을 찾아서 해결할 것입니다. 
            또한 제가 잘 모르는 분야에 대해서 배울 때 <UnderLine>적극적인 자세와 함께 열정적으로 배울 것입니다. </UnderLine>
            </BoxContent>
            <BoxContent>
            인덴트 코퍼레이션은 동영상 리뷰가 가진 가능성과 전망을 예측해 브이리뷰를 만들었으며 브이리뷰 챗봇을 통해 사람들이 후기를 남기고 공유하는 리뷰문화를 써나가고 있습니다. 
            또한 신뢰할 수 있는 실소비 경험 공유 생태계를 만들기 위하여 스프레이 앱을 출시하는 등  정보의 깊이와 신뢰도에 집중하는 리뷰 커마스 시대를 열어가고 있습니다. 
            저는 귀사에 입사하여 React와 TypeScript를 이용하여 브이리뷰 챗봇 서비스를 글로벌화 시키는 등 더 넓게 확장시키는 작업에 기여하고 싶습니다. 또한
            스프레이 앱 기능을 수정 및 추가함으로써 사람들에게 앱이 많이 알려질 수 있게 하며 스프레이 앱이 커머스 형태의 유튜브가 되는 길에 함꼐하고 싶습니다.
            React와 TypeScript 프로그래밍에 대해 기초적인 부분뿐만 아니라 심화적인 부분까지도 계속 공부하며 저의 기술과 프로그래밍 능력을 발전시키겠습니다. 
            또한 다양한 분야의 독서 등 꾸준한 자기 계발을 통해 <UnderLine>자신이 맡은 일에 책임감을 느끼고 항상 열정적인 태도를 보이는 매일매일 성장하는 직원이 되겠습니다.</UnderLine>
            </BoxContent>

        </ContentBox>


    </Conitainer>        
    )


}
export default Motivate;