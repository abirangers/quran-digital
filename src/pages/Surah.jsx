import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import HeaderSurah from "../components/HeaderSurah";
import AudioSurah from "../components/AudioSurah";
import Ayah from "../components/Ayah";
import Footer from "../components/Footer";
import { CSSTransition } from "react-transition-group";
import DeskSurah from "../components/DeskSurah";
import TafsSurah from "../components/TafsSurah";
import { getSurah, getTafsir } from "../utils/api/api";
import transition from "../transition";
const Surah = () => {
  const [surahSelanjutnya, setSurahSelanjutnya] = useState(0);
  const [toggleDesk, setToggleDesk] = useState(false);
  const [toggleTafs, setToggleTafs] = useState(false);
  const [surahHead, setSurahHead] = useState([]);
  const [tafsirId, setTafsirId] = useState(null);
  const [tafsir, setTafsir] = useState([]);
  const [audio, setAudio] = useState(null);
  const [ayah, setAyah] = useState([]);
  const parentRef = useRef(null);
  const tafsParentRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const getAnchorUrl = async () => {
      const dapatkanUrl = window.location.hash;
      const dapatkanAnchor = dapatkanUrl.substring(1);
      if (dapatkanAnchor) {
        const dataAnchor = await document.getElementById(dapatkanAnchor);
        if (dataAnchor) dataAnchor.scrollIntoView();
      }
    };
    getAnchorUrl();
  });

  useEffect(() => {
    const surah = async () => {
      const data = await getSurah(id);
      setAudio(data.audio);
      setAyah(data.ayat);
      setSurahHead(data);
      console.log(data);
      setSurahSelanjutnya(data.surat_selanjutnya.id);
      // console.log(surahSelanjutnya);
    };
    surah();
  }, []);

  useEffect(() => {
    const tafsir = async () => {
      const data = await getTafsir(id);
      const dataTaf = data.tafsir;
      setTafsir(dataTaf);
    };
    tafsir();
  }, []);

  // membuka deskripsi surah
  const handleToggleDesk = () => {
    setToggleDesk((deskVisible) => !deskVisible);
    document.body.style.overflow = "hidden";
  };

  // membuka tafsir ayat
  const handleToggleTafs = (id) => {
    const tafsira = tafsir.find((data) => data.ayat === id);
    setTafsirId(tafsira);
    setToggleTafs((tafsVisible) => !tafsVisible);
    document.body.style.overflow = "hidden";
  };

  // menutup tafsir ayat
  const closeTafs = (e) => {
    if (e.target === tafsParentRef.current) {
      setToggleTafs(false);
      document.body.style.overflow = "visible";
    }
  };

  // menutup deskripsi surah
  const closeDesk = (e) => {
    if (e.target === parentRef.current) {
      setToggleDesk(false);
      document.body.style.overflow = "visible";
    }
  };

  // menshare ayat
  const handleToggleShare = async (anchor) => {
    try {
      await navigator.share({
        title: "Judul konten",
        text: "Konten yang ingin Anda bagikan.",
        url: `${id}/#${anchor}`,
      });
      console.log("Berbagi berhasil!");
    } catch (error) {
      console.error("Gagal berbagi:", error);
    }
  };

  return (
    <>
      <section>
        <div className="p-6 text-[#212529] max-w-[800px] mx-auto bg-white">
          <Button
            className="font-[Poppins] mb-3 capitalize font-medium"
            href={`/quran`}
          >
            kembali
          </Button>
          <div className="flex items-center justify-center w-full overflow-hidden text-center rounded-xl shadow-prim">
            <HeaderSurah
              data={surahHead}
              handleToggleDesk={handleToggleDesk}
              toggleDesk={toggleDesk}
            />
          </div>

          {/* Header Surah */}
          <CSSTransition
            nodeRef={parentRef}
            in={toggleDesk}
            timeout={300}
            classNames="opendesk"
            unmountOnExit
          >
            <DeskSurah
              data={surahHead}
              closeDesk={closeDesk}
              parentRef={parentRef}
            />
          </CSSTransition>

          {/* Tafsir Surah */}
          <CSSTransition
            nodeRef={tafsParentRef}
            in={toggleTafs}
            timeout={300}
            classNames="opendesk"
            unmountOnExit
          >
            <TafsSurah
              closeTafs={closeTafs}
              tafsParentRef={tafsParentRef}
              data={tafsirId}
            ></TafsSurah>
          </CSSTransition>

          {/* audio surah */}
          <AudioSurah audio={audio} />

          {/* ayat */}
          {ayah.map((data) => {
            return (
              <Ayah
                data={data}
                key={data.id}
                toggleTafs={handleToggleTafs}
                toggleShare={handleToggleShare}
              />
            );
          })}
          <div className="flex justify-end">
            <Button
              className="font-['Poppins']"
              href={`/quran/${surahSelanjutnya}`}
            >
              selanjutnya
            </Button>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default transition(Surah);
