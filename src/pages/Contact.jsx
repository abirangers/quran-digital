import { forwardRef, useEffect, useRef } from "react";
import transition from "../transition";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.webp";
import tiktok from "../assets/tiktok.svg";
import payment from "../assets/payment.png";
import Footer from "../components/Footer";
const Contact = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <section className="mt-14">
        <div className="container mx-auto">
          <h1 className="text-[32px] font-semibold text-center mb-9 lg:mb-8">
            Kirim Pesan Disini 😊😊
          </h1>
          {/* Form */}
          <form className="w-full border rounded border-black/20 mb-[90px]">
            <div className="px-4 py-2 text-xl font-normal border-b border-black/20 bg-[rgba(33,37,41,0.03)]">
              Kirim Pesan
            </div>
            <div className="p-3">
              <FormPesan inputRef={ref} />

              <Button />
            </div>
          </form>

          <div className="max-w-[1080px] mx-auto">
            <h1 className="text-[32px] font-normal text-center mb-[30px]">
              Social Media & Donate
            </h1>
            <div className="flex py-3 justify-evenly gap-x-3">
              <a href="#" className="sm:w-[77px] w-[66px]">
                <img src={whatsapp} alt="" className="w-full" />
              </a>
              <a href="#" className="sm:w-[77px] w-[66px]">
                <img src={instagram} alt="" className="w-full" />
              </a>
              <a href="#" className="sm:w-[77px] w-[66px]">
                <img src={tiktok} alt="" className="w-full" />
              </a>
              <a href="#" className="sm:w-[77px] w-[66px]">
                <img src={payment} alt="" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const Button = () => {
  return (
    <button
      className="font-['Poppins'] mx-3 mb-3 px-5 text-base font-normal bg-primary text-white rounded-md py-2 w-max inline-block"
      type="submit"
    >
      Simpan
    </button>
  );
};

const Label = ({ title, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={`text-xl mr-3`}>
      {title}
    </label>
  );
};

const Input = ({ type, id, name, inputRef }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required
      className="md:w-4/5 w-full px-3 py-2 text-base font-normal leading-normal text-[#212529] border border-[#dee2e6] rounded-md outline-none"
      ref={inputRef}
    />
  );
};

const InputForm = (props) => {
  const { title, type, id, name, inputRef } = props;
  return (
    <>
      <Label title={title} htmlFor={id} />
      <Input type={type} id={id} name={name} inputRef={inputRef} />
    </>
  );
};

const FormInput = ({ children }) => {
  return (
    <div className="flex flex-col justify-between p-3 md:flex-row gap-y-3">
      {children}
    </div>
  );
};

const FormPesan = ({ inputRef }) => {
  return (
    <>
      <FormInput>
        <InputForm
          title={"nama"}
          id={"nama"}
          name={"nama"}
          type={"text"}
          inputRef={inputRef}
        />
      </FormInput>
      <FormInput>
        <InputForm
          title={"No.Telephone"}
          id={"nohp"}
          name={"nohp"}
          type={"number"}
        />
      </FormInput>
      <FormInput>
        <InputForm title={"Email"} id={"email"} name={"email"} type={"email"} />
      </FormInput>
      <FormInput>
        <Label title={"Pesan"} htmlFor={"pesan"} />
        <textarea
          id="pesan"
          name="pesan"
          required
          className="md:w-4/5 w-full px-3 py-2 text-base font-normal leading-normal text-[#212529] border border-[#dee2e6] rounded-md outline-none min-h-[80px]"
        />
      </FormInput>
    </>
  );
};

export default transition(Contact);
