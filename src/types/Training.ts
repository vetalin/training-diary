import { ITrainingTemplate } from 'types/TrainingTemplate'
import { IExerciseTemplate } from 'types/ExerciseTemplate'
import { Evaluation } from 'types/Evaluation'

export type Time = number

export interface ITry<T> {
  [tryKey: number]: T
}

export interface IExercise {
  templateId: IExerciseTemplate['id']
  evaluation: Evaluation
  liftCount: number
  tryCount: number
  timeOfRelax: ITry<Time>
  evaluationTries: ITry<Evaluation>
}

export interface ITraining {
  id: string
  date: Date
  trainingTemplateId: ITrainingTemplate['id']
  exercises: Array<IExercise>
  evaluation: Evaluation
  time: Time
}

