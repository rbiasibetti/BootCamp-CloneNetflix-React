import React from "react"
import Button from "../../components/buttons/button/button.component"
import { Grid } from '@mui/material'
export default function Login() {
  return (
    <>
      <Grid container justifyContent={'center'}>
        <Grid item xs={4}>
          < Button primary={true}>Entrar</Button>
        </Grid>
      </Grid>
    </>
  )
}
