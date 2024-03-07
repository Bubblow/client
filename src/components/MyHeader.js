import { useNavigate } from "react-router-dom";
import logo from "..//assets/Header/Bubblow.png";
import logo_bubble from "..//assets/Header/Group.png";

const MyHeader = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin") === "true";

  const clickLogo = () => {
    navigate("/", { replace: true });
  };
  const clickSignup = () => {
    navigate("/signup", { replace: true });
  };
  const clickLogin = () => {
    navigate("/login", { replace: true });
  };
  const clickLogout = () => {
    navigate("/logout", { replace: true });
  };
  const clickAnswer = () => {
    navigate("/answer", { replace: true });
  };
  const clickMyPage = () => {
    navigate("mypage", { replace: true });
  };
  const clickEducation = () => {
    navigate("/education", { replace: true });
  };
  const clickModel = () => {
    navigate("/model", { replace: true });
  };
  const clickQuestion = () => {
    navigate("/question", { replace: true });
  };

  function handleClick(clickEvent) {
    const clickedItem = clickEvent.target;

    // 현재 선택된 항목이 있는 경우에만 클래스를 적용
    if (!clickedItem.classList.contains("clicked")) {
      // 모든 항목에서 'clicked' 클래스 제거
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("clicked");
      });
      // 현재 선택된 항목에 'clicked' 클래스 추가
      clickedItem.classList.add("clicked");
    } else {
      // 이미 선택된 항목을 다시 클릭한 경우, 'clicked' 클래스 제거
      clickedItem.classList.remove("clicked");
    }
  }

  // 클릭 이벤트 리스너를 document에 추가
  document.addEventListener("click", function (event) {
    const header = document.querySelector(".header");
    const clickedElement = event.target;

    // 클릭된 요소가 헤더 내부의 요소인지 확인
    const isClickedInsideHeader = header.contains(clickedElement);

    // 헤더 내부의 요소인 경우에만 작동
    if (isClickedInsideHeader) {
      // 클릭된 요소가 nav-item 클래스를 가지지 않은 경우에만 선택된 네비게이션 항목의 'clicked' 클래스 제거
      if (!clickedElement.classList.contains("nav-item")) {
        const clickedNavItem = document.querySelector(".nav-item.clicked");
        if (clickedNavItem) {
          clickedNavItem.classList.remove("clicked");
        }
      }
    }
  });

  return (
    <header>
      <div className="header">
        <div className="nav_logo">
          <img
            alt="logo_bubble"
            className="logo_bubble"
            src={logo_bubble}
            onClick={clickLogo}
          ></img>
          <img alt="logo" className="logo" src={logo} onClick={clickLogo}></img>
        </div>
        <div className="nav_text">
          <div className="nav">
            <text
              onClick={(clickEvent) => {
                clickLogo();
                handleClick(clickEvent);
              }}
              class="nav-item"
            >
              메인페이지
            </text>
            <text
              onClick={(clickEvent) => {
                clickEducation();
                handleClick(clickEvent);
              }}
              class="nav-item"
            >
              교육페이지
            </text>
            <text
              onClick={(clickEvent) => {
                clickModel();
                handleClick(clickEvent);
              }}
              class="nav-item"
            >
              모델페이지
            </text>
            <text
              onClick={(clickEvent) => {
                clickQuestion();
                handleClick(clickEvent);
              }}
              class="nav-item"
            >
              분석페이지
            </text>
          </div>
          <div className="nav_login">
            {!isLogin ? (
              <>
                <text onClick={clickSignup}>가입하기</text>
                <text className="login_text" onClick={clickLogin}>
                  로그인
                </text>
              </>
            ) : (
              <>
                <text onClick={clickMyPage}>김버블</text>
                <text className="logout_text" onClick={clickLogout}>
                  로그아웃
                </text>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
