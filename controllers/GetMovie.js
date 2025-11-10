
const Getmovie = (card, getMovie) => {
    try {


        console.log(card)

        getMovie(card)

    } catch (error) {
        console.log(error)
    }
}

export default Getmovie
