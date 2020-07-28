import React from "react";
import { ReactCarousel } from "./components/ReactCarousel";
import "./App.css";
export const Home = () => (
  <div id="paragraph">
    <p id="mainheader">
      Fender are giants of the music industry. Whether it be their iconic
      guitars like the Strat & Tele, basses like the Precision & Jazz bass or
      incredible amplifiers. Fender have pioneered and created a lot of the
      guitar world that we know and love today.
    </p>

    <ReactCarousel></ReactCarousel>
  </div>
);
