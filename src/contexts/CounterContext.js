import React, { createContext, useReducer, useContext } from 'react';

// 1. Başlangıç state’i
const initialState = { count: 0 };

// 2. Reducer fonksiyonu
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(`Unhandled action: ${action.type}`);
  }
}

// 3. Context yarat
const CounterContext = createContext();

// 4. Provider bileşeni
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// 5. Custom hook (kullanımı kolaylaştırır)
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }
  return context;
};
