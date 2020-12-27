import React from 'react'
import { CreateTraining } from 'components/CreateTraining/CreateTraining'
import { TrainingList } from 'components/TrainingList/TrainingList'

export const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <CreateTraining/>
      <TrainingList/>
    </React.Fragment>
  )
}
