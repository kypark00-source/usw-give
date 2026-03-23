"use client";
import { useState } from "react";
import "../../public/CSS/participation.css";

export default function Page() {
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [consent3, setConsent3] = useState(false);

  const allChecked = consent1 && consent2 && consent3;

  const handleAllChange = (checked: boolean) => {
    setConsent1(checked);
    setConsent2(checked);
    setConsent3(checked);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">HOME &gt; 기부참여방법</div>
          <h1 className="page-title">수원대학교와 함께하는 기부참여방법</h1>
          <p className="page-desc">
            수원대학교 발전기금 참여 절차와 후원 방식을 한눈에 확인하실 수 있도록
            정리한 안내 페이지입니다.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="intro-grid">
            <section className="intro-card">
              <div className="eyebrow">기부 안내</div>
              <h2>누구나 편리하게 참여할 수 있는 기부 절차</h2>
              <p>
                수원대학교 발전기금은 개인, 단체, 동문, 학부모, 교직원, 기업 등
                다양한 참여자를 대상으로 운영할 수 있는 구조를 전제로 제작했습니다.
                고려대학교 기부 페이지의 흐름처럼 후원정보 선택 → 후원자 정보 입력
                → 결제정보 입력 → 약관 동의 순서로 구성했습니다.
              </p>
              <p>
                실제 적용 시에는 모금 캠페인, 단과대학, 장학기금, 시설기금,
                지정기부 항목을 운영 정책에 맞게 교체하시면 됩니다.
              </p>
              <ul className="note-list">
                <li>일시후원과 정기후원을 모두 안내할 수 있는 구조</li>
                <li>개인 / 단체 구분 입력 가능</li>
                <li>카드, 계좌이체, 간편결제, 무통장입금 등 결제수단 확장 가능</li>
                <li>후원 목적과 관계 정보를 추가로 받는 상세정보 영역 포함</li>
              </ul>
            </section>

            <aside className="summary-card">
              <div
                className="summary-visual"
                aria-label="참여 안내 대표 이미지"
              ></div>
            </aside>
          </div>

          <div className="two-col" id="steps">
            <section className="box">
              <h2 className="block-title">참여 절차 안내</h2>

              <div className="step-list">
                <div className="step">
                  <div className="step-num">1</div>
                  <div>
                    <h4>후원정보 선택</h4>
                    <p>
                      후원구분(정기/일시), 대분류, 소분류, 기부금 상세, 후원금액을
                      선택합니다.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">2</div>
                  <div>
                    <h4>후원자 정보 입력</h4>
                    <p>
                      개인 또는 단체를 구분하고 이름, 휴대전화, 이메일 등 기본
                      정보를 입력합니다.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">3</div>
                  <div>
                    <h4>상세정보 작성</h4>
                    <p>
                      본교와의 관계, 요청사항, 지정기부 관련 내용을 추가로 작성할 수
                      있습니다.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">4</div>
                  <div>
                    <h4>결제정보 입력 및 동의</h4>
                    <p>
                      결제수단 선택 후 약관 동의와 서명을 거쳐 후원을 완료합니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="box">
              <h2 className="block-title">참여 방식 요약</h2>

              <table className="guide-table">
                <tbody>
                  <tr>
                    <th>후원구분</th>
                    <td>정기후원 / 일시후원</td>
                  </tr>
                  <tr>
                    <th>참여대상</th>
                    <td>개인, 단체(사업자), 동문, 학부모, 교직원, 기업 등</td>
                  </tr>
                  <tr>
                    <th>기부유형</th>
                    <td>
                      대학발전기금, 장학기금, 시설기금, 지정기부 등으로 확장 가능
                    </td>
                  </tr>
                  <tr>
                    <th>결제수단</th>
                    <td>신용/체크카드, 계좌이체, 간편결제, 무통장입금 등</td>
                  </tr>
                  <tr>
                    <th>기타사항</th>
                    <td>
                      실제 운영 시 세제혜택 안내, 영수증 발급, 지정기부 작성 안내 등을
                      추가할 수 있습니다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          <section className="faq full-width">
            <h2 className="block-title">자주 묻는 질문</h2>

            <details open>
              <summary>정기후원과 일시후원의 차이는 무엇인가요?</summary>
              <div className="faq-answer">
                정기후원은 매월 또는 정해진 주기로 반복 납부되는 형태이며,
                일시후원은 1회성으로 납부하는 방식입니다.
              </div>
            </details>

            <details>
              <summary>지정기부를 하고 싶은 경우 어떻게 작성하나요?</summary>
              <div className="faq-answer">
                후원정보 선택 시 &apos;기관 및 용도 지정&apos; 또는 이에 해당하는 항목을
                선택하고, 요청사항에 대상 기관과 용도를 작성하는 방식으로 운영할 수
                있습니다.
              </div>
            </details>

            <details>
              <summary>단체나 기업도 참여할 수 있나요?</summary>
              <div className="faq-answer">
                가능합니다. 단체(사업자) 선택 후 단체명, 대표자 정보, 사업자번호 등
                필요한 항목을 추가로 받을 수 있도록 구성했습니다.
              </div>
            </details>
          </section>

          <section className="form-panel" id="donation-form">
            <div className="form-head">
              <h2>온라인 기부 약정</h2>
              <p> </p>
            </div>

            <form>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="donationType">후원구분</label>
                  <select id="donationType">
                    <option>정기후원</option>
                    <option>일시후원</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="category1">대분류</label>
                  <select id="category1">
                    <option>수원대학교 용도 위임</option>
                    <option>장학기금</option>
                    <option>시설기금</option>
                    <option>기관 및 용도 지정</option>
                  </select>
                </div>

                <div className="field full">
                  <label htmlFor="category2">소분류</label>
                  <select id="category2">
                    <option>일반 발전기금</option>
                    <option>장학 발전기금</option>
                    <option>캠퍼스 환경개선 기금</option>
                    <option>기타 (요청사항에 기재)</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="supporterType">구분</label>
                  <select id="supporterType">
                    <option>개인</option>
                    <option>단체(사업자)</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="amount">후원금액</label>
                  <input id="amount" type="text" placeholder="예: 100,000" />
                </div>

                <div className="field">
                  <label htmlFor="name">이름 / 단체명</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="이름 또는 단체명을 입력하세요"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">휴대전화</label>
                  <input id="phone" type="tel" placeholder="010-0000-0000" />
                </div>

                <div className="field full">
                  <label htmlFor="email">이메일</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@suwon.ac.kr"
                  />
                  <div className="helper">
                    후원내역 확인 및 안내 발송을 위한 필수 연락 정보로 활용됩니다.
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="relation">본교와의 관계</label>
                  <select id="relation">
                    <option>선택하세요</option>
                    <option>동문</option>
                    <option>학부모</option>
                    <option>교직원</option>
                    <option>학생</option>
                    <option>기업/단체</option>
                    <option>기타</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="payMethod">결제수단</label>
                  <select id="payMethod">
                    <option>신용/체크카드</option>
                    <option>실시간 계좌이체</option>
                    <option>가상계좌</option>
                    <option>간편결제</option>
                    <option>무통장입금</option>
                  </select>
                </div>

                <div className="field full">
                  <label>예상 결제수단 예시</label>
                  <div className="pay-methods">
                    <span className="pill">신용/체크카드</span>
                    <span className="pill">실시간 이체</span>
                    <span className="pill">가상계좌</span>
                    <span className="pill">네이버페이</span>
                    <span className="pill">카카오페이</span>
                    <span className="pill">애플페이</span>
                  </div>
                </div>

                <div className="field full">
                  <label htmlFor="request">요청사항</label>
                  <textarea
                    id="request"
                    rows={5}
                    placeholder="예: OO대학 / 장학금, 또는 본교와의 관계에 따른 추가 정보를 입력하세요."
                  ></textarea>
                </div>
              </div>

              <div className="consent-box">
                <div className="consent-line">
                  <input
                    type="checkbox"
                    id="consentAll"
                    checked={allChecked}
                    onChange={(e) => handleAllChange(e.target.checked)}
                  />
                  <label htmlFor="consentAll">전체 동의하기</label>
                </div>

                <div className="consent-line">
                  <input
                    type="checkbox"
                    id="consent1"
                    checked={consent1}
                    onChange={(e) => setConsent1(e.target.checked)}
                  />
                  <label htmlFor="consent1">[필수] 이용약관 동의</label>
                </div>

                <div className="consent-line">
                  <input
                    type="checkbox"
                    id="consent2"
                    checked={consent2}
                    onChange={(e) => setConsent2(e.target.checked)}
                  />
                  <label htmlFor="consent2">[필수] 개인정보 수집 및 이용 동의</label>
                </div>

                <div className="consent-line">
                  <input
                    type="checkbox"
                    id="consent3"
                    checked={consent3}
                    onChange={(e) => setConsent3(e.target.checked)}
                  />
                  <label htmlFor="consent3">[필수] 결제 서비스 이용약관 동의</label>
                </div>
              </div>

              <div className="sign-area">
                <div className="sign-label">서명</div>
                <div className="sign-box">후원자 서명 입력 영역</div>
                <div className="sign-caption">
                  실제 서비스에서는 전자서명 또는 간편 인증으로 대체할 수 있습니다.
                </div>
              </div>

              <div className="submit-row">
                <button type="button" className="primary-btn">
                  후원 신청 완료하기
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}