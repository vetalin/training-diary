import React from 'react'
import { observable, action } from 'mobx'
import { ITrainingProgram } from 'types/TrainingProgram'

export class TrainingProgram {
  @observable trainingPrograms: Array<ITrainingProgram> = []

  @action
  setTrainingPrograms (programs: Array<ITrainingProgram>) {
    this.trainingPrograms = programs
  }
}

export const TrainingProgramContext = React.createContext(new TrainingProgram())
export const useStoreTrainingProgram = () => React.useContext(TrainingProgramContext)
