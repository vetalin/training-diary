import React from 'react'
import { Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText, Button } from '@material-ui/core'

interface ICreateTrainingModal {
  open: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const CreateTrainingModal: React.FC<ICreateTrainingModal> = ({ open, handleClose, handleSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Создание тренировки</DialogTitle>
      <DialogContent>
        <DialogContentText>createForm</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>Отмена</Button>
        <Button onClick={handleSubmit} color='primary'>Создать</Button>
      </DialogActions>
    </Dialog>
  )
}
