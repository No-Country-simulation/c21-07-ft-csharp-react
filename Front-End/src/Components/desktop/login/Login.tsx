import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../icons";
import { SuccessLogin } from "./successLogin";
import { ErrorLogin } from "./errorLogin";

export const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [isLoged, setIsLoged] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const email = "hugojavierdesideriomatinez@gmail.com";
  const password = "1234";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (email === userEmail && userPassword === password) {
      setIsLoged(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      setErrorMessage(!errorMessage);
      setTimeout(() => {
        setErrorMessage(false);
      }, 4000);
    }
  };

  {
    return isLoged ? (
      <SuccessLogin />
    ) : (
      <StyledWrapper>
        <div className="containerLogin">
          <div className="errorContainer">{errorMessage && <ErrorLogin />}</div>
          <div className="card">
            <div className="card2">
              <form className="form" onSubmit={handleSubmit}>
                <p id="heading">Login</p>
                <div className="field">
                  <Icon name="email" />
                  <input
                    className="input-field"
                    type="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="field">
                  <Icon name="password" />
                  <input
                    type="password"
                    className="input-field"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="btn">
                  <button className="button1" type="submit">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </button>
                  <button
                    className="button2"
                    onClick={() => navigate("/Registro")}
                  >
                    Sign Up
                  </button>
                </div>
                <button className="button3">Forgot Password</button>
              </form>
            </div>
          </div>
        </div>
      </StyledWrapper>
    );
  }
};

const StyledWrapper = styled.div`
  .containerLogin {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212121;
    justify-content: center;
  }

  .errorContainer {
    min-height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    flex-direction: row;
    margin-top: 2.5em;
  }

  .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button1:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  .button2 {
    padding: 0.5em;
    padding-left: 2.3em;
    padding-right: 2.3em;
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

  .button3 {
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button3:hover {
    background-color: red;
    color: white;
  }
`;
