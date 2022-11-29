import Link from "next/link";
import {useRouter} from "next/router";
export default function Header(){
    const router = useRouter();
    return <nav className="site-4xl-container my-9">
        <div className="flex justify-between items-center">
            <div className={`text-nav-green text-2xl`}>
                <Link href={"/"}>
                    Nart Developer
                </Link>
            </div>
<div className="flex items-center">
        <ul className="flex space-x-12">
            <li className={`${router.pathname === "/" ? "text-nav-green" : "text-white" } hover:text-nav-green transition`}>
                <Link href={"/"}>Ana Sayfa</Link>
            </li>
            <li className={`${router.pathname === "/about" ? "text-nav-green" : "text-white" } hover:text-nav-green transition`}>
                <Link href={"/about"}>Hakkımızda</Link>
            </li>
            <li className={`${router.pathname === "/blog" ? "text-nav-green" : "text-white" } hover:text-nav-green transition`}>
                <Link href={"/blog"}>Blog</Link>
            </li>
        </ul>
    <div>
        <button className="border-2 border-nav-green text-white hover:bg-white hover:text-nav-green hover:border-white ml-12 rounded-full px-5 py-2 transition">Kayıt Ol</button>
    </div>
</div>
        </div>

    </nav>
}