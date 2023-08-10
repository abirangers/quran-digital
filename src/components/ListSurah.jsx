import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ListSurah = ({ data, input }) => {
  return (
    <div className="px-4">
      <div className="container grid grid-cols-1 gap-4 mx-auto mt-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => {
          const { nomor, nama_latin, nama, jumlah_ayat, arti } = data;
          return (
            <Link
              to={`/quran/${nomor}`}
              key={nomor}
              className={` ${
                nama_latin.toLowerCase().includes(input) ? "" : "hidden"
              }`}
            >
              <div
                className={`flex items-center justify-between px-3 py-2 border-2 border-[#0272db] rounded-[10px]`}
              >
                <div className="flex items-center gap-x-3">
                  <span className="w-[50px] h-[50px] border border-black bg-[#050a0f] rounded-[10px] flex items-center justify-center text-white text-[22px] font-semibold">
                    {nomor}
                  </span>
                  <div>
                    <h5 className="text-base font-semibold tracking-normal text-[#0272db]">
                      {nama_latin}
                    </h5>
                    <p className="text-[10px] font-semibold tracking-wide mt-[3px]">
                      ({arti})
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm tracking-wide text-end">
                    {nama} <br />
                    {jumlah_ayat} Ayat
                  </p>
                  <p></p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ListSurah;
