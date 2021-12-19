import axios from 'axios';

const url = "http://localhost:8000/api";

export default{
    getAllagent: () =>
        axios.get(`${url}/agents`),
    getOneagent: (id) =>
        axios.get(`${url}/agents/${id}/edit`),
    addagent: (agent) =>
        axios.post(`${url}/agents`, agent),
    updateagent: (agent, id) =>
        axios.put(`${url}/agents`, agent),
    deleteagent: (id) =>
        axios.delete(`${url}/agents/${id}`),
}