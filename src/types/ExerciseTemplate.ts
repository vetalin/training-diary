import { TMuscleGroup } from 'types/MuscleGroups'

export interface IExerciseTemplate {
  id: string
  name: string
  description?: string
  muscleGroup: TMuscleGroup
}
