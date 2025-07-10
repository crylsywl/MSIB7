import Navbar from "../Components/Elements/Navbar/Navbar";
import Footer from "../Components/Elements/Footer/Footer";
import Button from "../Components/Elements/Button/Index";
import { Link } from "react-router-dom";

const Mentoring = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-col h-[300px] justify-center items-center mt-[62px] gap-[18px] flex">
        <h1 className="w-[572px] text-center text-black text-[32px] font-semibold font-['Plus Jakarta Sans'] leading-[38.40px]">
          Siapkan Karier Impianmu dengan Review Profesional!
        </h1>
        <h6 className="w-[414px] text-center text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">
          Optimalkan CV, portofolio, dan keterampilan interview-mu bersama pakar
          industri.
        </h6>
        <Button classname="h-fit text-sm px-6 py-2 shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] transition  hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] rounded-[15px] bg-[#fb6816] justify-center items-center gap-1.5 text-[#fffff0] hover:bg-[#fdab7f]">
          Mulai Sekarang!
        </Button>
      </div>
      <div className="h-[301px] bg-[#a49af6] rounded-tl-[20px] rounded-tr-[20px] mt-[209px]">
        <div className="mx-[150px] absolute top-[400px] left-[190px] right-[190px] justify-center items-center gap-[20px] flex">
          <div className="w-[263px] h-[335px] bg-[#4c37ee] rounded-[10px] flex-col justify-between py-[40px] items-center gap-auto inline-flex">
            <img src="/assets/CV.png" alt="" className="w-[96px] h-[83px]" />
            <div className="text-center text-[#fffff0] text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">
              JobReady CV
            </div>
            <div className="w-[209px] text-center text-[#fffff0] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight tracking-tight">
              Buat CV kamu lebih menarik dan tingkatkan persentase peluang
              diterima kerja!
            </div>
            <Button
              type="Link"
              to="/payment"
              classname="bg-teal-300 w-[189px] h-[40px] item-center hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] hover:bg-[#adffeb] shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] flex justify-center text-cente items-center"
            >
              Daftar
            </Button>
          </div>
          <div className="w-[263px] h-[335px] bg-[#4c37ee] rounded-[10px] flex-col justify-between py-[40px] items-center gap-2 inline-flex">
            <img
              src="/assets/Portfolio.png"
              alt=""
              className="w-[96px] h-[83px]"
            />
            <div className="text-center text-[#fffff0] text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">
              PortoPolish
            </div>
            <div className="w-[209px] text-center text-[#fffff0] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight tracking-tight">
              Buat portofolio terbaikmu, agar Rekruter semakin tertarik untuk
              merekrut kamu!
            </div>
            <Button
              type="Link"
              to="/portopolish"
              classname="bg-teal-300 w-[189px] h-[40px] item-center hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] hover:bg-[#adffeb] shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] flex justify-center text-cente items-center"
            >
              Daftar
            </Button>
          </div>
          <div className="w-[263px] h-[335px] bg-[#4c37ee] rounded-[10px] flex-col justify-between py-[40px] items-center gap-2 inline-flex">
            <img
              src="/assets/Interview.png"
              alt=""
              className="w-[96px] h-[83px]"
            />
            <div className="text-center text-[#fffff0] text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">
              WalkView
            </div>
            <div className="w-[209px] text-center text-[#fffff0] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight tracking-tight">
              Latih jawabanmu dan bangun rasa percaya diri untuk tampil maksimal
              saat wawancara!
            </div>
            <Button
              type="Link"
              to="/chitchat"
              classname="bg-teal-300 w-[189px] h-[40px] item-center hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] hover:bg-[#adffeb] shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] flex justify-center text-cente items-center"
            >
              Daftar
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-[150px] my-[40px] gap-[20px] flex flex-col">
        <h1 className="text-[24px] font-bold flex">Daftar kelas</h1>
        <div className="bg-[#fffff0] w-full h-fit px-[40px] py-[38px] rounded-[20px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.3)] justify-start items-center gap-[30px] inline-flex">
          <Link to="/">
            <div className="hover:ring-1 hover:ring-[#fdab7f] flex items-center p-[20px] gap-[18px] justify-start h-[150px] w-fit shadow-[0px_4px_10px_rgba(0,_0,_0,_0.3)] bg-[#fffff0] rounded-[10px]">
              <img
                src="/assets/CV.png"
                alt=""
                className="w-[100px] h-auto"
              />
              <div className="flex flex-col items-start justify-center gap-1">
                <div>
                  <h1 className="text-center text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">
                    JobReady CV
                  </h1>
                </div>
                <div>
                  <h6>Batch 5 | 30-31 November</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div></div>
      <div className="mx-[150px] my-[40px] gap-[20px] flex flex-col items-center">
        <h1 className="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">
          Rekomendasi Paket Spesial Buat Kamu!
        </h1>
        <div className="gap-[20px] flex flex-row items-center justify-center">
          <div className="w-[316px] h-[413px] bg-[#fffff0] p-[20px] rounded-[10px] border-2 border-[#fb6816] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.3)] flex-col justify-between items-start gap-[10px] inline-flex">
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="text-center text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">
                Career Excellence Pack
              </h1>
              <div className="bg-black h-[1px] w-full rounded-full " />
            </div>
            <div className="gap-[20px] flex flex-row items-center justify-center">
              <img src="/assets/point.svg" alt="" />
              <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                10 kali review CV selama 4 bulan
              </div>
            </div>
            <div className="gap-[20px] flex flex-row items-center justify-start">
              <img src="/assets/point.svg" alt="" />
              <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                10 Template CV (Inggris/Indonesia)
              </div>
            </div>
            <div className="gap-[20px] flex flex-row items-center justify-start">
              <img src="/assets/point.svg" alt="" />
              <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                Linkedin Guiedline
              </div>
            </div>
            <div className="gap-[20px] flex flex-row items-center justify-center">
              <img src="/assets/point.svg" alt="" />
              <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                5 kali simulasi interview
              </div>
            </div>
            <div className="gap-[20px] flex flex-row items-center justify-center">
              <img src="/assets/point.svg" alt="" />
              <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                5 kali review portofolio
              </div>
            </div>
            <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">
              Rp 50.000
            </div>
            <Button
              type="Link"
              to="/"
              classname="h-fit w-full text-sm px-6 py-2 shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] transition  hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] rounded-[15px] flex bg-[#fb6816] justify-center items-center gap-1.5 text-[#fffff0] hover:bg-[#fdab7f]"
            >
              Daftar
            </Button>
          </div>
          <div className="w-[316px] h-[413px] bg-[#fffff0] p-[20px] rounded-[10px] border-2 border-[#fb6816] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.3)] flex-col justify-between items-start gap-[15px] inline-flex">
            <div className="flex flex-col items-center justify-center w-full gap-1">
              <h1 className="text-center text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">
                Career Starter Kit
              </h1>
              <div className="bg-black h-[1px] w-full rounded-full " />
            </div>
            <div className="gap-[20px] flex flex-col items-start h-full justify-start">
              <div className="gap-[20px] flex flex-row items-center justify-center">
                <img src="/assets/point.svg" alt="" />
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                  2 kali review CV selama satu bulan
                </div>
              </div>
              <div className="gap-[20px] flex flex-row items-center justify-start">
                <img src="/assets/point.svg" alt="" />
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                  2 Template CV (Inggris/Indonesia)
                </div>
              </div>
              <div className="gap-[20px] flex flex-row items-center justify-start">
                <img src="/assets/point.svg" alt="" />
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                  1 kali simulasi interview
                </div>
              </div>
              <div className="gap-[20px] flex flex-row items-center justify-center">
                <img src="/assets/point.svg" alt="" />
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                  1 kali review portofolio
                </div>
              </div>
            </div>

            <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">
              Rp 50.000
            </div>
            <Button
              type="Link"
              to="/"
              classname="h-fit w-full text-sm px-6 py-2 shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] transition  hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] rounded-[15px] flex bg-[#fb6816] justify-center items-center gap-1.5 text-[#fffff0] hover:bg-[#fdab7f]"
            >
              Daftar
            </Button>
          </div>
          <div className="w-[316px] h-[413px] bg-[#fffff0] p-[20px] rounded-[10px] border-2 border-[#fb6816] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.3)] flex-col justify-between items-start gap-[15px] inline-flex">
            <div className="flex flex-col items-center justify-center w-full gap-1">
              <h1 className="text-center text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-relaxed tracking-tight">
                Success Sprint Four
              </h1>
              <div className="bg-black h-[1px] w-full rounded-full " />
            </div>
            <div className="gap-[20px] flex flex-col items-start h-full justify-start">
              <div className="gap-[20px] flex flex-row items-center justify-center">
                <img src="/assets/point.svg" alt="" />
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                  4 kali review CV selama 2 bulan
                </div>
              </div>
              <div className="gap-[20px] flex flex-row items-center justify-start">
                <img src="/assets/point.svg" alt="" />
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                  4 Template CV (Inggris/Indonesia)
                </div>
              </div>
              <div className="gap-[20px] flex flex-row items-center justify-start">
                <img src="/assets/point.svg" alt="" />
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                  4 kali simulasi interview
                </div>
              </div>
              <div className="gap-[20px] flex flex-row items-center justify-center">
                <img src="/assets/point.svg" alt="" />
                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">
                  4 kali review portofolio
                </div>
              </div>
            </div>

            <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">
              Rp 50.000
            </div>
            <Button
              type="Link"
              to="/"
              classname="h-fit w-full text-sm px-6 py-2 shadow-[inset_0px_-4px_10px_rgba(0,_0,_0,_0.3)] transition  hover:shadow-[inset_0px_4px_10px_rgba(0,_0,_0,_0.3)] rounded-[15px] bg-[#fb6816] justify-center items-center flex gap-1.5 text-[#fffff0] hover:bg-[#fdab7f]"
            >
              Daftar
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mentoring;
