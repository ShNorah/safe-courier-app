import axios from 'axios';

const url = "http://localhost:5000/parcels";

export const fetchParcels = ()=> axios.get(url);

export const createParcel = (newParcel) => axios.post(url, newParcel);