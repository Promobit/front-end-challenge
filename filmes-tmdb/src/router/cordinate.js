
export const goToHomePage = (navigate) => {
   navigate("/home");
}

export const goToDetailsPageMovie = (navigate, id) => {

   navigate(`/details/movie/${id}`)
}

export const goToDetailsPageTV = (navigate, id) => {

   navigate(`/details/tv/${id}`)
}

