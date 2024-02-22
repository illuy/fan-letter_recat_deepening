import axios from "axios";

export const letterClient = axios.create({
    baseURL: "http://localhost:6006/letters",
    headers:{
        "Content-Type": "application/json",
    }
})


export const getLetter = async () => {
    const { data } = await letterClient.get("/");
    return data;
}
export const getSingleLetter = async (id) => {
    const { data } = await letterClient.get(`/${id}`);
    return data;
}

export const createLetter = async (letter) =>{
    const { data } = await letterClient.post("/", letter);
    return data;
}

export const deleteLetter = async (id) => {
    await letterClient.delete(`/${id}`);
}
export const updateLetter = async (id,letter) =>{
    await letterClient.patch(`/${id}`, letter);
}