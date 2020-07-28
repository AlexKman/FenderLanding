import React from "react";
import "./App.css";
import { StratCard } from "./components/StratCard";
import { TeleCard } from "./components/TeleCard";
import { JazzCard } from "./components/JazzCard";
import { JaguarCard } from "./components/JaguarCard";
import { MustangCard } from "./components/MustangCard";
import { LeadCard } from "./components/LeadCard";

export const Home = () => (
  <div id="paragraph">
    <p id="mainheader">
      Fender are giants of the music industry. Whether it be their iconic
      guitars like the Strat & Tele, basses like the Precision & Jazz bass or
      incredible amplifiers. Fender have pioneered and created a lot of the
      guitar world that we know and love today.
    </p>
    <div id="guitarDiv">
      <StratCard></StratCard>
      <TeleCard></TeleCard>
      <JazzCard></JazzCard>
      <JaguarCard></JaguarCard>
      <MustangCard></MustangCard>
      <LeadCard></LeadCard>
    </div>
  </div>
);
