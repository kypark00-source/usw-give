"use client";

import { useEffect, useMemo, useState } from "react";

type DonorItem = {
  name: string;
  amount: string;
  note?: string;
  sort_order?: number;
  preview_text?: string;
};

type Props = {
  donors: DonorItem[];
};

const VISIBLE_COUNT = 8;
const ROW_HEIGHT = 44;
const AUTO_INTERVAL = 2500;

export default function MonthlyDonorTicker({ donors }: Props) {
  const safeDonors = useMemo(() => donors.filter((donor) => donor?.name), [donors]);
  const loopDonors = useMemo(() => {
    if (!safeDonors.length) return [];
    return [...safeDonors, ...safeDonors, ...safeDonors];
  }, [safeDonors]);

  const [currentIndex, setCurrentIndex] = useState(safeDonors.length);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    setCurrentIndex(safeDonors.length);
  }, [safeDonors.length]);

  useEffect(() => {
    if (!isPlaying || safeDonors.length <= 1) return;

    const timer = window.setInterval(() => {
      setIsTransitionEnabled(true);
      setCurrentIndex((prev) => prev + 1);
    }, AUTO_INTERVAL);

    return () => window.clearInterval(timer);
  }, [isPlaying, safeDonors.length]);

  const handlePrevious = () => {
    if (safeDonors.length <= 1) return;
    setIsTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (safeDonors.length <= 1) return;
    setIsTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (!safeDonors.length) return;

    if (currentIndex >= safeDonors.length * 2) {
      setIsTransitionEnabled(false);
      setCurrentIndex(safeDonors.length);
      return;
    }

    if (currentIndex < safeDonors.length) {
      setIsTransitionEnabled(false);
      setCurrentIndex(safeDonors.length * 2 - 1);
    }
  };

  useEffect(() => {
    if (!isTransitionEnabled) {
      const raf = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });

      return () => window.cancelAnimationFrame(raf);
    }
  }, [isTransitionEnabled]);

  return (
    <>
      <div className="home-board-head">
        <h2 className="home-board-title">이달의 기부자</h2>
        <div className="home-board-actions">
          <button type="button" aria-label="이전" onClick={handlePrevious}>
            ‹
          </button>
          <button
            type="button"
            aria-label={isPlaying ? "일시정지" : "재생"}
            onClick={() => setIsPlaying((prev) => !prev)}
            className="play-toggle"
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <button type="button" aria-label="다음" onClick={handleNext}>
            ›
          </button>
          <a href="/donor-recognition" className="home-board-more" aria-label="기부자 더보기">
            +
          </a>
        </div>
      </div>

      <div
        className="monthly-donor-viewport"
        style={{ height: `${VISIBLE_COUNT * ROW_HEIGHT}px` }}
      >
        <ul
          className="monthly-donor-list is-animated"
          style={{
            transform: `translateY(-${currentIndex * ROW_HEIGHT}px)`,
            transition: isTransitionEnabled ? "transform 0.45s ease" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopDonors.map((donor, index) => {
            const donorName = donor.name ?? "기부자";
            const donorAmount = Number(donor.amount || 0).toLocaleString("ko-KR");

            return (
              <li key={`${donorName}-${index}`}>
                <span className="name">{donorName}</span>
                <span className="amount">{donorAmount}원</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
