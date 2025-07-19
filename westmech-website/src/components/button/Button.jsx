"use client";

import React from 'react';
import MUIButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Button = ({
    type='primary',
    htmlType = 'button',
    endIcon,
    children,
    sx = {textTransform: 'none'},
    ...props}) => {
        const theme = useTheme();
        const { primary, secondary, text } = theme.palette;
    switch (type) {
        case 'primary':
            return (
                <MUIButton
                    variant='contained'
                    endIcon={endIcon}
                    disableRipple
                    sx={{
                        bgcolor: primary.main,
                        color: 'white',
                        fontSize: '1.1rem',
                        '&:hover': {
                            bgcolor: primary.dark,
                            transform: "translateY(-1px)",
                            boxShadow: "0 4px 12px rgba(1, 127, 224, 0.3)",
                        },
                        transition: "all 0.2s ease",
                        ...sx,
                    }}
                    {...props}
                >
                    {children}
                </MUIButton>
            );
        case 'secondary':
            return (
                <MUIButton
                    variant='outlined'
                    endIcon={endIcon}
                    disableRipple
                    sx={{
                        border: '1px solid ' + secondary.light,
                        color: secondary.main,
                        fontSize: '1.1rem',
                        '&:hover': {
                            bgcolor: secondary.light,
                            transform: "translateY(-1px)",
                            boxShadow: "0 4px 12px " + secondary.light,
                        },
                        transition: "all 0.2s ease",
                        ...sx,
                    }}
                    {...props}
                >
                    {children}
                </MUIButton>
            );
        case 'text':
            return (
                <MUIButton
                    variant='text'
                    endIcon={endIcon}
                    disableRipple
                    sx={{
                        bgcolor: 'transparent',
                        color: text.primary,
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        px: 0,
                        py: .5,
                        '&:hover': {
                            color: primary.main,
                            transform: "translateY(-1px)",
                            textShadow: "0 4px 12px rgba(1, 127, 224, 0.3)",
                        },
                        transition: "all 0.2s ease",
                        ...sx,
                    }}
                    {...props}
                >
                    {children}
                </MUIButton>
            );
    }
};

export default Button;