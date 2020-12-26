import React from 'react'
import { observable, action } from 'mobx'

export class Training {
  @observable training = ''
  @action
  setTraining () {
    this.training = ''
  }
}

export const TrainingContext = React.createContext(new Training())
export const useStoreTraining = () => React.useContext(TrainingContext)
