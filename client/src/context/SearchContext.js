import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  name: undefined,
  dob: [],
  gender: undefined,
  nationality:undefined
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        name: state.name,
        dob: state.dob,
        gender: state.gender,
        nationality: state.nationality,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};