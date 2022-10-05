import React, { useState } from "react";
import "./Login1.scss";
import { Navigate, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    idProof: "",
    phone: 0,
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [login, setLogin] = useState({
    email: "",
    password: "",

  });
  const handleInput1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const [signup, setSignup] = useState(true);
  const toggleSignup = () => {
    setSignup(!signup);
  };
  const postData = async (e) => {
    //e.preventDefault();
    const { name, email, password, idProof, phone } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        idProof,
        phone,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      alert("Invalid registration");
    }
    else {
      alert("Registration successful");
      navigate('/organize')
    }
  };
  
  const loginData = async (e) => {
    //e.preventDefault();
    const { email, password } = login;
    console.log("Login");
    console.log(login)
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.error) {
        // e.preventDefault();
      alert("Invalid Login credentials");
      
    } else {
        navigate('/organize');
    //   alert("Login successful");
      
    }
  };

  return (
    <>
      <div id="login-page">
        <div className={signup ? "cont" : "cont s-signup"}>
          <div className="form sign-in">
            <h2>Sign In</h2>
            <label>
              <span>Email</span>
              <input
                type="text"
                name="email"
                onChange={handleInput1}
              // placeholder="Enter your username"
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                onChange={handleInput1}
              // placeholder="Enter your password"
              />
            </label>

            <button className="submit" type="button" onClick={loginData}>
              Sign In
            </button>

            {/* <p className="forgot-pass">Forgot Password ?</p> */}
          </div>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-up">
                <h2>New here?</h2>
                <p>Sign up and discover great amount of new opportunities!</p>
              </div>
              <div className="img-text m-in">
                <h2>One of us?</h2>
                <p>
                  If you already has an account, just sign in. We've missed you!
                </p>
              </div>
              <div className="img-btn" onClick={toggleSignup}>
                <span className="m-up">Sign Up</span>
                <span className="m-in">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
              <h2>Sign Up</h2>
              <label>
                <span>Name</span>
                <input type="text" name="name" onChange={handleInput} />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" onChange={handleInput} />
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="password" onChange={handleInput} />
              </label>
              {/* <label>
                <span>Confirm Password</span>
                <input type="password" />
              </label> */}
              <label>
                <span>Id Proof </span>
                <input type="number" name="idProof" onChange={handleInput} />
              </label>
              <label>
                <span>Mobile number</span>
                <input type="number" name="phone" onChange={handleInput} />
              </label>

              {" "}
              <button type="button" className="submit" onClick={postData}>
                Sign Up Now
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
