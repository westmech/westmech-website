"use client";

import React from 'react';
import { 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Box
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Dropdown = ({
  options = [],
  value = '',
  onChange,
  placeholder = 'Select an option',
  label,
  variant = 'outlined',
  fullWidth = false,
  disabled = false,
  error = false,
  helperText,
  sx = {},
  ...props
}) => {
  const theme = useTheme();
  const { primary, secondary, text } = theme.palette;

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  };

  return (
    <FormControl 
      variant={variant} 
      fullWidth={fullWidth} 
      disabled={disabled}
      error={error}
      sx={{ 
        minWidth: '120px',
        width: fullWidth ? '100%' : 'fit-content',
        ...sx 
      }}
    >
      {label && (
        <InputLabel 
          sx={{ 
            color: text.secondary,
            '&.Mui-focused': {
              color: primary.main,
            },
            '&.Mui-error': {
              color: theme.palette.error.main,
            }
          }}
        >
          {label}
        </InputLabel>
      )}
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty={!label}
        IconComponent={KeyboardArrowDown}
        sx={{
          borderRadius: '12px',
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.2s ease',
          '& .MuiSelect-select': {
            padding: '14px 18px',
            fontSize: '1rem',
            fontWeight: 400,
            minHeight: '20px',
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.08)',
            borderWidth: '1px',
            transition: 'all 0.2s ease',
          },
          '&:hover': {
            boxShadow: '0 4px 16px rgba(1, 127, 224, 0.12)',
            transform: 'translateY(-1px)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: primary.main,
            borderWidth: '1.5px',
          },
          '&.Mui-focused': {
            boxShadow: '0 6px 20px rgba(1, 127, 224, 0.15)',
            transform: 'translateY(-1px)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: primary.main,
            borderWidth: '2px',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
          },
          '& .MuiSelect-icon': {
            color: primary.main,
            fontSize: '1.5rem',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            right: '12px',
          },
          '&.Mui-focused .MuiSelect-icon': {
            transform: 'rotate(180deg)',
            color: primary.dark,
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: '12px',
              marginTop: '4px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
              overflow: 'hidden',
              '& .MuiList-root': {
                padding: '8px',
              },
              '& .MuiMenuItem-root': {
                padding: '12px 16px',
                fontSize: '1rem',
                borderRadius: '8px',
                margin: '2px 0',
                transition: 'all 0.15s ease',
                '&:hover': {
                  backgroundColor: `${primary.main}15`,
                  color: primary.main,
                  transform: 'translateX(2px)',
                },
                '&.Mui-selected': {
                  backgroundColor: `${primary.main}20`,
                  color: primary.main,
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: `${primary.main}30`,
                    transform: 'translateX(2px)',
                  },
                },
                '&:first-of-type': {
                  marginTop: '0',
                },
                '&:last-of-type': {
                  marginBottom: '0',
                },
              },
            },
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
        }}
        {...props}
      >
        {!label && (
          <MenuItem value="" disabled>
            <Box sx={{ color: text.secondary, fontStyle: 'italic' }}>
              {placeholder}
            </Box>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem 
            key={option.value} 
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <Box 
          sx={{ 
            fontSize: '0.75rem', 
            color: error ? theme.palette.error.main : text.secondary,
            marginTop: '3px',
            marginLeft: '14px',
          }}
        >
          {helperText}
        </Box>
      )}
    </FormControl>
  );
};

export default Dropdown;