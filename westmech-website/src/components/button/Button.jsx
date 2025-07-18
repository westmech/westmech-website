import React from 'react';
import MUIButton from '@mui/material/Button';

const Button = ({
    type='primary',
    htmlType = 'button',
    onClick,
    endIcon,
    children,
    sx = {textTransform: 'none'},
    ...props}) => {
    switch (type) {
        case 'primary':
            return (
                <MUIButton
                    variant='contained'
                    endIcon={endIcon}
                    onClick={onClick}
                    disableElevation
                    disableRipple
                    sx={{
                        bgcolor: '#017fe0',
                        color: 'white',
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        borderRadius: '30px',
                        px: 3,
                        py: .25,
                        '&:hover': {
                            backgroundColor: 'rgba(1, 127, 224, .85)',
                        },
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
                    disableElevation
                    disableRipple
                    sx={{
                        border: '1px solid rgba(0,0,0,.5)',
                        color: 'rgba(0, 0, 0, .5)',
                        borderRadius: '30px',
                        textTransform: 'none',
                        fontSize: '1.3rem',
                        px: 3,
                        py: .25,
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,.2)',
                        },
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
                    disableElevation
                    disableRipple
                    sx={{
                        bgcolor: 'transparent',
                        color: '#000000',
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        px: 0,
                        py: .5,
                        minWidth: 0,
                        '&:hover': {
                            color: '#017fe0',
                        },
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