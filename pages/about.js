function About(){
    return(<>
        <section className="site-6xl-container mt-16">
            <h1 className="text-white text-4xl font-extrabold text-center">Hakkımızda</h1>
            <p className="text-gray-200 text-center text-3xl font-thin mt-5">Nart Developer Olarak Gelecek İçin Çalışmaktan Gurur Duyuyoruz.</p>
            <div className={"bg-white p-10 my-10 rounded-xl"}>
                <p className={"text-3xl font-extrabold text-gray-800"}>Nart Developer, 2022 yılında Nart tarafından kurulmuş bağımsız bir yazılım şirketidir.</p>
                <p className={"text-xl mt-5 font-light text-gray-700"}>Nart Developer'ın amacı geleceği herkese hazır hale getirebilmek için dünyadaki herkesin yazılım ile bilgilendirilmesi ve herkese bu gelecekte birer yer verilmesidir. Bunun için herkesi yazılım gibi çeşitli teknolojik alanlarda onlara bir olanak ve yardımcı bir alan oluşturmaktadır.</p>
            </div>
        </section>
            {/*<----------------------------SECTION END------------------------------------------------------>*/}
            <section className="site-6xl-container pb-20">
                <h1 className={"text-white text-4xl text-center font-extrabold"}>Verilerimiz</h1>
                <p className="text-white font-thin text-center text-3xl mt-5">Kurulduğumuz andan beri gelişmekte olup bu gelişmeleri sizlerle paylaşıyoruz.</p>
                <div className="lg:grid grid-cols-3 mt-10">
                    <div className="mt-10">
                        <h1 className={"text-nav-green text-8xl text-center"}>28K</h1>
                        <p className="text-white text-3xl text-center mt-10 font-bold">Kod Satırı</p>
                    </div>
                    <div className={"mt-10"}>
                        <h1 className={"text-nav-green text-8xl text-center"}>6</h1>
                        <p className="text-white text-3xl text-center mt-10 font-bold">Ekibimiz</p>
                    </div>
                    <div className="mt-10">
                        <h1 className={"text-nav-green text-8xl text-center"}>7</h1>
                        <p className="text-white text-3xl text-center mt-10 font-bold">Proje</p>
                    </div>
                </div>
            </section>
            {/*<----------------------------SECTION END------------------------------------------------------>*/}
            <section className={"bg-white mt-10 py-10"}>
                <div className="site-6xl-container">
                    <div className="lg:grid grid-cols-3">
                        <div className="mx-5 my-5">
                            <img className={"mx-auto rounded-xl"} src="https://picsum.photos/id/60/300/300/" alt=""/>
                            <p className={"text-center text-2xl font-bold mt-5"}>Baha Nart Şenel</p>
                            <p className="text-center text-xl mt-6 font-light">Nart CEO</p>
                        </div>
                        <div className="mx-5 my-5">
                            <img className={"mx-auto rounded-xl"} src="https://picsum.photos/id/60/300/300/" alt=""/>
                            <p className={"text-center text-2xl font-bold mt-5"}>Şadan Efe Öz</p>
                            <p className="text-center text-xl mt-6 font-light">Team Leader</p>
                        </div>
                        <div className="mx-5 my-5">
                            <img className={"mx-auto rounded-xl"} src="https://picsum.photos/id/60/300/300/" alt=""/>
                            <p className={"text-center text-2xl font-bold mt-5"}>Emirhan Şen</p>
                            <p className="text-center text-xl mt-6 font-light">Marketing Manager</p>
                        </div>
                            <div className="mx-5 my-5">
                                <img className={"mx-auto rounded-xl"} src="https://picsum.photos/id/48/300/300/" alt=""/>
                                <p className={"text-center text-2xl font-bold mt-5"}>Eren Ulaş Özcan</p>
                                <p className="text-center text-xl mt-6 font-light">Web Design</p>
                            </div>
                        <div className="mx-5 my-5">
                                <img className={"mx-auto rounded-xl"} src="https://picsum.photos/id/119/300/300/" alt=""/>
                                <p className={"text-center text-2xl font-bold mt-5"}>Oğuzhan Kavuncuoğlu</p>
                                <p className="text-center text-xl mt-6 font-light">Marketing Manager</p>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
