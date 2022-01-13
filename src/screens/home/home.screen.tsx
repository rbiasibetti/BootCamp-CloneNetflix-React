import { Container, Grid } from '@mui/material';
import Header from '../../components/headers/main/hearder.component';
export default function Home() {
    return (

        <Container>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} justifyContent="center">
                    <Grid container direction="row" >
                        <Header />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}