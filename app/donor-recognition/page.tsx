import "../../public/CSS/DonorRecognition.css";

export default function Page() {
  return (
    <main>
      <section className="page-title">
        <h1>기부자 예우</h1>
        <p>수원대학교 발전을 위해 함께해주신 분들께 깊이 감사드립니다.</p>
      </section>

      <div className="container">
        <h2 className="section-heading">기부자 예우 안내</h2>

        <div className="program-grid">
          <a href="#hall-of-fame" className="program-card">
            <h3>명예의 전당 등재</h3>
            <p>수원대학교 홈페이지 명예의 전당에 기부자님의 이름을 기록합니다.</p>
          </a>

          <div className="program-card">
            <h3>감사패 전달</h3>
            <p>일정 금액 이상 기부자께 감사패 및 감사장을 전달합니다.</p>
          </div>

          <div className="program-card">
            <h3>학교 행사 초청</h3>
            <p>대학 주요 행사 및 발전기금 행사에 기부자님을 초청합니다.</p>
          </div>

          <div className="program-card">
            <h3>기부금 영수증 발급</h3>
            <p>연말정산 시 세액공제를 받을 수 있는 기부금 영수증을 발급해드립니다.</p>
          </div>

          <a href="#benefit-guide" className="program-card">
            <h3>기부자 예우 안내</h3>
            <p>기부자님께 보다 다양한 예우를 제공할 수 있도록 노력하겠습니다.</p>
          </a>
        </div>

        <div className="hall">
          <section id="hall-of-fame">
            <h2>명예의 전당</h2>
            <p>수원대학교 발전을 위해 소중한 나눔을 실천해주신 기부자님을 소개합니다.</p>
          </section>

          <ul className="hall-list">
            <li>천마 리더 기부자 (1억 이상)</li>
            <li>천마 골드 기부자 (5천만 이상)</li>
            <li>천마 실버 기부자 (1천만 이상)</li>
            <li>천마 브론즈 기부자 (1백만 이상)</li>
          </ul>

          <div className="donor-grid">
            <div className="donor-card"><h3>홍길동 님</h3><p>발전기금 1억원 기탁</p></div>
            <div className="donor-card"><h3>김수원 님</h3><p>IT대학 장학기금</p></div>
            <div className="donor-card"><h3>(주)수원사랑</h3><p>도서관 건립기금</p></div>
            <div className="donor-card"><h3>이철수 님</h3><p>누적 5천만원 기탁</p></div>
            <div className="donor-card"><h3>박영희 님</h3><p>음악대학 후원</p></div>
            <div className="donor-card"><h3>최동행 님</h3><p>학생 식비 지원</p></div>
          </div>

          <section className="donation-status-pdf">
            <h2>발전기금 기부현황</h2>
            <p className="status-desc">최신 발전기금 기부현황은 아래 문서에서 확인하실 수 있습니다.</p>
            <div className="pdf-wrap">
              <iframe
                //src="/pdf/donation-status.pdf#view=FitH"
                className="pdf-viewer"
                title="발전기금 기부현황"
              ></iframe>
            </div>
          </section>
        </div>

        <section className="honor-benefit-pdf" id="benefit-guide">
            <h2>기부자 예우 프로그램</h2>
            <p className="benefit-desc">
                최신 예우 기준은 아래 안내문에서 확인하실 수 있습니다.
            </p>

            <div className="benefit-image-wrap">
                <img
                    src="../../images/devfund2.jpg"
                    alt="수원대학교 기부자 예우 프로그램 안내"
                    className="benefit-image"
                />
            </div>
        </section>

        <div className="back-home">
          <a href="/" className="home-btn">메인으로 돌아가기</a>
        </div>

        <div className="contact">
          <h3>기부 문의</h3>
          <p>
            수원대학교 대외협력처
            <br />
            전화 : 031-220-2114
            <br />
            이메일 : honor@suwon.ac.kr
          </p>
        </div>
      </div>
    </main>
  );
}