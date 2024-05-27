const API_KEY = "15e922b5a372911afa02459b6bf08702";

export async function fetchDatas(value) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`
    );

    if (!res.ok)
      throw new Error(`Bir hata oluştu: ${res.status} ${res.statusText}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch Datas Error:", error);
    throw error;
  }
}

export function kelvinToCelcius(value) {
  return (value - 272.15).toFixed(0);
}
