"use client";

import React from "react";
import PropTypes from "prop-types"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

  
const PasswordInput = ({mb, width, value, onChange}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
  return (
        <FormControl sx={{ width: width, mb: mb}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '22px' }}>Password</InputLabel>
        <OutlinedInput sx={{height:60}}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label={
                showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
        }
        label="Password"
        />
    </FormControl>
    );
};

PasswordInput.propTypes = {
    mb: PropTypes.number,
    width: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default PasswordInput;