import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="w-full h-[125px] px-[150px] py-2.5 bg-[#fb6816] justify-between items-center inline-flex">
            <img className="w-[177px] h-11" src="/assets/Logo Navbar 2.png" />
                <div className="justify-start items-center gap-[31px] flex">
                    <Link to={'/'} className="flex items-start justify-start gap-2">
                        <img src='/assets/markunread.svg' alt='' className="relative w-6 h-6" />
                <div className="text-[#fffff0] text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug hover:text-orange-200 transition cursor-pointer">Kontak</div>
                    </Link>
                    <Link to={'/'} className="flex items-center justify-start gap-2">
                        <img src='/assets/assignment_in.svg' className="relative w-6 h-6" />
                <div className="text-[#fffff0] text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug hover:text-orange-200 transition cursor-pointer">Tentang Kami</div>
                    </Link>
                    <Link to={'/'} className="flex items-start justify-start gap-2">
                        <img src='/assets/announcement.svg' className="relative w-6 h-6" />
                <div className="text-[#fffff0] text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug hover:text-orange-200 transition cursor-pointer">Bantuan</div>
                    </Link>
        </div>
        </div>
    )
}
export default Footer;