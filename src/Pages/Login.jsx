import React, { createContext, useState } from "react";
import { FormGroup, Form } from "reactstrap";
import TextField from "@mui/material/TextField";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";

function Login({hanldeSubmit}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

 const loginData= createContext()
 const [email,SetEmail] =useState()
 const [password,setPassword] =useState()


  return (
    <div className="login-form d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 left-login  d-none d-md-flex justify-content-center align-items-center ">
            <div>
              <img
                src="/images/Group 170.png"
                alt=""
                className="img-fluid"
                style={{ height: "31rem" }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-4 d-flex justify-content-center align-items-center py-5">
            <Form className="px-md-4 w-100">
              <h1 className="heading text-center mb-4" style={{letterSpacing:"2px"}}>Welcome</h1>

              <FormGroup>
                <TextField
                  label="Email Id"
                  variant="standard"
                  color="warning"
                  className="w-100" value={email} onChange={((e)=>SetEmail(e.target.value))}
                />
              </FormGroup>
              <FormGroup>
                <FormControl sx={{ width: "100%" }} color="warning" variant="filled">
                  <InputLabel
                    htmlFor="filled-adornment-password"
                    style={{ marginLeft: "-10px" }}
                    className="form-input" value={password} onChange={((e)=>setPassword(e.target.value))}
                  >
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    className="password-input"
                  />
                </FormControl>
              </FormGroup>
              <div className="forget-password text-end mb-3">
                <a href="" style={{ color: "#C79832" }}>
                  Forget Password?
                </a>
              </div>
              <div className="text-center">
                <button
                  className="btn fs-5 p-3 rounded-5 text-light border-0"
                  style={{
                    backgroundColor: "#C79832",
                    boxShadow: "0px 2px 4px 1px gray",
                    width: "21rem",
                  }}
                  onClick={hanldeSubmit}
                >
                  Sign In
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
