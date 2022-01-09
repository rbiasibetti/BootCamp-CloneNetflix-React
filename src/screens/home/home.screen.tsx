import React from "react"
import { useEffect, useState } from 'react';
import { Container, Loading } from "./home.styles";
import NavBar from "../../components/navbar/navbar.index";
import FeaturedMovie from "../../components/featured-movie/featured-movie";
import SectionMovies from "../../components/section-movies/section-movies";
import { MovieProps, SectionsMoviesProps } from "./home.types";
//migrar as requisições para o home.services
import axiosInstance from "../../modules/axios/axios.module";

export default function Home(){
  const [featuredMovieId, setFeaturedMovieId] = useState<number>(0);
  const [sectionsMovies, setSectionsMovies] = useState<SectionsMoviesProps[]>(
    [],
  );
  const [loading, setLoading] = useState(true);


  /*
  const apiRoutes: { name: string; route: string }[] = [
    { name: 'Em alta', route: '/movies' },
    { name: 'Populares na Cloneflix', route: '/movies' },
    { name: 'Melhores Avaliados', route: '/movies' },
    { name: 'Lançamentos', route: '/movies' },
    { name: 'Ação', route: '/movies' },
    { name: 'Ficção científica', route: '/movies' },
    { name: 'Romance', route: '/movies' },
  ];/*

  useEffect(() => {
    const URL_LANGUAGE_AND_KEY = `language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}&page=`;

    const urlsAxios = apiRoutes.map(({ route }, index) => {
      let pageRandom = '1';
      // Somente as três primeiras listas são randômicas
      if (index < 3) pageRandom = (Math.random() * (5 - 1) + 1).toString();

      const URL = route.concat(URL_LANGUAGE_AND_KEY).concat(pageRandom);
      return axiosInstance.get(URL);
    });

    if (sectionsMovies.length === 0) {
      Promise.all([...urlsAxios])
        .then(responses => {
          const responsesApi = responses.map((response, index) => ({
            id: index,
            name: apiRoutes[index].name,
            movies: response.data.results,
          }));

          setSectionsMovies(responsesApi);

          const randamIdMovie = Math.floor(Math.random() * 20);
          setFeaturedMovieId(responsesApi[0].movies[randamIdMovie].id);
          // setFeaturedMovieId(75006);
          // Criando efeito de loading
          setTimeout(() => setLoading(false), 800);
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  }, [apiRoutes, sectionsMovies]);
*/
  return (
    <Container>
      <NavBar />
      {!loading ? (
        <Loading>
          <div>
            <span />
            <strong>N</strong>
          </div>
        </Loading>
      ) : 
      (
        <>
          <FeaturedMovie movieId={featuredMovieId} />
          <div style={{ marginTop: -200 }}>
            {sectionsMovies.map(sectionMovie => (
              <SectionMovies {...sectionMovie} key={sectionMovie.id} />
            ))}
          </div>
        </>
      )}
    </Container>
  )
}

