const DeskSurah = ({ parentRef, closeDesk, data, className }) => {
  return (
    <section
      className={`fixed inset-0 z-50 w-full flex items-center justify-center min-h-screen overflow-y-auto px-4 bg-black bg-opacity-25`}
      onClick={closeDesk}
      ref={parentRef}
    >
      <div
        className={`w-full max-w-xl p-6 overflow-y-auto bg-white shadow-xl max-h-96 rounded-2xl`}
      >
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Deskripsi Surah
        </h3>
        <p
          className={`mt-4 text-base font-normal ${className}`}
          dangerouslySetInnerHTML={{ __html: data.deskripsi }}
        ></p>
      </div>
    </section>
  );
};

export default DeskSurah;
