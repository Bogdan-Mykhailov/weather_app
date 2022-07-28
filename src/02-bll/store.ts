import {combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {appReducer} from "./appReducer";

const reducers = combineReducers({
  app: appReducer
})


export const store = createStore(reducers)

//types
export type AppStoreType = ReturnType<typeof reducers>
export const useTypedSelector: TypedUseSelectorHook<AppStoreType> = useSelector;