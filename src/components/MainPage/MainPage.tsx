import React from 'react'
import { CreateTraining } from 'components/CreateTraining/CreateTraining'
import { TrainingContext } from 'store/training/store'
import { Provider } from 'mobx-react'
import { TrainingList } from 'components/TrainingList/TrainingList'

export const MainPage: React.FC = () => {
  return (
    <Provider value={TrainingContext}>
      <CreateTraining/>
      <TrainingList/>
    </Provider>
  )
}
