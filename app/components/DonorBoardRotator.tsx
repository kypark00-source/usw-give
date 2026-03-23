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

function chunkArray<T>(array: T[], size: number) {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function DonorBoardRotator({ donors }: Props) {
  const pages = useMemo(() => chunkArray(donors, 12), [donors]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (pages.length <= 1) return;

    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % pages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [pages.length]);

  if (!pages.length) return null;

  return (
    <section className="donor-board-section">
      <div className="donor-board-wrap">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`donor-board-page ${index === pageIndex ? "is-active" : ""}`}
            aria-hidden={index !== pageIndex}
          >
            <div className="donor-board-grid">
              {page.map((donor, donorIndex) => (
                <div className="donor-board-item" key={`${donor.name}-${donorIndex}`}>
                  {donor.preview_text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}