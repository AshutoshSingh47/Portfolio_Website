import "../../assets/styles/toast_notification/Toast.css";
import { useEffect } from "react";

function Toast({ isDark, isProgress, setisProgress }) {
  function manageProgress() {
    setisProgress("");
  }

  useEffect(() => {
    if (isProgress === "success" || isProgress == "failure") {
      const timer = setTimeout(() => {
        setisProgress("");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isProgress, setisProgress]);

  return (
    <>
      <div
        className={`toast-box ${isDark ? "dark" : ""} ${
          isProgress === "success" ? "active" : ""
        }  success-box`}
      >
        <div className="toast-content">
          <i className="bi bi-check-lg check"></i>
          <div className="message">
            <span className="text text1">Success</span>
            <span className="text text2">Your message has been sent</span>
          </div>
          <i className="bi bi-x close" onClick={() => manageProgress()}></i>
          <div
            className={`progress-box ${
              isProgress === "success" ? "active" : ""
            } success`}
          ></div>
        </div>
      </div>
      <div
        className={`toast-box ${isDark ? "dark" : ""} ${
          isProgress === "failure" ? "active" : ""
        } failure-box`}
      >
        <div className="toast-content">
          <i class="bi bi-x cross"></i>
          <div className="message">
            <span className="text text1">Failure</span>
            <span className="text text2">Your message has not been sent</span>
          </div>
          <i className="bi bi-x close" onClick={() => manageProgress()}></i>
          <div
            className={`progress-box ${
              isProgress === "failure" ? "active" : ""
            } failure`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Toast;
