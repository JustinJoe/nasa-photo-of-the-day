import axios from "axios";

const fetchData = async (date) => {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=wnxY5Ev4dkaw9HtRoyazlusoapMxDEdC5k1OJqul&date=${date}`)
    return response.data;
}

export default fetchData;