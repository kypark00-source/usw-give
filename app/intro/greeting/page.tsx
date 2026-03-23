import "../../../public/CSS/intro.css";

export default function GreetingPage() {
  return (
    <main className="subpage">

      <section className="sub-hero">
        <div className="inner">
          <p className="sub-hero__eyebrow">소개</p>
          <h1 className="sub-hero__title">총장 인사말</h1>
          <p className="sub-hero__desc">
            수원대학교 총장의 인사말입니다.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="inner greeting-wrapper">

          {/* 이미지 */}
          <div className="greeting-image">
            <img src="../../images/greeting.jpg" alt="총장 인사말" />
          </div>

          {/* 인사말 텍스트 */}
          <div className="greeting-text">
{/*
            <h2>
              수원대학교에서 자신의 모든 열정을 쏟아내는
              미래의 주인공인 여러분을 환영합니다.
            </h2>

            <p>
              수원대학교는 자아 개발, 문화 시민 자질 함양,
              미래사회 선도 능력 배양, 국가사회 봉사라는 교육목표 아래
              우수 인재를 양성하고 있습니다.
            </p>

            <p>
              다양한 창업지원 프로그램과 산학협력 시스템을 통해
              경기 남부 창업 허브 대학으로 성장하고 있으며
              학생이 우선인 대학을 목표로 교육 혁신을 이어가고 있습니다.
            </p>

            <p className="greeting-sign">
              수원대학교 총장 <strong>임경숙</strong>
            </p>
*/}
        </div>

        </div>
      </section>


    </main>
  );
}