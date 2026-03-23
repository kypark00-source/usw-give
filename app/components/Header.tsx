export default function Header() {
  return (
    <div className="site-header">
      <div className="header-inner">
        <a href="/" className="header-brand">
          <img
            src="/images/USW_logo.png"
            alt="수원대학교 로고"
            className="header-logo"
          />
          <div className="header-brand-text">
            <div className="header-brand-kor">수원대학교 대외협력처</div>
            <div className="header-brand-eng">
              Office of Development & External Affairs
            </div>
          </div>
        </a>

        <nav className="main-nav">
          <ul className="gnb">
            <li className="gnb-item">
              <a href="/">소개</a>
              <ul className="sub-menu">
                <li><a href="/intro/greeting">인사말</a></li>
                <li><a href="/intro/history">연혁</a></li>
                <li><a href="/intro/organization">조직안내</a></li>
                <li><a href="/intro/location">찾아오시는 길</a></li>
              </ul>
            </li>

            <li className="gnb-item">
              <a href="/campaign">캠페인</a>
              <div className="sub-menu">
                <a href="/campaign">발전기금 캠페인 안내</a>
                <a href="/campaign#cheonma-campaign">천마사랑 캠페인</a>
                <a href="/campaign#teacher-love-campaign">제자사랑 캠페인</a>
                <a href="/campaign#daldal-campaign">달(月)달(月)한 기부</a>
              </div>
            </li>

            <li className="gnb-item">
              <a href="/donor-recognition">기부자 예우</a>
              <div className="sub-menu">
                <a href="/donor-recognition">기부자 예우</a>
                <a href="/donor-recognition#hall-of-fame">명예의 전당</a>
                <a href="/donor-recognition#benefit-guide">예우 안내</a>
              </div>
            </li>

            <li className="gnb-item">
              <a href="/participation">기부안내</a>
              <div className="sub-menu">
                {/*
                <a href="/participation">참여방법</a>
                <a href="/participation#donation-form">온라인 기부참여</a>
                */}
                <a href="/participation2">발전기금 안내서</a>
              </div>
            </li>
{/*
            <li className="gnb-item">
              <a href="/daldal">온라인기부</a>
              <div className="sub-menu">
                <a href="/daldal">달달한 기부</a>
              </div>
            </li>

            <li className="gnb-item">
              <a href="/donor-recognition#hall-of-fame">명예의 전당</a>
              <div className="sub-menu">
                <a href="/donor-recognition#hall-of-fame">명예의 전당</a>
                <a href="/donor-recognition#benefit-guide">기부자 예우 안내</a>
              </div>
            </li>
*/}
          </ul>
        </nav>
      </div>
    </div>
  );
}