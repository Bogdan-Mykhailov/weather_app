import {CurrentWeatherDataType} from "../01-components/02-Current-weather/CurrentWeather";

const initState: AppStateType = {
  currentWeather: {} as CurrentWeatherDataType
}

const TEST = 'TEST'

export const appReducer = (state: AppStateType = initState, action: AppActionsType): AppStateType => {
  switch (action.type) {
    case TEST:
      return {...state, currentWeather: action.payload.currentWeather}

    default:
      return state
  }
}

//actions
export const setCurrentWeatherAC = (currentWeather: CurrentWeatherDataType) => ({
  type: TEST,
  payload: {
    currentWeather
  }
} as const)

//types
export type AppActionsType =
  | ReturnType<typeof setCurrentWeatherAC>
type AppStateType = {
  currentWeather: CurrentWeatherDataType
}

