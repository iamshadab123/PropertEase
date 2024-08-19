'use client';
import { createContext, useContext, useState } from 'react';

// Create a context object
const GlobalContext = createContext();

// Create a provider component
export function GlobalProvider({ children }) {
  // State to manage unread count
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    // Provide context value to children components
    <GlobalContext.Provider
      value={{
        unreadCount, // Current unread count
        setUnreadCount, // Function to update unread count
      }}
    >
      {children} {/* Render children components */}
    </GlobalContext.Provider>
  );
}

// Custom hook to access the global context
export function useGlobalContext() {
  // Access the context value
  return useContext(GlobalContext);
}

