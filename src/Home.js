import React from "react";
import { ReactCarousel } from "./components/ReactCarousel";
import "./App.css";
import { StratCard } from "./components/StratCard";
import { TeleCard } from "./components/TeleCard";
import { JazzCard } from "./components/JazzCard";
import FenderAmp from "./assets/FenderAmp.jpeg";
import Gilmour from "./assets/Gilmour.jpg";
import JimiHendrix from "./assets/JimiHendrix.jpg";

const displayType = 0;

export const Home = () => (
  <div id="paragraph">
    <p id="mainheader">
      Fender are giants of the music industry. Whether it be their iconic
      guitars like the Strat & Tele, basses like the Precision & Jazz bass or
      incredible amplifiers. Fender have pioneered and created a lot of the
      guitar world that we know and love today.
    </p>
    {displayType === 1 ? (
      <div id="guitarDiv">
        <StratCard></StratCard>
        <TeleCard></TeleCard>
        <JazzCard></JazzCard>
      </div>
    ) : displayType === 2 ? (
      <div id="guitarDiv">
        <ReactCarousel></ReactCarousel>
      </div>
    ) : (
      <div>
        <div className="sideImageHolder">
          <div className="sideImageCell">
            <img
              src={FenderAmp}
              alt="StratoCaster"
              className="sideImageImage"
            />
          </div>
          <div className="sideImageCell">
            The leading designer from every era of guitar music. Always moving
            forward and pushing the limits for sound and design.
          </div>
        </div>
        <div className="sideImageHolder">
          <div className="sideImageCell">
            <img
              src={JimiHendrix}
              alt="TeleCaster"
              className="sideImageImage"
            />
          </div>
          <div className="sideImageCell">
            From the first electric basses to the modern player designs, Fender
            is laying the foundation for musical innovation and evolution
          </div>
          
        </div>
        <div className="sideImageHolder">
          <div className="sideImageCell">
            <img src={Gilmour} alt="JazzMaster" className="sideImageImage" />
          </div>
          <div className="sideImageCell">
            The weapon of choice for many of the worlds prime guitarists from
            every era of music.
          </div>
        </div>
      </div>
    )}
  </div>
);
