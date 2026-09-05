"use client";

import { useState } from "react";

type WeatherMode = "clear" | "rain" | "afterglow";

type WeatherMoment = {
  label: string;
  title: string;
  detail: string;
  time: string;
};

const moments: Record<WeatherMode, WeatherMoment> = {
  clear: {
    label: "Clear sky",
    title: "Make room for the next idea.",
    detail: "A calm, open state for work that needs focus and a little horizon.",
    time: "08:40",
  },
  rain: {
    label: "Passing rain",
    title: "Good work can start quietly.",
    detail: "Small iterations, visible feedback, and patience with the details.",
    time: "16:12",
  },
  afterglow: {
    label: "Afterglow",
    title: "Keep the useful parts of the day.",
    detail: "A warm reset after shipping: reflect, refine, and leave a clear trail.",
    time: "18:36",
  },
};

function SunIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle cx="24" cy="24" r="8" /><path d="M24 4v7M24 37v7M4 24h7M37 24h7M9.8 9.8l5 5M33.2 33.2l5 5M38.2 9.8l-5 5M14.8 33.2l-5 5" /></svg>;
}

function RainIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M13 29h23a8 8 0 0 0 0-16 12 12 0 0 0-23 4 6 6 0 0 0 0 12Z" /><path d="m17 36-2 5M25 36l-2 5M33 36l-2 5" /></svg>;
}

function AfterglowIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M8 31h32M12 31a12 12 0 0 1 24 0M24 8v6M10.2 14.2l4.2 4.2M37.8 14.2l-4.2 4.2" /><path d="M8 38h32" /></svg>;
}

const icons = { clear: SunIcon, rain: RainIcon, afterglow: AfterglowIcon };

export function WeatherMoments() {
  const [mode, setMode] = useState<WeatherMode>("clear");
  const moment = moments[mode];
  const Icon = icons[mode];

  return (
    <section className={`weather-moments weather-${mode}`} aria-labelledby="weather-title">
      <div className="weather-copy">
        <h2 id="weather-title">Weather moments.</h2>
        <p>A quiet interaction inspired by changing skies: the same work can feel different when the atmosphere changes.</p>
        <div className="weather-controls" aria-label="Choose a weather moment">
          {(Object.keys(moments) as WeatherMode[]).map((weather) => {
            const WeatherIcon = icons[weather];
            return (
              <button className="weather-control" key={weather} type="button" aria-pressed={mode === weather} onClick={() => setMode(weather)}>
                <WeatherIcon />
                <span>{moments[weather].label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="weather-scene" aria-live="polite">
        <div className="weather-time" aria-label={`Time ${moment.time}`}><span>{moment.time}</span><span>Kiandas sky</span></div>
        <div className="weather-orbit" aria-hidden="true"><Icon /></div>
        <div className="weather-horizon" aria-hidden="true" />
        <div className="weather-message">
          <p className="weather-label">{moment.label}</p>
          <h3>{moment.title}</h3>
          <p>{moment.detail}</p>
        </div>
      </div>
    </section>
  );
}
