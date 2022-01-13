import axiosInstance from "../../modules/axios/axios.module";

export default function moviesService() {

  const getMovies = () => axiosInstance.get('movies', {
    headers: {  }
  })
  return { getMovies}
}