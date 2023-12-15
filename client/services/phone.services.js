import axios from "axios"

class PhoneServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/phones`
        })
    }

    getAllPhones() {
        return this.api.get('/')
    }

    getPhonebyId(id) {
        return this.api.get(`/${id}`)
    }

}

const phoneServices = new PhoneServices()

export default phoneServices