import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

export default {
    list: () => axios.get(`${BASE_URL}/todos`),
    save: (todo) => axios.post(`${BASE_URL}/todos`, todo),
    delete: (id) => axios.delete(`${BASE_URL}/todos/${id}`),
}
