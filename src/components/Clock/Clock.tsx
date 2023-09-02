import { useEffect, useState } from "react";
import "./index.css";

export const Clock = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  const [millis, setMillis] = useState("000");
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");


  const pad = (val: number): string => (val < 10 ? `0${val}` : `${val}`);
  const padMillis = (val: number): string => (val < 10 ? `00${val}` : val < 100 ? `0${val}` : `${val}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(pad(new Date().getSeconds()));
      setMinutes(pad(new Date().getMinutes()));
      setHours(pad(new Date().getHours()));
      document.title = `${pad(new Date().getHours())}:${pad(
        new Date().getMinutes()
      )}:${pad(new Date().getSeconds())}`;
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setMillis(padMillis(new Date().getMilliseconds()))
    }, 1);
    return () => clearInterval(interval);
  }, []);


  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff0F",
        position: "absolute",
      }}
    >
      {/* si largeur > hauteur */}
      <div
        style={{
          position: "relative",
          top: width < height ? "calc(52.6%)" : `calc(52.6% + ${(width - height) * 0.02}px )`,
          transform: ` translate(0%,-50%) scale(${
            Math.max(height, width) / 3000
          }) `,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // backgroundColor: "#ffff001F",
        }}
      >
        <div
          className="time"
          id="time"
          data-hours={hours}
          data-minutes={minutes}
          data-seconds={seconds}
        >

          <div className="digit">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="digit">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="digit">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>

            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="digit">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="digit">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="digit">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        <div className="millis" >
        {millis}
        </div>
        </div>
      </div>
    </div>
  );
};
