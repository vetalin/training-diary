import { IReducer } from 'reducers/types'

const initState = {
  appTest: 'test'
}

export default (state = initState, { type, payload }: IReducer) => {
  switch (type) {
    case 'SET_APP_TEST': return {
      ...initState,
      appTest: payload
    }
    default: return initState
  }
}
