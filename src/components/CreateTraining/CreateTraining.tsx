import React from 'react'
import { Button } from '@material-ui/core'
import { CreateTrainingModal } from 'components/CreateTraining/CreateTrainingModal'

export const CreateTraining: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const handleClose = React.useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])
  const handleOpen = React.useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])
  const handleSubmit = React.useCallback(() => '', [])

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleOpen}>Создать тренировку</Button>
      <CreateTrainingModal
        open={isOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  )
}
