import { Share, Tafsir } from "../assets/surahsvg.jsx";
const Ayah = ({ data, toggleTafs, toggleShare }) => {
  const { nomor, ar, tr, idn } = data;
  return (
    <div className="w-full py-7 divide-y-[1px] divide-slate-200/80" id={nomor}>
      <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-100/90">
        <div className="text-sm leading-7 text-center text-white rounded-full bg-primary w-7 h-7">
          {nomor}
        </div>
        <div className="flex items-center gap-x-2">
          <Share onClick={() => toggleShare(nomor)} />
          <Tafsir onClick={() => toggleTafs(nomor)} />
        </div>
      </div>
      <div className="mt-6 md:px-4">
        <h1 className="text-right text-3xl leading-[2.4] font-['LPMQ'] mt-6">
          {ar}
        </h1>
        <p className="mt-4 mb-4 text-lg">{tr}</p>
        <p className="text-base text-slate-600">{idn}</p>
      </div>
    </div>
  );
};

export default Ayah;
