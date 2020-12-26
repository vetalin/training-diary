import React from 'react'
import { action, observable } from 'mobx'

export class Training {
  @observable training = 'lalal'

  @action
  setTraining (newTraining: string) {
    this.training = newTraining
  }
}

export const trainingInstance = new Training()
export const TrainingContext = React.createContext(trainingInstance)
export const useStoreTraining = () => React.useContext(TrainingContext)
