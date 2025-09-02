"use client";

import React from 'react';
import { Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';

const Status = ({
    type = 'info',
    message,
    children,
    onClose,
    sx = {},
    ...props
}) => {
    const theme = useTheme();

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircleIcon />;
            case 'error':
                return <ErrorIcon />;
            case 'warning':
                return <WarningIcon />;
            case 'info':
            default:
                return <InfoIcon />;
        }
    };

    const getSeverity = () => {
        switch (type) {
            case 'success':
                return 'success';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'info':
            default:
                return 'info';
        }
    };

    return (
        <Alert
            severity={getSeverity()}
            icon={getIcon()}
            onClose={onClose}
            sx={{
                borderRadius: theme.shape.borderRadius,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
                ...sx,
            }}
            {...props}
        >
            {children || message}
        </Alert>
    );
};

export default Status;