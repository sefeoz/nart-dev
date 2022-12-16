import Link from "next/link";

function Blog() {
    return <div>
        <div className={"site-6xl-container"}>
            <h1 className="text-gray-100 text-4xl text-center mt-10">Blog</h1>
            <p className="text-gray-300 text-center text-3xl my-5 font-thin">Düşünceleriniz ve Fikirleriniz</p>
            <div className="lg:grid grid-cols-4 mx-4">
                <div className="bg-white my-10 rounded-xl p-7 mx-2">
                    <img src="/index-3.jpg" className="max-h-44 mx-auto rounded-xl" alt=""/>
                    <Link href={"/blog/post"}>
                    <h1 className="font-bold text-center text-2xl mt-6">Blog Title</h1>
                    </Link>
                    <p className="text-center">Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content </p>
                </div>
                <div className="bg-white my-10 rounded-xl p-7 mx-2">
                    <img src="/index-3.jpg" className="max-h-44 mx-auto rounded-xl" alt=""/>
                    <Link href={"/blog/post"}>
                    <h1 className="font-bold text-center text-2xl mt-6">Blog Title</h1>
                    </Link>
                    <p className="text-center">Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content </p>
                </div>
                <div className="bg-white my-10 rounded-xl p-7 mx-2">
                    <img src="/index-3.jpg" className="max-h-44 mx-auto rounded-xl" alt=""/>
                    <Link href={"/blog/post"}>
                    <h1 className="font-bold text-center text-2xl mt-6">Blog Title</h1>
                    </Link>
                    <p className="text-center">Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content </p>
                </div>
                <div className="bg-white my-10 rounded-xl p-7 mx-2">
                    <img src="/index-3.jpg" className="max-h-44 mx-auto rounded-xl" alt=""/>
                    <Link href={"/blog/post"}>
                    <h1 className="font-bold text-center text-2xl mt-6">Blog Title</h1>
                    </Link>
                    <p className="text-center">Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content </p>
                </div>
                <div className="bg-white my-10 rounded-xl p-7 mx-2">
                    <img src="/index-3.jpg" className="max-h-44 mx-auto rounded-xl" alt=""/>
                    <Link href={"/blog/post"}>
                    <h1 className="font-bold text-center text-2xl mt-6">Blog Title</h1>
                    </Link>
                    <p className="text-center">Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content </p>
                </div>
                <div className="bg-white my-10 rounded-xl p-7 mx-2">
                    <img src="/index-3.jpg" className="max-h-44 mx-auto rounded-xl" alt=""/>
                    <Link href={"/blog/post"}>
                    <h1 className="font-bold text-center text-2xl mt-6">Blog Title</h1>
                    </Link>
                    <p className="text-center">Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content </p>
                </div>
                <div className="bg-white my-10 rounded-xl p-7 mx-2">
                    <img src="/index-3.jpg" className="max-h-44 mx-auto rounded-xl" alt=""/>
                    <Link href={"/blog/post"}>
                    <h1 className="font-bold text-center text-2xl mt-6">Blog Title</h1>
                    </Link>
                    <p className="text-center">Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content </p>
                </div>
                <div className="bg-white my-10 rounded-xl p-7 mx-2">
                    <img src="/index-3.jpg" className="max-h-44 mx-auto rounded-xl" alt=""/>
                    <Link href={"/blog/post"}>
                    <h1 className="font-bold text-center text-2xl mt-6">Blog Title</h1>
                    </Link>
                    <p className="text-center">Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content Blog Content </p>
                </div>


            </div>
        </div>
            </div>

}
export default Blog