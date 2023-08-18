const BASE_URL = "https://equran.id/api/";

export const getListSurah = async () => {
  try {
    const response = await fetch(`${BASE_URL}surat`);
    if (!response.ok) throw new Error("Network error was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching list surah ", error);
  }
};

export const getSurah = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}surat/${id}`);
    if (!response.ok) throw new Error("Network error was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching list surah ", error);
  }
};

export const getTafsir = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}tafsir/${id}`);
    if (!response.ok) throw new Error("Network error was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching list surah ", error);
  }
};
