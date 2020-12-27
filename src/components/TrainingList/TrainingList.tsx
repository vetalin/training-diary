import React from 'react'
import { Button } from '@material-ui/core'
import { observer } from 'mobx-react'
import { useStoreTraining } from 'store/training/store'

export const TrainingList = observer(() => {
  const storeTraining = useStoreTraining()
  return (
    <React.Fragment>
      <div>name: {storeTraining.training}</div>
      <Button onClick={() => storeTraining.setTraining('button clicked')}>Click</Button>
    </React.Fragment>
  )
})
