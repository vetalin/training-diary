import { all } from 'redux-saga/effects'
import watchApp from './app'

export default function * () {
  yield all([watchApp()])
}
