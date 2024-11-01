import styled from "styled-components";
import Icon from "../../icons";

export const ErrorLogin = () => {
  return (
    <StyledWrapper>
      <div className="cardcontainer">
        <div className="card">
          <div className="icon-container">
            <Icon name="cruzMenu" size={17} />
          </div>
          <div className="message-text-container">
            <p className="message-text">correo o contraseña incorrectos</p>
          </div>
        </div>
        <div className="loader" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cardcontainer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .card {
    width: 330px;
    height: 80px;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px 15px;
    background-color: whitesmoke;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
  }
  .wave {
    position: absolute;
    transform: rotate(90deg);
    left: -31px;
    top: 32px;
    width: 80px;
    fill: #04e4003a;
  }
  .icon-container {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #04e40048;
    border-radius: 50%;
    margin-left: 8px;
  }

  .icon {
    width: 17px;
    height: 17px;
    color: red;
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
    color: red;
    font-size: 17px;
    font-weight: 700;
  }
  .sub-text {
    font-size: 14px;
    color: #555;
  }
  .cross-icon {
    width: 18px;
    height: 18px;
    color: #555;
    cursor: pointer;
  }
  .loader {
    display: block;
    --height-of-loader: 4px;
    --loader-color: #0071e2;
    width: 90%;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .loader::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 4s linear;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
`;
