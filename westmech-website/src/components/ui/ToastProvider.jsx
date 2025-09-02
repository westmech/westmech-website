"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children, position = "top-center", maxToasts = 5 }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toastData) => {
    const id = Date.now() + Math.random();
    const newToast = {
      id,
      type: "info",
      duration: 4000,
      position,
      ...toastData,
    };

    setToasts((prevToasts) => {
      const updatedToasts = [newToast, ...prevToasts];
      // Limit the number of toasts
      return updatedToasts.slice(0, maxToasts);
    });

    return id;
  }, [position, maxToasts]);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // Convenience methods for different toast types
  const showSuccess = useCallback((message, options = {}) => {
    return addToast({ ...options, message, type: "success" });
  }, [addToast]);

  const showError = useCallback((message, options = {}) => {
    return addToast({ ...options, message, type: "error" });
  }, [addToast]);

  const showWarning = useCallback((message, options = {}) => {
    return addToast({ ...options, message, type: "warning" });
  }, [addToast]);

  const showInfo = useCallback((message, options = {}) => {
    return addToast({ ...options, message, type: "info" });
  }, [addToast]);

  const contextValue = {
    toasts,
    addToast,
    removeToast,
    removeAllToasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };

  const getToastsByPosition = () => {
    const grouped = {};
    toasts.forEach((toast) => {
      const pos = toast.position || position;
      if (!grouped[pos]) {
        grouped[pos] = [];
      }
      grouped[pos].push(toast);
    });
    return grouped;
  };

  const toastsByPosition = getToastsByPosition();

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {Object.entries(toastsByPosition).map(([pos, positionToasts]) => (
        <div key={pos}>
          {positionToasts.map((toast, index) => (
            <Toast
              key={toast.id}
              id={toast.id}
              type={toast.type}
              message={toast.message}
              duration={toast.duration}
              position={pos}
              onClose={removeToast}
              style={{
                ...(pos.includes("top") && {
                  top: 100 + (index * 80),
                }),
                ...(pos.includes("bottom") && {
                  bottom: 20 + (index * 80),
                }),
              }}
            />
          ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
};