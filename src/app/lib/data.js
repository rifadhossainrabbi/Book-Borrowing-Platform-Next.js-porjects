export async function getBooks() {
  const res = await fetch(
    'https://book-borrowing-platform-next-js-por.vercel.app/data.json',
    { cache: 'no-store' },
  );
  const data = await res.json();
  return data;
}

// export async function getBookById() {
//   const res = await fetch(
//     `https://book-borrowing-platform-next-js-por.vercel.app/data.json/${bookId}`,
//     { cache: 'no-store' },
//   );
//   const data = await res.json();
//   return data;
// }
