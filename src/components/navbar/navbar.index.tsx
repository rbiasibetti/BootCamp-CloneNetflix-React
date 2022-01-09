import React, { useEffect, useState } from 'react';
import { FaBars, FaCaretDown } from 'react-icons/fa';

import login from '../../assets/icons/logo.svg';

import { Profile } from './navbar.styles';
import { Container, Grid } from "@mui/material";
import { Wrapper } from '../../screens/login/login.styled';

export default function NavBar() {
  /*const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsBlack(window.scrollY > 10));

    // Executa quando a pagina for desconstruida
    return () => {
      window.removeEventListener('scroll', () =>
        setIsBlack(window.scrollY > 10),
      );
    };
  }, []);*/

  return (
    <Container>
      <Wrapper container justifyContent={'center'}>
        <Grid item xs={3} justifyContent={'left'}>
          <button type="button">
            <FaBars />
          </button>
        </Grid>
        <Grid item xs={6} justifyContent={'left'}>
          <img src={login} alt="NetFlix" />
        </Grid>
        <Grid item xs={3} justifyContent={'rigth'}>
          <Profile>
            <button type="button">
              <img
                src="https://occ-0-761-185.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABR8DzEDMx6x6rgkSexM2EYh44oQISc8fyEFr6WnraR9_HyniHFDRbXRrElpLThfL9OYFOueAItK7VIEb2xH7AqA.png?r=c71"
                alt="imagem profile usuario"
              />
              <FaCaretDown />
            </button>
          </Profile>
        </Grid>
      </Wrapper>
    </Container>
  );
};
