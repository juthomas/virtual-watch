import { useEffect, useState } from "react";
import "./index.css";

export const Clock = () => {
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");

  const pad = (val: number): string => (val < 10 ? `0${val}` : `${val}`);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      setSeconds(pad(new Date().getSeconds()));
      setMinutes(pad(new Date().getMinutes()));
      setHours(pad(new Date().getHours()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff0F",
        position: "absolute"
      }}
    >
      <div style={{position:'relative',
        top: '52.5%',
        transform: 'translate(0%,-50%)  scale(0.4)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#ffff001F",
    
    }}>
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
        </div>
      </div>
    </div>
  );
};
