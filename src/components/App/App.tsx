import React from 'react'
import * as S from './App.styled'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import * as reducers from 'reducers'
import mySaga from 'sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)

export const App = () => {
  return (
    <Provider store={store}>
      <S.AppContainer>
        Test text
      </S.AppContainer>
    </Provider>
  )
}
