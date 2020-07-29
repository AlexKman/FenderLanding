import React from "react";
import "./App.css";
import { StratCard } from "./components/StratCard";
import { TeleCard } from "./components/TeleCard";
import { JazzCard } from "./components/JazzCard";
import { JaguarCard } from "./components/JaguarCard";
import { MustangCard } from "./components/MustangCard";
import { LeadCard } from "./components/LeadCard";

export const Guitars = () => (
  <div id="paragraph">
    <p id="guitarsheader">Electric guitars</p>
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
