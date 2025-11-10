
const Getuserlocal = () => {

    if (typeof window !== "undefined") {
        const user = JSON.parse(localStorage.getItem("user")) || null

        return user
    }

    return null
}

export default Getuserlocal
