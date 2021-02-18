import React, { useState, useEffect } from "react";
import "./style.css";
import { Data } from "../data/index";
import { Review } from "../review/index";

export const App = () => {
  const entries = [...Data];
  const [currentReview, setCurrentReview] = useState(0);
  const updateReview = () => {
    if (currentReview === entries.length - 1) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  };
  useEffect(() => {
    setTimeout(updateReview, 3000);
    return () => {
      clearTimeout(updateReview, 3000);
    };
  });
  const previous = () => {
    if (currentReview === 0) {
      setCurrentReview(entries.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  };
  const next = () => {
    if (currentReview === entries.length - 1) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  };
  return (
    <main className="main">
      <button className="btn left" onClick={previous}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <Review props={entries[currentReview]} />
      <button className="btn right" onClick={next}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </main>
  );
};