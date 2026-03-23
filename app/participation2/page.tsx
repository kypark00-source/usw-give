import "../../public/CSS/participation.css";

export default function Participation2Page() {
  return (
    <main className="subpage">
      <section className="sub-hero">
        <div className="inner">
          <p className="sub-hero__eyebrow">기부안내</p>
          <h1 className="sub-hero__title">참여방법</h1>
          <p className="sub-hero__desc">
            수원대학교 발전기금 참여 절차와 예우 프로그램을 안내드립니다.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="inner">
          <div className="devfund-guide">

            <section className="devfund-block">
              <div className="devfund-heading">
                <span className="devfund-heading__en">Guide Book</span>
                <h2>발전기금 안내서</h2>
                <p>
                  수원대학교 발전기금 안내서 표지입니다.
                </p>
              </div>
              <div className="devfund-card">
                <img
                  src="/images/devfund1.jpg"
                  alt="수원대학교 발전기금 안내서"
                  className="devfund-image"
                />
              </div>
            </section>

            <section className="devfund-block">
              <div className="devfund-heading">
                <span className="devfund-heading__en">How to Participate</span>
                <h2>참여방법</h2>
                <p>
                  약정서 작성, 기부금 납부, 영수증 발급 및 세금혜택 내용을 확인하실 수 있습니다.
                </p>
              </div>
              <div className="devfund-card">
                <img
                  src="/images/devfund2.jpg"
                  alt="수원대학교 기부 참여방법"
                  className="devfund-image"
                />
              </div>
            </section>

            <section className="devfund-block">
              <div className="devfund-heading">
                <span className="devfund-heading__en">Honor Program</span>
                <h2>기부자 예우 프로그램</h2>
                <p>
                  기부자 예우 기준과 제공 혜택을 확인하실 수 있습니다.
                </p>
              </div>
              <div className="devfund-card">
                <img
                  src="/images/devfund3.jpg"
                  alt="수원대학교 기부자 예우 프로그램"
                  className="devfund-image"
                />
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}