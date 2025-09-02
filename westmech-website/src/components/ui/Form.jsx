"use client";

import React, { useState } from 'react';
import { 
    Box, 
    TextField, 
    FormControl, 
    FormLabel, 
    FormHelperText,
    Paper
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Button from '../button/Button';
import Status from './Status';

const Form = ({
    title,
    onSubmit,
    children,
    submitText = 'Submit',
    resetText = 'Reset',
    showReset = false,
    sx = {},
    ...props
}) => {
    const theme = useTheme();
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        
        try {
            if (onSubmit) {
                await onSubmit(e);
                setStatus({ type: 'success', message: 'Form submitted successfully!' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: error.message || 'An error occurred while submitting the form.' });
        }
    };

    const handleReset = (e) => {
        e.preventDefault();
        e.target.form.reset();
        setStatus(null);
    };

    return (
        <Paper
            elevation={2}
            sx={{
                p: 3,
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.paper,
                ...sx,
            }}
        >
            <Box component="form" onSubmit={handleSubmit} {...props}>
                {title && (
                    <Box mb={2}>
                        <FormLabel 
                            component="legend"
                            sx={{
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                mb: 1,
                            }}
                        >
                            {title}
                        </FormLabel>
                    </Box>
                )}

                {status && (
                    <Box mb={2}>
                        <Status
                            type={status.type}
                            message={status.message}
                            onClose={() => setStatus(null)}
                        />
                    </Box>
                )}

                <Box sx={{ '& > *': { mb: 2 } }}>
                    {children}
                </Box>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
                    {showReset && (
                        <Button
                            type="secondary"
                            htmlType="button"
                            onClick={handleReset}
                        >
                            {resetText}
                        </Button>
                    )}
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        {submitText}
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

const FormField = ({
    label,
    name,
    type = 'text',
    required = false,
    helperText,
    error,
    ...props
}) => {
    return (
        <FormControl fullWidth error={!!error}>
            <TextField
                name={name}
                label={label}
                type={type}
                required={required}
                error={!!error}
                helperText={error || helperText}
                variant="outlined"
                fullWidth
                {...props}
            />
        </FormControl>
    );
};

Form.Field = FormField;

export default Form;