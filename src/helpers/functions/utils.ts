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

export function formatDateForRelease(date: string) {
  const dates = date.split("-");
  const day = dates[2];
  const month = dates[1];
  const year = dates[0];

  return `${day}/${month}/${year}`;
}

export function convertMinutesToHours(minutes: number): string {
  const hours: number = Math.floor(minutes / 60);
  const remainingMinutes: number = minutes % 60;

  const formattedHours: string = hours.toString().padStart(2, "0");
  const formattedMinutes: string = remainingMinutes.toString().padStart(2, "0");

  return `${formattedHours}h${formattedMinutes}`;
}

export function getFromSearchParams(
  search: string,
  param: string
): string | null {
  const searchParams = new URLSearchParams(search);
  const genres = searchParams.get(param);
  return genres;
}
