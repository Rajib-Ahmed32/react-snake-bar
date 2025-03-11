// If you want to show any alert Message in React Application then use this Custom SnackbarContext Component

/**
 * @typedef {Object} SnackbarState
 * @property {boolean} open - Indicates whether the Snackbar is open.
 * @property {string} message - The message to display in the Snackbar.
 * @property {string} severity - The severity level of the Snackbar (e.g., "success", "error", "info", "warning").
 */

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
  } from "react";
  import Snackbar from "@mui/material/Snackbar";
  import { Alert } from "@mui/material";
  
  const SnackbarContext = createContext();
  
  export const useSnackbar = () => useContext(SnackbarContext);
  
  export const SnackbarProvider = ({ children }) => {
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: "Default Message",
      severity: "error",
    });
  
    const triggerSnackbar = useCallback(
      (message = "No Message", severity = "error") => {
        setSnackbar({
          open: true,
          message,
          severity,
        });
      },
      []
    );
  
    useEffect(() => {
      if (snackbar.open) {
        const id = setTimeout(() => {
          setSnackbar((prev) => ({ ...prev, open: false }));
        }, 2000); // Auto-hide after 2 seconds
  
        return () => clearTimeout(id);
      }
    }, [snackbar.open]);
  
    const closeSnackbar = () => {
      setSnackbar((prev) => ({ ...prev, open: false }));
    };
  
    return (
      <SnackbarContext.Provider value={{ triggerSnackbar, closeSnackbar }}>
        {children}
  
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={snackbar.open}
          onClose={closeSnackbar}
          key="top-center"
          autoHideDuration={2000}
        >
          <Alert
            onClose={closeSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </SnackbarContext.Provider>
    );
  };
  
  /* 
  *****Use Case******
  // First wrap your Application
  <SnackbarProvider>
      <App/>
  <SnackbarProvider/>
  
  // Now use this way
  import { useSnackbar } from "/Utility/GlobalSnackbar";
   const { triggerSnackbar } = useSnackbar();
   triggerSnackbar("Type your Message", "error || success || warning || info"); pass Message and severity
   */
  