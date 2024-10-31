import styled from "styled-components";
import Icon from "../../icons";
import BtnCloseSession from "../navbar/btnCloseSession";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <div className="input">
        <button className="value" onClick={() => navigate("/settings")}>
          <Icon name="user" size={15} />
          Perfil
        </button>
        <button className="value" onClick={() => navigate("/notificaciones")}>
          <Icon name="notification" size={15} />
          Notificaciones
        </button>
        <BtnCloseSession />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: #306bb8;
    justify-content: center;
    border-radius: 5px;
  }

  .value {
    background-color: transparent;
    border: none;
    padding: 10px;
    color: white;
    display: flex;
    position: relative;
    gap: 5px;
    cursor: pointer;
    border-radius: 4px;
  }

  .value:not(:active):hover,
  .value:focus {
    background-color: #21262c;
  }

  .value:focus,
  .value:active {
    background-color: #1a1f24;
    outline: none;
  }

  .value::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -10px;
    width: 5px;
    height: 80%;
    background-color: #2f81f7;
    border-radius: 5px;
    opacity: 0;
  }

  .value:focus::before,
  .value:active::before {
    opacity: 1;
  }

  .btn_closeSession {
    border-radius: 9999px;
    background-color: transparent;
    border: 1px solid;
    margin: 10px;
    color: white;
    padding: 10px;
  }
  .btn_closeSession:hover {
    background-color: red;
    cursor: pointer;
  }
`;
