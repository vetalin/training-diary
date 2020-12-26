import { ITrainingTemplate } from 'types/TrainingTemplate'

export interface ITrainingProgram {
  id: string
  name: string
  description: string
  trainings: Array<ITrainingTemplate>
}
