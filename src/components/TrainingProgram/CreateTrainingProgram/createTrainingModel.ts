import { ITrainingProgram } from 'types/TrainingProgram'
import { idGenerate } from 'helper/generateId'
import { TrainingProgram } from 'store/trainingProgram/store'

export const createTrainingModel = (
  {
    name,
    description,
    imageUrl,
    trainings
  }: Omit<ITrainingProgram, 'id'>,
  addTrainingProgramAction: TrainingProgram['addTrainingProgram']
) => {
  const id = idGenerate()
  addTrainingProgramAction({
    id,
    name,
    description,
    imageUrl,
    trainings
  })
}
