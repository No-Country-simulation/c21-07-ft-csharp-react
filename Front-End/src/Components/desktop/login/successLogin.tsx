import styled from "styled-components";
import Icon from "../../icons";

export const SuccessLogin = () => {
  return (
    <StyledWrapper>
      <div className="cardcontainer">
        <div className="card">
          <Icon name="wave" />
          <div className="icon-container">
            <Icon name="check" size={17} color="#269b24" />
          </div>
          <div className="message-text-container">
            <p className="message-text">Inicio de sesión exitoso</p>
          </div>
        </div>
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cardcontainer {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card {
    width: 430px; /* 330px * 1.3 */
    height: 104px; /* 80px * 1.3 */
    border-radius: 10px; /* ligeramente más grande para mantener la proporción */
    box-sizing: border-box;
    padding: 13px 20px; /* 10px * 1.3 y 15px * 1.3 */
    background-color: #ffffff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 10px 30px; /* sombras ajustadas */
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px; /* 15px * 1.3 */
  }

  .wave {
    position: absolute;
    transform: rotate(90deg);
    left: -40px; /* ajustado proporcionalmente */
    top: 42px; /* ajustado proporcionalmente */
    width: 104px; /* 80px * 1.3 */
    fill: #04e4003a;
  }

  .icon-container {
    width: 45px; /* 35px * 1.3 */
    height: 45px; /* 35px * 1.3 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #04e40048;
    border-radius: 50%;
    margin-left: 10px; /* 8px * 1.3 */
  }

  .icon {
    width: 22px; /* 17px * 1.3 */
    height: 22px; /* 17px * 1.3 */
    color: #269b24;
  }

  .message-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-grow: 1;
  }

  .message-text,
  .sub-text {
    margin: 0;
    cursor: default;
  }

  .message-text {
    color: #269b24;
    font-size: 22px; /* 17px * 1.3 */
    font-weight: 700;
  }

  .sub-text {
    font-size: 18px; /* 14px * 1.3 */
    color: #555;
  }

  .cross-icon {
    width: 24px; /* 18px * 1.3 */
    height: 24px; /* 18px * 1.3 */
    color: #555;
    cursor: pointer;
  }
  .newtons-cradle {
    --uib-size: 50px;
    --uib-speed: 1.2s;
    --uib-color: #474554;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--uib-size);
    height: var(--uib-size);
  }

  .newtons-cradle__dot {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 25%;
    transform-origin: center top;
  }

  .newtons-cradle__dot::after {
    content: "";
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
  }

  .newtons-cradle__dot:first-child {
    animation: swing var(--uib-speed) linear infinite;
  }

  .newtons-cradle__dot:last-child {
    animation: swing2 var(--uib-speed) linear infinite;
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }

    25% {
      transform: rotate(70deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }
  }

  @keyframes swing2 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }

    50% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }

    75% {
      transform: rotate(-70deg);
      animation-timing-function: ease-in;
    }
  }
`;
