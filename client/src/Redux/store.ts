import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./auth/auth.reducer";
import thunk from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";

export const store = legacy_createStore(reducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// type DispatchFunc = () => AppDispatch;
// export const useAppDispatch: DispatchFunc = useDispatch;

// or

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
