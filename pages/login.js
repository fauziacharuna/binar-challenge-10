import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebaseAuth from "../config/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { attemptAuth, updateCredentials } from "../redux/slices/authSlice";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Link from "next/link";
import Guest from "../middlewares/Guest";
import { Spinner } from "react-bootstrap";

function LoginPage() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onInputChange = (event) => {
    dispatch(
      updateCredentials({
        name: event.target.name,
        value: event.target.value,
      })
    );
  };

  const onLoginClick = async (event) => {
    event.preventDefault();
    dispatch(attemptAuth(auth.form));
  };

  const onValueChange = (event, label) => {
    const value = event.target.value;
    setCredentials((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };
  return (
    <Guest>
      <div style={{ backgroundColor: "#252525" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col" style={{ marginTop: 61, marginLeft: 72 }}>
              <Link href={"/"}>
                <h3
                  style={{
                    color: "#FBBC05",
                    fontWeight: "bold",
                    fontSize: "36px",
                  }}
                >
                  Gemology
                </h3>
              </Link>
              <div
                className="mx-auto"
                style={{
                  width: 420,
                  height: 579,
                  padding: 40,
                  paddingTop: 111,
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <p
                    style={{
                      fontSize: 24,
                      color: "#FFFFFF",
                      fontWeight: 400,
                    }}
                  >
                    Masuk
                  </p>
                  <Link href={"/register"}>
                    <p style={{ fontSize: 16, color: "#FBBC05" }}>Daftar</p>
                  </Link>
                </div>
                <div>
                  <form onSubmit={onLoginClick}>
                    <input
                      className="w-100"
                      style={{
                        height: " 48px",
                        margin: "16px 0px",
                        padding: "0px 16px 0px 14px",
                        borderRadius: "4px",
                        border: "1px solid #D0D0D0",
                        fontSize: "14px",
                        color: "#8A8A8A",
                      }}
                      type="email"
                      name="email"
                      placeholder="Masukkan Email"
                      onChange={onInputChange}
                    />
                    <input
                      className="w-100"
                      style={{
                        height: " 48px",
                        margin: "16px 0px",
                        padding: "0px 16px 0px 14px",
                        borderRadius: "4px",
                        border: "1px solid #D0D0D0",
                        fontSize: "14px",
                        color: "#8A8A8A",
                      }}
                      type="password"
                      placeholder="Kata Sandi"
                      name="password"
                      onChange={onInputChange}
                    />
                    {auth.isLoading ? (
                      <div className="d-flex justify-content-center">
                        <Spinner animation="border" variant="primary" />
                      </div>
                    ) : (
                      <button
                        className="w-100"
                        style={{
                          marginTop: "36px",
                          height: "46px",
                          background: "#F2C94C",
                          borderRadius: "8px",
                          color: "#FFFFFF",
                          fontSize: "16px",
                          border: "none",
                        }}
                        type="submit"
                      >
                        MASUK
                      </button>
                    )}
                  </form>
                </div>
                <p
                  style={{
                    marginTop: "33px",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  Lupa kata sandi?
                  <a style={{ fontWeight: "700", color: "#F2C94C" }} href="">
                    Klik disini
                  </a>
                </p>
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "34px" }}
                >
                  <hr
                    style={{
                      display: "block",
                      height: "1px",
                      border: "0",
                      borderTop: "1px solid #D0D0D0",
                      width: "100px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#D0D0D0",
                      marginTop: "3px",
                    }}
                  >
                    atau masuk dengan
                  </p>
                  <hr
                    style={{
                      display: "block",
                      height: "1px",
                      border: "0",
                      borderTop: "1px solid #D0D0D0",
                      width: "100px",
                    }}
                  />
                </div>
                <div style={{ marginTop: "36px" }}>
                  <button
                    className="w-100"
                    style={{
                      height: "46px",
                      background: "transparent",
                      borderRadius: "8px",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      border: "1px solid #D0D0D0",
                    }}
                  >
                    <div
                      // onClick={onGoogleLogin}
                      className="d-flex mx-auto justify-content-center"
                    >
                      <img
                        style={{ paddingRight: "16px" }}
                        src="../../../assets/img-google.svg"
                        alt=""
                      />
                      Google
                    </div>
                  </button>
                  <button
                    className="w-100"
                    style={{
                      marginTop: "16px",
                      height: "46px",
                      background: "transparent",
                      borderRadius: "8px",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      border: "1px solid #D0D0D0",
                    }}
                  >
                    <div className="d-flex mx-auto justify-content-center">
                      <img
                        style={{ paddingRight: "16px" }}
                        src="../../../assets/img-fb.svg"
                        alt=""
                      />
                      Facebook
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col" style={{ margin: "24px" }}>
              <img src="../../../assets/img-login.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Guest>
  );
}

export default LoginPage;
