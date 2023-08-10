import { useEffect, useState } from "react";
import alQuran from "../assets/alquranull-karim.svg";
import ListSurah from "../components/ListSurah";
import Footer from "../components/Footer";
import { getListSurah } from "../utils/api/api";
import transition from "../transition";
const Quran = () => {
  const [listSurah, setListSurah] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const listSurah = async () => {
      const data = await getListSurah();
      setListSurah(data);
    };
    listSurah();
  }, []);

  const handleSearchSurah = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  return (
    <>
      <section className="mt-10">
        <div className="flex flex-col items-center justify-center border-b-2 border-b-slate-200 pb-[18px]">
          <div className="max-w-[262px] h-[150px] mb-[10px]">
            <img
              src={alQuran}
              alt="kaligrafi Al-Qur'an"
              className="object-cover w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Cari Surah..."
            className="my-5 max-w-[620px] w-[90%] text-base tracking-wide text-center bg-white border border-slate-300 outline-none rounded-[10px] py-2"
            onChange={handleSearchSurah}
          />
          <h3 className="my-[10px] text-2xl font-semibold tracking-wide">
            Daftar Surah
          </h3>
        </div>
        {/* list surah */}
        {listSurah <= 0 ? (
          <h1 className="pt-5 text-base text-center text-black text-opacity-50">
            sabar yaa....
          </h1>
        ) : (
          <ListSurah data={listSurah} input={input} />
        )}
      </section>
      <Footer />
    </>
  );
};

export default transition(Quran);
