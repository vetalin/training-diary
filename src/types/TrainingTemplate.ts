import { IExerciseTemplate } from 'types/ExerciseTemplate'
import { TMuscleGroup } from 'types/MuscleGroups'

export interface ITrainingTemplate {
  id: string
  name: string
  description?: string
  exercises: Array<IExerciseTemplate>
  muscleGroups: Array<TMuscleGroup>
}
