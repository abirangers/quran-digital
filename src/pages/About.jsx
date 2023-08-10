/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import transition from "../transition";
import { RoughNotation } from "react-rough-notation";
const About = () => {
  const [hightlight, setHightlight] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setHightlight(false);
      } else {
        setHightlight(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="mt-14">
        <div className="container mx-auto text-[#212529] xl:px-0">
          <h1 className="text-[32px] font-semibold text-center mb-9 lg:mb-8">
            Profile AL-Qur{"'"}an Digital
          </h1>
          <div>
            <h2 className="text-3xl font-normal font-['LPMQ'] mb-8">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم
            </h2>
            <p className="mb-4 text-xl leading-normal">
              Qur{"'"}an Pro adalah Al-Qur{"'"}an digital berbasis website
              dengan menyediakan lengkap 30 Juz surah Al-Quran. Tujuan website
              Qur{"'"}an Pro ini dibuat agar orang dapat mengakses AL-Qur{"'"}an
              dengan mudah dan tidak perlu mendownload aplikasi-aplikasi lain,
              cukup membuka website ini anda akan langsung disungguhkan dengan
              30 juz Al-Qur{"'"}an lengkap beserta surah dan artinya.
            </p>
            <p className="mb-4 text-xl leading-normal">
              Qur{"'"}an Pro dibuat Oleh{" "}
              <RoughNotation
                type="highlight"
                show={hightlight}
                color="#F31559"
                strokeWidth={4}
                iterations={1}
                animationDelay={1300}
                animationDuration={1600}
              >
                <a
                  href="#"
                  className={`text-primary ${hightlight && "text-white"}`}
                >
                  Devacto Rekayasa Perangkat Lunak
                </a>
              </RoughNotation>
              . Semoga dengan adanya Qur{"'"}an Pro ini semua orang akan lebih
              mudah membaca/mengakses/melihat isi atau bacaan Al-Qur{"'"}an
              dengan Mudah dan simple. Kami Doakan semoga Website ini Bisa
              menjadi Amal Jariyah untuk kami dan orang yang membaca/mengunjungi
              website ini. Kami Ucapkan Terima Kasih sudah mengunjungi terlebih
              lagi orang yang sudah membaca Al-Qur{"'"}an di Website ini.
            </p>
            <h4 className=" text-[28px] font-normal font-['LPMQ'] mt-8">
              اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ
            </h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default transition(About);
