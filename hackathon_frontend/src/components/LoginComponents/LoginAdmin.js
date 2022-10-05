import React, { useState } from "react";
import "./Login1.scss";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
    const [signup, setSignup] = useState(true);
    const toggleSignup = () => {
        setSignup(!signup);
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
    const loginData = async (e) => {
        //e.preventDefault();
        const { email, password } = login;
        const res = await fetch("/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string. Convert a javascript object into string with JSON.stringify()
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
          alert("Invalid Login credentials");
        } else {
          alert("Login successful");
          <Navigate to="/admin" />;
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
                        <Link to="/admin">
                            <button className="submit" type="button" onClick={loginData}>
                                Sign In
                            </button>
                        </Link>
                        {/* <p className="forgot-pass">Forgot Password ?</p> */}
                    </div>

                    <div className="sub-cont">
                        <div className="img">
                            <div className="img-text m-up">
                                {/* <h2>Enter your details</h2>
                                <p>Sign up and discover great amount of new opportunities!</p> */}
                            </div>
                            {/* <div className="img-text m-in">
                                <h2>One of us?</h2>
                                <p>
                                    If you already has an account, just sign in. We've missed you!
                                </p>
                            </div> */}
                            {/* <div className="img-btn" onClick={toggleSignup}>
                                <span className="m-up">Sign Up</span>
                                <span className="m-in">Sign In</span>
                            </div> */}
                        </div>
                        {/* <div className="form sign-up">
                            <h2>Sign Up</h2>
                            <label>
                                <span>Name</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Email</span>
                                <input type="email" />
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password" />
                            </label>
                            <label>
                <span>Confirm Password</span>
                <input type="password" />
              </label>
                            <label>
                                <span>Id Proof </span>
                                <input type="number" />
                            </label>
                            <label>
                                <span>Mobile number</span>
                                <input type="number" />
                            </label>
                            <Link to="/organize">
                                {" "}
                                <button type="button" className="submit">
                                    Sign Up Now
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}