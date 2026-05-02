export async function getBooks() {
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

