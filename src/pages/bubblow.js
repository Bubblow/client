import React from 'react';

const Bubblow = ()=>{
    return (
        <div className="about-container">
            <Introduction />
            <Necessity />
            <Usage />
            <Effects />
        </div>
    );
    };
    
    const Introduction = () => {
        return (
            <section>
            <h2>버블로우란?</h2>
            <p>버블로우(Bubblow)는 '필터 버블(Filter Bubble)' 현상을 해소하고자 만든 인공지능을 활용한 웹사이트입니다. '버블을 날려버리다(Bubble + Blow)'라는 의미를 담아, 이 웹사이트는 추천 알고리즘에 의해 발생하는 정보의 편향성을 줄이고 사용자가 다양한 관점에서 뉴스를 접할 수 있도록 돕습니다. 정치와 경제 분야의 뉴스 내용을 분석하여 그 성향과 신뢰도를 평가하는 기능을 중심으로 구성된 '뉴스 분석 및 신뢰도 평가 웹사이트'입니다.</p>
            </section>
        );
    };
    
    const Necessity = () => {
        return (
            <section>
            <h2>버블로우의 필요성</h2>
            <p>현대사회에서 알고리즘 기반의 추천 시스템은 사용자가 편향된 정보에 쉽게 노출될 위험을 증가시킵니다. ... 사용자가 더 균형 잡힌 시각에서 정보를 소비할 수 있도록 지원합니다.</p>
            </section>
        );
        };
    
    const Usage = () => {
        return (
            <section>
            <h2>이용 방법</h2>
            <ol>
                <li>링크 붙여넣기: 사용자는 분석을 원하는 네이버 뉴스 기사의 링크를 버블로우에 붙여넣습니다.</li>
                <li>기사 분석: 제출된 링크는 자동으로 처리되어...</li>
                <li>결과 제공: 분석이 완료되면 사용자에게 기사의 신뢰도, 성향, 편향에 대한 종합적인 평가가 제공됩니다.</li>
            </ol>
            </section>
        );
        };
    
    const Effects = () => {
        return (
            <section>
            <h2>버블로우 사용으로 인한 효과</h2>
            <ul>
                <li>편향성 감소: 사용자가 다양한 관점에서 정보를 접하도록 도와 정보 소비의 편향성을 줄입니다.</li>
                <li>신뢰성 있는 정보 제공: ...</li>
                <li>비판적 사고 및 미디어 리터러시 강화: ...</li>
                <li>사회적 대화의 질 개선: ...</li>
            </ul>
            </section>
        );
    };    


export default Bubblow;