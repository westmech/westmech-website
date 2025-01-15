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


  
const Input = ({label, mb, width}) => {
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    return (
        <FormControl fullWidth sx={{ width: width, mb:mb }}>
        <InputLabel htmlFor="outlined-adornment-amount" sx={{ fontSize: '22px' }}>Email</InputLabel>
        <OutlinedInput sx={{height:60}}
        id="outlined-adornment-amount"
        label={label}
        />
    </FormControl>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    mb: PropTypes.number,
    width: PropTypes.string.isRequired,
  };

export default Input;