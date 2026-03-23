import "../../../public/CSS/intro.css";

const historyData = [
  {
    year: "2023",
    items: [
      { month: "03", text: "수원대학교 제12대 총장 임경숙 박사 취임" },
      { month: "03", text: "2023학년도 입학식" },
      { month: "02", text: "2022학년도 학위수여식 개최(학사: 1,462명 / 석사: 169명 / 박사: 36명)" },
    ],
  },
  {
    year: "2022",
    items: [
      { month: "03", text: "2022학년도 입학식" },
      { month: "02", text: "2021학년도 학위수여식" },
    ],
  },
  {
    year: "2021",
    items: [
      { month: "03", text: "2021학년도 입학식" },
      { month: "02", text: "2020학년도 학위수여식" },
    ],
  },
  {
    year: "2020",
    items: [
      { month: "02", text: "수원대학교 제11대 총장 박철수 박사 취임" },
      { month: "02", text: "입학" },
      { month: "02", text: "2019학년도 학위수여" },
    ],
  },
  {
    year: "2019",
    items: [
      { month: "03", text: "입학식" },
      { month: "02", text: "2018학년도 학위수여식 개최" },
    ],
  },
  {
    year: "2018",
    items: [
      { month: "03", text: "입학식" },
      { month: "02", text: "수원대학교 제10대 총장 박진우 박사 취임" },
      { month: "02", text: "2017학년도 학위수여식 개최 (학사: 2,135명 / 석사: 204명 / 박사: 22명)" },
    ],
  },
  {
    year: "2017",
    items: [
      { month: "09", text: "고운학원 설립 40주년·개교 35주년 기념식 개최" },
      { month: "04", text: "수원대학교 제9대 총장 이인수 박사 취임" },
      {
        month: "03",
        text: "단과대학 통폐합 및 대학원 추가 - 교양대학, 인문사회대학, 경상대학, 공과대학, IT대학, 건강과학대학, 미술대학, 음악대학, 융합문화예술대학, 국제대학가 / 대학원, 행정대학원, 경영대학원, 교육대학원, 공학대학원, 호텔관광대학원, 미술대학원, 음악대학원, 사회복지대학원, 고용서비스대학원, 스포츠과학대학원",
      },
      { month: "03", text: "2017학년도 입학식" },
      { month: "02", text: "2016학년도 학위수여식" },
    ],
  },
  {
    year: "2016",
    items: [
      { month: "08", text: "미래혁신관, 경상대학 완공" },
      {
        month: "03",
        text: "단과대학 통합 및 확충 - 교양대학, 인문사회대학, 경상대학, 융합과학대학, 공과대학, IT대학, 체육의료복지대학, 미술대학, 음악대학, 국제대학 / 대학원, 행정대학원, 경영대학원, 교육대학원, 공학대학원, 호텔관광대학원, 미술대학원",
      },
      { month: "03", text: "2016학년도 입학식" },
      { month: "02", text: "2015학년도 학위수여식(학사: 2,033명 / 석사: 309명 / 박사: 33명)" },
    ],
  },
  {
    year: "2015",
    items: [
      { month: "03", text: "2015학년도 입학식" },
      { month: "02", text: "2014학년도 학위수여식(학사: 2,262명 / 석사: 314명 / 박사: 28명)" },
      { month: "02", text: "차세대 스마트 학습관리시스템 구축" },
    ],
  },
  {
    year: "2014",
    items: [
      { month: "05", text: "화성시 어린이급식관리지원센터 개소" },
      { month: "05", text: "미래혁신관, 경상대학 착공식" },
      { month: "03", text: "2014학년도 입학식" },
      { month: "02", text: "2013학년도 학위수여식(학사: 1,965명 / 석사: 47명 / 박사: 255명)" },
      { month: "01", text: "중국, 미국, 일본 유명 대학과 자매결연 체결 (포럼, 심포지움, 학생교류, 공동연구 수행)" },
    ],
  },
  {
    year: "2013",
    items: [
      { month: "12", text: "대학기관평가인증 획득" },
      { month: "09", text: "중장기 발전계획 선포" },
      { month: "04", text: "수원대학교 제8대 총장 행정학 박사 이인수 취임" },
      { month: "03", text: "2013학년도 입학식(10개 대학: 5개 학부·48개 학과 - 2,598명)" },
      { month: "02", text: "2012학년도 학위수여식(학사: 2,036명 / 석사: 237명 / 박사: 20명)" },
    ],
  },
  {
    year: "2012",
    items: [
      { month: "09", text: "고운학원 설립 35주년 및 수원대학교 개교 30주년" },
      { month: "08", text: "그린카에너지 활용부품 평가센터 개소" },
    ],
  },
  {
    year: "2011",
    items: [{ month: "03", text: "중국 형대대학과 자매결연" }],
  },
  {
    year: "2009",
    items: [
      { month: "04", text: "수원대학교 제7대 총장 행정학박사 이인수 취임" },
      { month: "03", text: "2009학년도 입학식" },
      { month: "02", text: "2008학년도 학위수여식" },
    ],
  },
  {
    year: "2008",
    items: [
      { month: "07", text: "U-City 보안감시 기술협력센터 개소" },
      { month: "03", text: "2008학년도 입학식" },
      { month: "02", text: "2007학년도 학위수여식" },
    ],
  },
  {
    year: "2007",
    items: [
      { month: "03", text: "2007학년도 입학식" },
      { month: "02", text: "2006학년도 학위수여식" },
    ],
  },
  {
    year: "2006",
    items: [
      { month: "09", text: "WISE 경기지역센터 개소" },
      { month: "03", text: "2006학년도 입학식" },
      { month: "02", text: "2005학년도 학위수여식" },
    ],
  },
  {
    year: "2005",
    items: [
      { month: "12", text: "제2주기 대학종합평가 교육 및 사회봉사 최우수대학" },
      { month: "03", text: "2005학년도 입학식" },
      { month: "02", text: "2004학년도 학위수여식" },
    ],
  },
  {
    year: "2004",
    items: [{ month: "03", text: "수원대학교 산학협력단 설립" }],
  },
  {
    year: "2003",
    items: [
      { month: "03", text: "2003학년도 입학식" },
      { month: "02", text: "2002학년도 학위수여식 (학사: 2,217명 / 석사: 191명 / 박사: 9명)" },
    ],
  },
  {
    year: "2002",
    items: [
      { month: "10", text: "사회복지 대학원 설립인가" },
      { month: "09", text: "ACE교육관 준공(연면적 16,730㎡)" },
      { month: "09", text: "개교 20주년 기념행사" },
      { month: "03", text: "제21회 입학식(10개 대학: 8개 학부: 46개 학과: 2,620명)" },
      { month: "02", text: "2001 학위수여식(학사: 1,950명 / 석사: 125명 / 박사: 4명)" },
    ],
  },
  {
    year: "2001",
    items: [
      { month: "11", text: "정보공학대학 설립인가" },
      { month: "08", text: "복지관 및 강의동 준공 (연면적 8,110.75㎡)" },
      { month: "05", text: "수원대-화성시 지역발전연구위원회 협약체결" },
      { month: "04", text: "미국 위스콘신주 에지우드 대학과 자매결연" },
      { month: "04", text: "창업보육센터 개소" },
      { month: "03", text: "2001학년도 입학식" },
      { month: "02", text: "2000학년도 학위수여식" },
    ],
  },
  {
    year: "2000",
    items: [
      { month: "12", text: "ACE교육관 착공" },
      { month: "08", text: "수원대학교 제4대 총장 경영학박사 李鍾郁 취임" },
      { month: "08", text: "1999학년도 후기 학위수여식" },
      { month: "07", text: "학술·연구 교류 협정 체결" },
      { month: "07", text: "복지관 및 강의동 착공" },
      { month: "04", text: "지역기술혁신센터(TIC) 설치" },
      { month: "04", text: "말레이지아 멀티미디어 대학교와 자매결연" },
      { month: "03", text: "제19회 입학식" },
      { month: "02", text: "1999학년도 학위수여식" },
    ],
  },
  {
    year: "1999",
    items: [
      { month: "11", text: "4개 대학원 설립 인가" },
      { month: "09", text: "기숙사 준공" },
      { month: "06", text: "캘리포니아디자인대학과 자매결연" },
      { month: "06", text: "Saint Joseph's University 자매결연" },
      { month: "03", text: "제18회 입학식" },
    ],
  },
  {
    year: "1998",
    items: [
      { month: "11", text: "'99학년도 정원조정 (2,620명)" },
      { month: "04", text: "미국 루이빌대학교와 자매결연" },
      { month: "03", text: "제17회 입학식" },
      { month: "02", text: "1997학년도 학위수여식 (제13회)" },
    ],
  },
  {
    year: "1997",
    items: [
      { month: "11", text: "대학교 증과·증원 인가 (620명)" },
      { month: "10", text: "금융공학대학원 설립인가 (20명)" },
      { month: "09", text: "중국 천진중의학원과 자매결연" },
      { month: "09", text: "중국 북경중의약대학과 자매결연" },
      { month: "09", text: "제1회 산·학·연 전국대회에서 수원대학교 대통령상(전국 최우수상) 수상" },
      { month: "09", text: "자메이카서인도제도대학교와 자매결연" },
      { month: "09", text: "스페인 바르셀로나대학교와 자매결연" },
      { month: "04", text: "學校法人 皐雲學園 제5대 이사장 행정학 박사 李仁洙 취임" },
      { month: "03", text: "제16회 입학식" },
      { month: "02", text: "1996학년도 학위수여식 (제12회)" },
    ],
  },
  {
    year: "1996",
    items: [
      { month: "10", text: "대학 증과·증원 및 정원조정 인가" },
      { month: "08", text: "수원대학교 제3대 총장 경영학박사 李鍾郁 취임" },
      { month: "05", text: "미술대학 건물 준공 및 고운미술관 개관" },
      { month: "03", text: "제15회 입학식" },
      { month: "02", text: "1995학년도 학위수여식 (제11회)" },
    ],
  },
  {
    year: "1995",
    items: [
      { month: "10", text: "미국 유타대학교와 자매결연" },
      { month: "10", text: "미국 네바다대학교(리노)와 자매결연" },
      { month: "10", text: "대학원박사 학위 과정 설치인가(30명)" },
      { month: "09", text: "알마티국립대학교(카자흐스탄 공화국)과 자매결연" },
      { month: "03", text: "제14회 입학식" },
      { month: "02", text: "1994학년도 학위수여식 (제10회)" },
    ],
  },
  {
    year: "1994",
    items: [
      { month: "03", text: "제13회 입학식" },
      { month: "02", text: "1993학년도 학위수여식(제9회)" },
    ],
  },
  {
    year: "1993",
    items: [
      { month: "06", text: "수원대학교 제2대 총장 이학박사 崔榮博 취임" },
      { month: "03", text: "제12회 입학식" },
      { month: "03", text: "學校法人 皐雲學園 제4대 이사장 명예법학박사 文鶴東 취임" },
      { month: "02", text: "1992학년도 학위수여식(제8회)" },
    ],
  },
  {
    year: "1992",
    items: [
      { month: "12", text: "브라운대학교(미국)와 자매결연" },
      { month: "09", text: "중앙도서관 준공" },
      { month: "08", text: "유타주립대학교(미국)와 자매결연" },
      { month: "05", text: "사회교육원 설치(1,525명)" },
      { month: "03", text: "제11회 입학식" },
      { month: "02", text: "1991학년도 학위수여식(제7회)" },
    ],
  },
  {
    year: "1991",
    items: [
      { month: "10", text: "대학 증과·증원 인가(220명)" },
      { month: "06", text: "중국 남개대학과 자매결연" },
      { month: "06", text: "ROTC관 준공" },
      { month: "03", text: "제10회 입학식" },
      { month: "02", text: "學校法人 皐雲學園 제3대 이사장 申姬均 취임" },
      { month: "02", text: "1990학년도 학위수여식(제6회)" },
    ],
  },
  {
    year: "1990",
    items: [
      { month: "11", text: "체육관 및 체육관 준공" },
      { month: "11", text: "대학원 증과·증원 인가" },
      { month: "10", text: "대학 증과·증원 인가 (90명)" },
      { month: "07", text: "미국 FIDM(로스엔젤레스)과 자매결연" },
      { month: "03", text: "제9회 입학식" },
      { month: "02", text: "1989학년도 학위수여식(제5회)" },
    ],
  },
];

export default function HistoryPage() {
  return (
    <main className="subpage">
      <section className="sub-hero">
        <div className="inner">
          <p className="sub-hero__eyebrow">소개</p>
          <h1 className="sub-hero__title">연혁</h1>
          <p className="sub-hero__desc">
            수원대학교의 1990년부터 현재까지의 주요 발자취입니다.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="inner">
          <div className="history-intro">
            <h2>1990년 ~ 현재</h2>
            <p>
              지역 명문에서 세계 명문으로의 도약을 향해 발전해 온 수원대학교의 주요 연혁을
              정리했습니다.
            </p>
          </div>

          <div className="history-timeline">
            {historyData.map((group) => (
              <section className="history-year-block" key={group.year}>
                <div className="history-year-block__year">{group.year}</div>
                <div className="history-year-block__items">
                  {group.items.map((item, idx) => (
                    <div className="history-entry" key={`${group.year}-${idx}`}>
                      <div className="history-entry__month">{item.month}</div>
                      <div className="history-entry__text">{item.text}</div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}