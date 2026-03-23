export default function Page() {
  return (
    <main>

<div className="daldal-container">

  <div className="campaign-hero">
    <img src="/images/daldal-poster.jpg" alt="달달한 기부 캠페인 포스터" className="poster-img"/>
  </div>

  <section className="info-section">

    <div className="info-title">
      "당신의 <span className="highlight">달콤한 나눔</span>이 학생들의 미래가 됩니다"
    </div>

    <p>
      월 10,000원 이상의 소액 정기기부로 수원대학교의 발전에 기여하는
      명예로운 기부자가 되어주세요.
    </p>

    <div className="account-card">
      <h3>🏦 온라인 기부 계좌 안내</h3>
      <p>신한은행 (예금주: 수원대학교)</p>
      <div className="account-number">100-012-345678</div>
      <p style={{fontSize:"0.8rem",color:"#666"}}>
        * 입금 시 반드시 '성명+생년월일'로 입금 부탁드립니다.
      </p>
    </div>

    <div className="btn-group">
      <a href="#" className="btn btn-primary">온라인 약정하기</a>
      <a href="/" className="btn btn-secondary">메인으로 돌아가기</a>
    </div>

  </section>

</div>

</main>
  )
}