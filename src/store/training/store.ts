import React from 'react'
import { makeAutoObservable } from 'mobx'

export class Training {
  training = 'lalal'

  setTraining (newTraining: string) {
    this.training = newTraining
  }

  constructor () {
    makeAutoObservable(this)
  }
}


export const TrainingContext = React.createContext(new Training())
export const useStoreTraining = () => React.useContext(TrainingContext)
