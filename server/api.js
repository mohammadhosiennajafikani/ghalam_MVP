const BASE_URL = 'https://your-backend.com/api';

export async function getBooks() {
  const res = await fetch(`${BASE_URL}/books`);
  return await res.json();
}

export async function getBookById(id) {
  const res = await fetch(`${BASE_URL}/books/${id}`);
  return await res.json();
}