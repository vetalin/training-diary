import React from 'react'
import { makeAutoObservable } from 'mobx'
import { ITrainingProgram } from 'types/TrainingProgram'

export class TrainingProgram {
  trainingPrograms: Array<ITrainingProgram> = []

  setTrainingPrograms (programs: Array<ITrainingProgram>) {
    this.trainingPrograms = programs
  }

  addTrainingProgram (program: ITrainingProgram) {
    this.trainingPrograms = [...this.trainingPrograms, program]
  }

  constructor () {
    makeAutoObservable(this)
  }
}

export const TrainingProgramContext = React.createContext(new TrainingProgram())
export const useStoreTrainingProgram = () => React.useContext(TrainingProgramContext)
