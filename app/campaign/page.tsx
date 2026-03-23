import "../../public/CSS/campaign.css";

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="inner">
          <h1>수원대학교 발전기금 캠페인 안내</h1>
          <p>현재 진행 중인 기부 캠페인을 확인하시고, 뜻깊은 나눔에 함께해 주세요.</p>
        </div>
      </section>

      <section className="section">
        <div className="notice-wrap">
          <div className="notice-image">
            <img
              src="/images/campaign_notice.jpg"
              alt="수원대학교 발전기금 캠페인 공지 안내문"
            />
          </div>
          <div className="notice-copy">
            <h2>캠페인 공지 안내</h2>
            <p>
              수원대학교 대외협력처는 대학의 발전과 학생 지원을 위해 다양한 발전기금
              캠페인을 운영하고 있습니다.
            </p>
            <p>
              교직원, 교수님, 동문, 학부모, 기업과 지역사회 누구나 참여할 수 있으며,
              각 캠페인의 취지에 맞추어 원하는 방식으로 기부를 약정하실 수 있습니다.
            </p>
            <p>
              아래에서 현재 진행 중인 <strong>천마사랑</strong>,{" "}
              <strong>제자사랑</strong>, <strong>달(月)달(月)한 기부</strong>{" "}
              캠페인을 차례로 확인하시고 온라인 약정으로 연결해 주세요.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>현재 진행 중인 캠페인</h2>
          <p>캠페인 소개를 확인한 뒤 온라인 약정 페이지로 바로 이동하실 수 있습니다.</p>
        </div>

        <div className="campaign-list">
          <article id="cheonma-campaign" className="campaign-card">
            <div className="campaign-poster">
              <img src="/images/cheonma-poster.png" alt="천마사랑 캠페인 포스터" />
            </div>
            <div className="campaign-content">
              <div className="campaign-name">천마사랑 캠페인</div>

              <div className="campaign-meta">
                <span className="meta-badge">급여공제</span>
                <span className="meta-badge">10원 ~ 9,990원</span>
                <span className="meta-badge">교직원 참여형</span>
              </div>

              <div className="campaign-slogan">작은 실천으로 함께 만드는 대학의 미래</div>

              <div className="campaign-desc">
                천마사랑 캠페인은 천원 단위의 작은 마음을 담아 학교 사랑을 실천하자는
                의미를 담은 기부 캠페인입니다. 교직원들이 급여공제를 통해 만원 이하의
                소액을 기부하며 대학 발전에 동참하는 학교 사랑 모금 캠페인으로, 부담
                없는 금액이지만 구성원 모두의 참여가 모여 교육 환경 개선과 학교 발전의
                든든한 밑거름이 됩니다.
              </div>

              <div className="campaign-points">
                <div className="point-box">
                  <div className="label">참여 대상</div>
                  <div className="value">교직원</div>
                </div>
                <div className="point-box">
                  <div className="label">기부 방식</div>
                  <div className="value">급여공제</div>
                </div>
                <div className="point-box">
                  <div className="label">기부 금액</div>
                  <div className="value">10원 ~ 9,990원</div>
                </div>
                <div className="point-box">
                  <div className="label">문의</div>
                  <div className="value">대외협력처</div>
                </div>
              </div>

              <div className="btn-row">
                <a href="https://info.suwon.ac.kr/websquare/websquare.jsp?w2xPath=/views/main.xml" className="btn btn-primary">
                  온라인 약정하기
                </a>

                <a href="https://www.suwon.ac.kr/usr/file/dona_chunmalove.hwp" className="btn btn-secondary">
                  약정서 다운로드
                </a>
              </div>
            </div>
          </article>

          <article id="teacher-love-campaign" className="campaign-card">
            <div className="campaign-poster">
              <img src="/images/teacher-love-poster.jpg" alt="제자사랑 기부 캠페인 포스터" />
            </div>
            <div className="campaign-content">
              <div className="campaign-name">제자사랑 캠페인</div>

              <div className="campaign-meta">
                <span className="meta-badge">급여공제 + 자동이체</span>
                <span className="meta-badge">10,000원 ~ 무한한 사랑</span>
                <span className="meta-badge">교수 참여형</span>
              </div>

              <div className="campaign-slogan">교수님의 마음이 제자의 꿈이 됩니다</div>

              <div className="campaign-desc">
                제자사랑 캠페인은 교수님들이 제자들의 학업과 성장을 응원하기 위해 직접
                참여하는 기부 캠페인입니다. 기부금은 장학금 등으로 활용되어 학생들이
                경제적 부담 없이 학업에 집중할 수 있는 환경을 만드는 데 큰 도움이 됩니다.
                사랑하는 제자를 향한 마음이 학생들의 미래를 여는 실제 지원으로 이어집니다.
              </div>

              <div className="campaign-points">
                <div className="point-box">
                  <div className="label">참여 대상</div>
                  <div className="value">교수</div>
                </div>
                <div className="point-box">
                  <div className="label">기부 방식</div>
                  <div className="value">급여공제 / 자동이체</div>
                </div>
                <div className="point-box">
                  <div className="label">기부 금액</div>
                  <div className="value">10,000원 ~ 무한한 사랑</div>
                </div>
                <div className="point-box">
                  <div className="label">기부자 예우</div>
                  <div className="value">영수증 발급 / 예우 프로그램</div>
                </div>
              </div>

              <div className="btn-row">
                <a href="https://info.suwon.ac.kr/websquare/websquare.jsp?w2xPath=/views/main.xml" className="btn btn-primary">
                  온라인 약정하기
                </a>

                <a href="https://www.suwon.ac.kr/usr/file/dona_studlove.hwp" className="btn btn-secondary">
                  약정서 다운로드
                </a>
              </div>
            </div>
          </article>

          <article id="daldal-campaign" className="campaign-card">
            <div className="campaign-poster">
              <img src="/images/daldal-poster.jpg" alt="달달한 기부 캠페인 포스터" />
            </div>
            <div className="campaign-content">
              <div className="campaign-name">달(月)달(月)한 기부 캠페인</div>

              <div className="campaign-meta">
                <span className="meta-badge">정기기부</span>
                <span className="meta-badge">월 10,000원 ~ 100,000원</span>
                <span className="meta-badge">약정기간 1년 ~ 5년</span>
              </div>

              <div className="campaign-slogan">매달 이어지는 달콤한 나눔</div>

              <div className="campaign-desc">
                달(月)달(月)한 캠페인은 매월 1만원 이상을 1년 이상 약정하여 참여하는 월 단위 정기기부 캠페인입니다.
                동문, 학부모, 기업, 지역사회, 교직원 등 수원대학교를 사랑하는 누구나 참여할 수 있습니다.
                정기적인 기부를 통해 대학 발전을 지속적이고 안정적으로 지원할 수 있으며, 작은 나눔이 매달 달콤한 변화로 이어집니다.
              </div>

              <div className="campaign-points">
                <div className="point-box">
                  <div className="label">참여 대상</div>
                  <div className="value">동문, 학부모, 기업체, 개인, 교직원</div>
                </div>
                <div className="point-box">
                  <div className="label">기부 방식</div>
                  <div className="value">온라인 약정 / 약정서 제출</div>
                </div>
                <div className="point-box">
                  <div className="label">기부 금액</div>
                  <div className="value">월 10,000원 ~ 100,000원</div>
                </div>
                <div className="point-box">
                  <div className="label">약정 기간</div>
                  <div className="value">1년 ~ 5년</div>
                </div>
              </div>

              <div className="btn-row">
                <a href="https://info.suwon.ac.kr/websquare/websquare.jsp?w2xPath=/views/main.xml" className="btn btn-primary">
                  온라인 약정하기
                </a>

                <a href="https://www.suwon.ac.kr/usr/file/dona_daldal.hwp" className="btn btn-secondary">
                  약정서 다운로드
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}