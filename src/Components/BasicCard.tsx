import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import BasicModal from './BasicModal'

interface BasicCardProps {
  heading: string
  body: string
  buttonBody: string
  children: React.ReactNode
}

// const BasicCard : React.FC<BasicCardProps> = ({props}: BasicCardProps) => {
const BasicCard = (props: BasicCardProps) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  return (
    <React.Fragment>
      <Box sx={{ minWidth: 275, maxWidth: 500 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3" color="text.secondary">
              {props.heading}
            </Typography>
            <Typography variant="h5" component="div">
              {props.body}
            </Typography>
            {props.children}
          </CardContent>
          <CardActions>
            <Button variant="text" size="large" onClick={handleModalOpen}>
              {props.buttonBody}
            </Button>
          </CardActions>
        </Card>
      </Box>
      <BasicModal
        heading="Test"
        body="This is some extended text that shows up when the user clicks on the button within the card This is some extended text that shows up when the user clicks on the button within the card"
        buttonBody="Close"
        open={modalOpen}
        handleClose={handleModalClose}
      />
    </React.Fragment>
  )
}

export default BasicCard
