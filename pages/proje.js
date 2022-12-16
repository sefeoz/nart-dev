function Proje(){
    return(<>
        <section className="site-6xl-container mt-16">
            <h1 className="text-white text-4xl font-extrabold text-center">Projelerimiz</h1>
        </section>

            {/*<----------------------------SECTION END------------------------------------------------------>*/}
            <section className={"bg-white mt-10 py-10"}>
                <div className="site-6xl-container">
                    <div className="lg:grid grid-cols-3">
                        <div className="mx-5 my-5">
                            <img className={"mx-auto rounded-xl"} src="https://picsum.photos/id/60/300/300/" alt=""/>
                            <p className={"text-center text-2xl font-bold mt-5"}>Javascrip ile Akbil Sistemi</p>
                        <Link href={"/akbil-sistemi"}>
                    <button className="text-center bg-white hover:bg-nav-green transition py-2 px-5 rounded-full text-center">Devam Et <FontAwesomeIcon className="my-auto" icon={faArrowRight}/></button>
                        </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Proje
