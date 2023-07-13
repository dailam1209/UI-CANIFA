import React, { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { Container, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function TimeCountDown(listProduct) {
  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();
  // let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  let cTime = "24:00:00";
  let dateTime = cDate + " " + cTime;
  const styleDot = {
    fontWeight: "700",
    height: "36px",
    lineHeight: "36px",
    fontSize: "24px",
    paddingTop: "0",
    paddingLeft: "8px",
    paddingRight: "8px",
    marginRight: "4px",
    color: "#c8c7cc",
  };

  const styleNumberSale = {
    fontWeight: "700",
    fontSize: "20px",
    background: "#63b1bc",
    height: "36px",
    color: "white",
    paddingTop: "0",
    paddingLeft: "8px",
    paddingRight: "8px",
    marginRight: "4px",
    borderRadius: "6px",
    lineHeight: "36px",
  };

  const [expiryTime, setExpiryTime] = useState(dateTime);
  const [countdownTime, setCountdownTime] = useState({
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <>
    <div className="mobile-sale-onday"
    style={{
      justifyContent: "space-between",
      display: "contents"
    }}>
      <DialogTitle
        className="mobile-sale-onday"
        style={{
          height: "36px",
          padding: "0",
          lineHeight: "36px",
          fontWeight: "700",
          color: "#17242b",
          display: "flex"
        }}
      >
        Ưu đãi trong ngày
      </DialogTitle>
      {expiryTime !== false ? (
        <>
          <Container
            style={{
              display: "flex",
              marginLeft: "20px",
              height: "36px",
            }}
          >
            <DialogTitle style={styleNumberSale}>
              {countdownTime.countdownHours > 9
                ? countdownTime.countdownHours
                : "0" + countdownTime.countdownHours}{" "}
            </DialogTitle>
            <DialogTitle style={styleDot}>:</DialogTitle>
            <DialogTitle style={styleNumberSale}>
              {countdownTime.countdownMinutes > 9
                ? countdownTime.countdownMinutes
                : "0" + countdownTime.countdownMinutes}{" "}
            </DialogTitle>
            <DialogTitle style={styleDot}>:</DialogTitle>
            <DialogTitle style={styleNumberSale}>
              {countdownTime.countdownSeconds > 9
                ? countdownTime.countdownSeconds
                : "0" + countdownTime.countdownSeconds}{" "}
            </DialogTitle>
          </Container>
        </>
      ) : (
        <p>Deal has been Expired</p>
      )}
      <DialogTitle
      className="mobile-sale-onday"
        style={{ padding: "0", paddingTop: "0", paddingBottom: "0" , marginLeft: "auto"}}
      >
        <Link
          style={{
            fontWeight: "550",
            height: "36px",
            lineHeight: "36px",
            width: "100%",
            underline: "hover",
            cursor: "pointer",
            paddingTop: "0",
            paddingBottom: "0",
          }}
        >
          Xem tất cả
          <FontAwesomeIcon
            style={{ fontSize: "20", transform: "translateY(0%)" }}
            icon={faChevronRight}
          />
        </Link>
      </DialogTitle>
    </div>
    </>
  );
}

export default TimeCountDown;
