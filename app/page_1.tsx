import fs from "fs";
import path from "path";
import DonorBoardRotator from "./components/DonorBoardRotator";

type DonorItem = {
  name: string;
  amount: string;
  note?: string;
  sort_order?: number;
  preview_text?: string;
};

type DonorData = {
  [category: string]: DonorItem[];
};

export default function Home() {
  const filePath = path.join(process.cwd(), "public", "donors.json");

  let donorsData: DonorData = {};

  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    donorsData = JSON.parse(jsonData);
  } catch (error) {
    console.error("donors.json 읽기 실패:", error);
  }

  const allDonors = Object.values(donorsData).flat();

  return (
    <main>
      <section className="hero">
        <h1>수원의 미래를 밝히는 소중한 나눔</h1>
        <p>여러분의 정성이 수원대학교의 새로운 100년을 만듭니다.</p>
      </section>

      <div className="quick-nav">
        <a
          href="/daldal"
          className="q-card"
          style={{ padding: 0, overflow: "hidden", display: "block" }}
        >
          <img
            src="/images/daldal-poster.jpg"
            alt="달달한 기부 캠페인"
            style={{ width: "100%", display: "block" }}
          />
        </a>

        <a
          href="/donor-recognition"
          className="q-card"
          style={{ display: "block" }}
        >
          <h3>기부자 예우</h3>
          <p>명예의 전당 및 예우 안내</p>
        </a>

        <div className="q-card">
          <h3>공지 사항</h3>
          <p> .. </p>
        </div>
      </div>

      {/* 발전기금 성과 */}
      <section className="fund-result-section">
        <div className="fund-result-bg">
          <div className="section-title fund-title">
            <h2>발전기금 성과</h2>
            <div className="bar"></div>
          </div>

          <div className="fund-result-grid">
            <div className="fund-result-card">
              <div className="fund-result-icon">
                <img src="/images/icon-fund.png" alt="누적 발전기금 아이콘" />
              </div>
              <div className="fund-result-label">누적 발전기금</div>
              <div className="fund-result-value point">538억원</div>
            </div>

            <div className="fund-result-card">
              <div className="fund-result-icon">
                <img
                  src="/images/icon-scholarship.png"
                  alt="장학금 수혜 학생 아이콘"
                />
              </div>
              <div className="fund-result-label">장학금 수혜 학생</div>
              <div className="fund-result-value">12,842명</div>
            </div>

            <div className="fund-result-card">
              <div className="fund-result-icon">
                <img
                  src="/images/icon-facility.png"
                  alt="환경 시설 개선 아이콘"
                />
              </div>
              <div className="fund-result-label">환경/시설 개선</div>
              <div className="fund-result-value">1,392건</div>
            </div>

            <div className="fund-result-card">
              <div className="fund-result-icon">
                <img
                  src="/images/icon-program.png"
                  alt="지원 프로그램 아이콘"
                />
              </div>
              <div className="fund-result-label">지원 프로그램</div>
              <div className="fund-result-value">174개</div>
            </div>

            <div className="fund-result-card">
              <div className="fund-result-icon">
                <img
                  src="/images/icon-honor.png"
                  alt="명예의 전당 헌액자 아이콘"
                />
              </div>
              <div className="fund-result-label">명예의 전당 헌액자</div>
              <div className="fund-result-value">372명</div>
            </div>
          </div>
        </div>
      </section>

      {/* 참여 기부자 */}
      <DonorBoardRotator donors={allDonors} />

      {/* 기부 안내 */}
      <section id="guide">
        <div className="section-title">
          <h2>기부 안내</h2>
          <div className="bar"></div>
        </div>

        <div className="guide-grid">
          <div className="guide-item">
            <h3>일반 발전기금</h3>
            <p>
              대학 전체의 교육 환경 개선 및 중장기 발전을 위해 사용되는 가장 대표적인
              기금입니다.
            </p>
          </div>

          <div className="guide-item">
            <h3>장학 발전기금</h3>
            <p>
              경제적 어려움을 겪는 학생이나 성적이 우수한 학생들을 위한 희망의
              사다리가 됩니다.
            </p>
          </div>

          <div className="guide-item">
            <h3>시설/건축 기금</h3>
            <p>
              최첨단 강의실, 도서관 건립 등 학생들을 위한 인프라 구축에 투입됩니다.
            </p>
          </div>
        </div>
      </section>

      <section className="donation-links">
        <div className="d-item">
          <div className="d-icon">
            <i className="fa-solid fa-file-signature"></i>
          </div>

          <h3>수원대학교 발전기금 참여방법</h3>
          <p>누구나 편리하게 참여 하실 수 있습니다.</p>

          <a href="/participation2" className="d-btn">
            자세히 보기
          </a>
        </div>

        <div className="d-item">
          <div className="d-icon">
            <i className="fa-solid fa-hand-holding-heart"></i>
          </div>

          <h3>기부하기</h3>
          <p>더 밝은 미래를 위한 기회와 시간을 선물합니다.</p>

          <a href="#give" className="d-btn">
            자세히 보기
          </a>
        </div>

        <div className="d-item">
          <div className="d-icon">
            <i className="fa-solid fa-book-open"></i>
          </div>

          <h3>연차보고서</h3>
          <p>후원의 보람과 사용 내역을 확인하실 수 있습니다.</p>
          <a href="#" className="d-btn">
            자세히 보기
          </a>
        </div>
      </section>
    </main>
  );
}