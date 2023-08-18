import ustadz from "../assets/ustadz.png";
const Quotes = () => {
  return (
    <section className="lg:pt-[52px]">
      <div className="container mx-auto font-['viga'] overflow-x-hidden">
        <h1 className="text-[32px] font-medium text-center">
          Al-Qur{"'"}an Digital Berbasis Website
        </h1>
        <div className="flex flex-col items-center justify-center pt-[52px] lg:flex-row gap-y-4 lg:gap-y-0 overflow-x-hidden">
          <div className="lg:w-1/2">
            <h1 className="text-[32px] font-medium mb-2">Ustadz Adi Hidayat</h1>
            <p className="text-base leading-[26px]">
              Website Qur{"'"}an Pro ini bisa membuat orang lebih mudah
              menemukan ayat ayat AL-Qur{"'"}an. serta dengan adanya website Qur
              {"'"}an Pro ini semua orang bisa mengakses Al-Qur{"'"}an berbasis
              Website dengan simple dan mudah
            </p>
          </div>
          <div>
            <img src={ustadz} alt="ustadz adi hidayat" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
