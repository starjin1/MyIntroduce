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
width: 60%;
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
/* text-decoration:underline ; */
background: #defd63a4;
`;

function Groth() {
    return (
        <Conitainer>
        <Header>
            <Tiltle>성장 과정</Tiltle>
        </Header>
        <ContentBox>
            <BoxContent>
            자신의 자리에서 항상 최선을 다하시는 부모님을 보며 저는 <UnderLine>열정적인 삶의 태도</UnderLine>를 갖게 되었습니다.
            그리고 그 덕분에 수학 성적이 저번 시험 보다 훨씬 좋게 나왔고 성취감과 자신감 또한 얻을 수 있었습니다. 
            학창 시절에 가정  형편이 어려워 학원을 다니지 못했던 저는 혼자 수학을 공부하는 것이 너무나 어려웠습니다. {"\n"}
            그러나 저는 여기서 포기하지 않고 수학을 풀던 중 혼자 힘으로는 풀리지 않는 문제가 생기거나 궁금한 점이 생기면 선생님에게 매일매일 질문을 드렸던 기억이 있습니다. 
            더불어 방과 후 수업을 이용하여 수학 보충 수업을 들음으로써 수학 공부에 대한 <UnderLine>열정적인 태도와 끈기 있는 태도</UnderLine>를 가졌었습니다.
            덕분에 수학 시험 점수가 전보다 훨씬 좋게 나왔고 내가 못 할 것 같은 일도 꾸준히 관심을 가지고 열심히 하면 잘 할 수 있구나라는 걸 깨달을 수 있었습니다.    
            </BoxContent>

        </ContentBox>


    </Conitainer>        
    )


}
export default Groth;