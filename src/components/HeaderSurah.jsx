import { useState } from "react";
import { Info } from "../assets/surahsvg.jsx";
const HeaderSurah = ({ data, handleToggleDesk }) => {
  const { nama_latin, arti, tempat_turun, jumlah_ayat } = data;

  return (
    <>
      <div className={`relative w-full p-5 bg-surahHead`}>
        <Info
          className={`absolute top-3 right-3 cursor-pointer`}
          onClick={handleToggleDesk}
        />
        <div className="flex flex-col items-center justify-center text-white">
          <h3 className="mb-1 text-xl font-semibold sm:text-2xl">
            {nama_latin}
          </h3>
          <p className="mb-2 text-base font-normal">{arti}</p>
          <div className="h-[0.5px] mx-auto bg-[#dee2e6] w-1/2"></div>
          <div className="my-3 mb-5 text-base font-normal uppercase">
            {tempat_turun} • {jumlah_ayat} AYAT
          </div>
          <h2 className="sm:text-3xl text-2xl font-['LPMQ'] font-extralight mb-4">
            ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeaderSurah;
