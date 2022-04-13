import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

interface BasicModalProps {
  heading: string
  body: string
  buttonBody: string
  open: boolean
  handleClose: () => void
}

// const BasicCard : React.FC<BasicCardProps> = ({props}: BasicCardProps) => {
const BasicModal = (props: BasicModalProps) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle id="alert-dialog-title">{props.heading}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} autoFocus>
          Ok
        </Button>
        <Button onClick={props.handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default BasicModal
