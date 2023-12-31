import React from 'react';
import '../../css/FAQ.css';
import Banner from '../../components/Banner';
import Question from '../../components/Question';

function FaqDetail() {
    return (
        <>
            <Banner/>
            <div>
            <p id="title">자주 묻는 질문</p>
            <hr id="hr1"/>
            </div>

            <Question contents="유기동물 입양 방법을 알려주세요!"/>

            <div id="fd_contents">
            <p>[유기동물 입양 방법을 알려주세요!]<br/><br/>
            1. 유기동물 입양을 위해서 보호소 담당자와 상담을 하셔야 합니다. 반짝 사이트에서 입양을 희망하는 동물을 찾으셨다면, 하단의 문의하기 버튼을 통해 보소호에 전화 걸 수 있습니다. 
            <br/>(문의 가능 시간: 평일 9:00~18:00)
            <br/><br/>
            2. 상담 시 해당 동물에 대해 더 알아야 할 사항이 없는지 충분한 대화를 나누시고 입양과 관련한 마음을 확실히 하셔야 합니다.
            <br/><br/>
            3. 마음이 확실해지셨다면 담당자와 방문 약속을 잡습니다.
            <br/><br/>
            4. 방문 시 입양자 신분증과 동물 목줄을 반드시 지참하시고, 보호소에 따라 필요로 하는 서류나 준비물이 있을 수 있으니 미리 확인하시고 준비하시기 바랍니다.
            <br/><br/>
            5. 보호소에 도착하시면 간단한 이야기 후 입양 신청서를 작성하고  반려동물 짝꿍을 맞이하실 수 있습니다.
            <br/><br/>
            유기동물 입양은 절대 어려운 일이 아닙니다. 
            하지만 동물이 다시 버려지는 일이 없도록 꼭 모든 준비가 되었을 때 입양해 주시기 바랍니다. 여러분의 행동 하나로 유기동물은 키우기 어렵고 문제가 있다는 편견을 없앨 수 있습니다. 
            <br/><br/>
            좋은 마음으로 찾아와주신 반짝 이용자분들께 늘 감사드립니다.</p>
            </div>
        </>
    );
}

export default FaqDetail;