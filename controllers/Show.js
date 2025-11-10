
const Show = (card,getMovie) => {

   console.log(card)
   getMovie(card)
   document.getElementById('my_modal_4').showModal()
}

export default Show
