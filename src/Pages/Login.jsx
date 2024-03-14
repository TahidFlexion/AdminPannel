import React from "react";
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

function Login({onLogin}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="login-form d-flex justify-content-center align-items-center">
      <div className="container-fluid ">
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-lg-6 col-md-6 col-sm-12 d-none d-sm-flex justify-content-center align-items-center left-login">
            <div>
              <img
                src="/images/Group 170.png"
                alt=""
                className="img-fluid"
                style={{ height: "31rem" }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 py-5" style={{ marginTop: "150px" }}>
            <div className="heading text-center mb-4">
              <h1>Welcome</h1>
            </div>
            <Form className="px-md-4">
              <FormGroup >
                <TextField
                  label="Email Id"
                  variant="standard"
                  color="warning" className="w-100"
                />
              </FormGroup>
              <FormGroup > 
                <FormControl sx={{ width: "100%" }} color="warning" variant="filled">
                  <InputLabel
                    htmlFor="filled-adornment-password"
                    style={{ marginLeft: "-10px" }}
                    className="form-input"
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
                    }className="password-input"
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
                  }} onClick={onLogin}
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
