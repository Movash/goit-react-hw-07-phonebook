import axios from 'axios';

axios.defaults.baseURL = 'https://6527eb99931d71583df19812.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get(`contacts`);
  return data;
}

export async function addContact(contactData) {
  const { data } = await axios.post(`contacts`, contactData);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}