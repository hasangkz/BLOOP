import React from 'react';
import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, backgroundColor: action.payload };
    case 'CHANGE_DISPLAY':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function ThemeContextProvider({ children }) {
  const initialState = {
    backgroundColor: '#786fa6',
    mode: 'light',
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  const changeDisplay = (mode) => {
    dispatch({ type: 'CHANGE_DISPLAY', payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeDisplay }}>
      {children}
    </ThemeContext.Provider>
  );
}
