import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { CreateTrainingForm } from 'components/CreateTraining/CreateTrainingForm/CreateTrainingForm'

interface ICreateTrainingModalProps {
  open: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const CreateTrainingModal: React.FC<ICreateTrainingModalProps> = ({ open, handleClose, handleSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Создание тренировки</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <CreateTrainingForm/>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>Отмена</Button>
        <Button onClick={handleSubmit} color='primary'>Создать</Button>
      </DialogActions>
    </Dialog>
  )
}
