"use client";
import React from 'react'
import { useState } from 'react'


const mockEvents = [
    {
      event_id: "evt-001",
      event_type: "refund",
      channel: "counter",
      message: "고객이 카드 결제 취소가 아직 반영되지 않았다고 문의함",
      severity: "high",
      status: "received",
      requires_response: true
    },
    {
      event_id: "evt-002",
      event_type: "delay",
      channel: "mobile_order",
      message: "모바일 주문 후 대기 시간이 길어 고객이 픽업 시간을 문의함",
      severity: "medium",
      status: "received",
      requires_response: true
    },
    {
      event_id: "evt-003",
      event_type: "quality",
      channel: "delivery",
      message: "포장 상태가 기대와 달라 고객이 교환 기준을 문의함",
      severity: "medium",
      status: "received",
      requires_response: true
    }
  ];
  export default function Home() {
      // selectedEvent는 현재 화면에서 사용자가 보고 있는 사건입니다.
  // useState의 첫 번째 값은 현재값, 두 번째 값은 현재값을 바꾸는 함수입니다.
  const [selectedEvent, setSelectedEvent] = useState(mockEvents[0]);

  // question은 챗봇 input에 들어 있는 현재 문장입니다.
  const [question, setQuestion] = useState("환불 요청 고객에게 먼저 확인할 것은?");

  // answer는 mock 챗봇이 화면에 보여줄 답변입니다.
  // 실제 API 연결 전까지는 버튼을 누르면 고정된 답변을 보여줍니다.
  const [answer, setAnswer] = useState("아직 질문하지 않았습니다.");
   
    return (
    <main className="dashboard">
     <section className="hero">
        <p className="eyebrow">Frontend 01</p>
        <h1>AI 매장 운영 관제센터</h1>
        <p>mock data로 Next.js 화면 구조를 먼저 완성합니다.</p>
      </section>

      <section className="layout">
        <div className="panel">
          <h2>사건 목록</h2>
          {mockEvents.map((event) => (
            <button key={event.event_id} className="eventButton" onClick={() => setSelectedEvent(event)}>
              <strong>{event.event_id}</strong>
              <span>{event.event_type}</span>
              <span className={`badge ${event.severity}`}>{event.severity}</span>
            </button>
          ))}
        </div>

        <div className="panel">
          <h2>사건 상세</h2>
          <p>{selectedEvent.message}</p>
          <dl>
            <dt>채널</dt>
            <dd>{selectedEvent.channel}</dd>
            <dt>상태</dt>
            <dd>{selectedEvent.status}</dd>
            <dt>응답 필요</dt>
            <dd>{selectedEvent.requires_response ? "필요" : "불필요"}</dd>
          </dl>
        </div>

        <div className="panel">
          <h2>점장 보고서</h2>
          <p>[mock] {selectedEvent.event_type} 사건은 우선 확인과 고객 안내가 필요합니다.</p>
          <h2>직원 체크리스트</h2>
          <ol>
            <li>고객 불편을 인정한다.</li>
            <li>주문 번호와 결제 시각을 확인한다.</li>
            <li>심각도가 high이면 점장에게 공유한다.</li>
          </ol>
        </div>
      </section>

      <section className="panel">
        <h2>문서 챗봇</h2>
        <div className="inlineForm">
          <input value={question} onChange={(event) => setQuestion(event.target.value)} />
          <button onClick={() => setAnswer("문서 기준 mock 답변: 주문 번호, 결제 수단, 결제 시각을 먼저 확인합니다.")}>
            매뉴얼에 질문
          </button>
        </div>
        <pre>{answer}</pre>
      </section>
    </main>
    )
  }