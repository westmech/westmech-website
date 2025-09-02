"use client";

import React, { useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  Slide,
} from "@mui/material";
import {
  Close as CloseIcon,
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
} from "@mui/icons-material";

const Toast = ({
  id,
  type = "info",
  message,
  duration = 4000,
  onClose,
  position = "top-center",
}) => {
  const theme = useTheme();

  const getToastStyles = () => {
    const baseStyles = {
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      padding: "12px 16px",
      borderRadius: "12px",
      minWidth: "300px",
      maxWidth: "500px",
      backdropFilter: "blur(10px)",
      border: "1px solid",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
    };

    switch (type) {
      case "success":
        return {
          ...baseStyles,
          backgroundColor: "rgba(76, 175, 80, 0.9)",
          borderColor: "rgba(76, 175, 80, 0.3)",
          color: "#ffffff",
        };
      case "error":
        return {
          ...baseStyles,
          backgroundColor: "rgba(244, 67, 54, 0.9)",
          borderColor: "rgba(244, 67, 54, 0.3)",
          color: "#ffffff",
        };
      case "warning":
        return {
          ...baseStyles,
          backgroundColor: "rgba(255, 152, 0, 0.9)",
          borderColor: "rgba(255, 152, 0, 0.3)",
          color: "#ffffff",
        };
      case "info":
      default:
        return {
          ...baseStyles,
          backgroundColor: "rgba(1, 127, 224, 0.9)",
          borderColor: "rgba(1, 127, 224, 0.3)",
          color: "#ffffff",
        };
    }
  };

  const getIcon = () => {
    const iconProps = { fontSize: "small" };
    switch (type) {
      case "success":
        return <SuccessIcon {...iconProps} />;
      case "error":
        return <ErrorIcon {...iconProps} />;
      case "warning":
        return <WarningIcon {...iconProps} />;
      case "info":
      default:
        return <InfoIcon {...iconProps} />;
    }
  };

  const getPositionStyles = () => {
    const positions = {
      "top-left": {
        position: "fixed",
        top: 100,
        left: 20,
        zIndex: 9999,
      },
      "top-center": {
        position: "fixed",
        top: 100,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
      },
      "top-right": {
        position: "fixed",
        top: 100,
        right: 20,
        zIndex: 9999,
      },
      "bottom-left": {
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 9999,
      },
      "bottom-center": {
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
      },
      "bottom-right": {
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
      },
    };
    return positions[position] || positions["top-center"];
  };

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <Box sx={{ ...getPositionStyles() }}>
        <Box sx={getToastStyles()}>
          {getIcon()}
          <Typography
            variant="body2"
            sx={{
              flex: 1,
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            {message}
          </Typography>
          <IconButton
            size="small"
            onClick={() => onClose(id)}
            sx={{
              color: "inherit",
              opacity: 0.8,
              "&:hover": {
                opacity: 1,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Slide>
  );
};

export default Toast;