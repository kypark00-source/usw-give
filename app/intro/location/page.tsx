
import "../../../public/CSS/intro.css";

const carRoutes = [
  {
    title: "수원역 방면",
    routes: [
      "수원역 → 오산방면 → 세평지하차도 진입 → 우회전 → 오목천삼거리 좌회전 → 한국농업전문학교 → 수원대학교",
    ],
  },
  {
    title: "서울 방면",
    routes: [
      "A코스 : 사당동 → 봉담IC → 남수원방면 → 한국농업전문학교 → 수원대학교",
      "B코스 : 수원IC → 터미널사거리 → 병점육교 → 융건릉 → 수원대학교",
      "C코스 : 동탄JC → 정남IC → 수원과학대 → 수원대학교",
      "D코스 : 영등포 → 안양 → 의왕 → 북수원I.C(봉담·발안방면) → 봉담I.C(좌회전) → 수영사거리 → 한국농업전문학교 → 수원대학교",
    ],
  },
  {
    title: "분당 방면",
    routes: [
      "A코스 : 분당(이매사거리) → 판교IC → 판교JC → 청계톨게이트 → 학의분기점 → 봉담과천간고속화도로 봉담방면 → 봉담IC → 한국농업전문학교 → 수원대학교",
      "B코스 : 풍덕천 → 수원동문(창용문) → 수원남문(팔달문) → 수원역 → 수원대학교",
    ],
  },
  {
    title: "인천 방면",
    routes: [
      "A코스 : 동암역 → 만수동 → 서해안고속도로 → 비봉IC → 수원방면 → 오목천삼거리(우회전) → 한국농업전문학교 → 수원대학교",
      "B코스 : 동암역 → 만수동 → 신갈·안산고속도로 → 반월IC(군포·산본) → 수인산업도로(수원방면) → 서수원I.C → 봉담IC → 한국농업전문학교 → 수원대학교",
      "C코스 : 동암역 → 만수동 → 수인산업도로 → 서수원I.C → 봉담IC → 한국농업전문학교 → 수원대학교",
    ],
  },
];

export default function LocationPage() {
  return (
    <main className="subpage">
      <section className="sub-hero">
        <div className="inner">
          <p className="sub-hero__eyebrow">소개</p>
          <h1 className="sub-hero__title">찾아오시는 길</h1>
          <p className="sub-hero__desc">
            수원대학교 방문을 위한 교통 안내와 승용차 이용 경로를 안내합니다.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="inner">
          <div className="location-grid">
            <div className="location-card">
              <h2>기본 안내</h2>
              <ul>
                <li>통학버스 이용 가능</li>
                <li>대중버스 이용 가능</li>
                <li>승용차 이용 시 방면별 경로 확인 가능</li>
              </ul>
            </div>

            <div className="location-card">
              <h2>주소</h2>
              <p>경기도 화성시 봉담읍 와우안길 17 수원대학교</p>
              <p className="location-note">
                아래 지도에서 위치를 확인하시거나, 외부 지도 서비스로 바로 이동하실 수 있습니다.
              </p>
            </div>
          </div>

          {/* 지도 섹션 추가 */}
          <section className="location-map-section">
            <div className="location-map-header">
              <h2>지도 안내</h2>
              <div className="location-map-links">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%EC%88%98%EC%9B%90%EB%8C%80%ED%95%99%EA%B5%90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link-btn"
                >
                  구글 지도에서 보기
                </a>
                <a
                  href="https://map.naver.com/p/search/%EC%88%98%EC%9B%90%EB%8C%80%ED%95%99%EA%B5%90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link-btn"
                >
                  네이버 지도에서 보기
                </a>
              </div>
            </div>

            <div className="location-map-wrap">
              <iframe
                title="수원대학교 위치 지도"
                src="https://www.google.com/maps?q=%EC%88%98%EC%9B%90%EB%8C%80%ED%95%99%EA%B5%90&z=15&output=embed"
                className="location-map-frame"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <div className="route-section">
            <h2>승용차 이용 안내</h2>

            <div className="route-list">
              {carRoutes.map((group) => (
                <div className="route-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.routes.map((route) => (
                      <li key={route}>{route}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}