export function formatDate(date: string) {
  const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  const data = new Date(date);
  const day = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();

  return `${day} ${months[month]} ${year}`;
}

export function getGenresFromSearchParams(search: string): string | null {
  const searchParams = new URLSearchParams(search);
  const genres = searchParams.get("genres");
  return genres;
}
