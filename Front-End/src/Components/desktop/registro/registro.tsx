import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../icons";

export const Registro = () => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <div className="containerLogin">
        <div className="card">
          <div className="card2">
            <form className="form">
              <p id="heading">Registro</p>
              <div className="field">
                <Icon name="userRegister" size={18} />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Nombre Completo"
                  autoComplete="off"
                />
              </div>
              <div className="field">
                <Icon name="email" size={18} />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="field">
                <Icon name="password" size={18} />
                <input className="input-field" placeholder="Password" />
              </div>
              <div className="field">
                <Icon name="password" size={18} />
                <input className="input-field" placeholder="Repeat password" />
              </div>
              <div className="btn">
                <button className="button1">Registrarse</button>
                <button className="button2" onClick={() => navigate("/")}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .containerLogin {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212121;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 25px;
    transition: 0.4s ease-in-out;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    transition: all 0.3s;
  }

  .card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }

  #heading {
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 1.2em;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: white;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2.5em;
    gap: 12px;
  }

  .btn {
    margin-bottom: 30px;
  }

  .button1 {
    padding: 0.5em;
    border-radius: 5px;

    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button1:hover {
    background-color: black;
    color: white;
  }

  .button2 {
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button2:hover {
    background-color: black;
    color: white;
  }
`;
