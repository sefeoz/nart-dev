import '../styles/global.css';
import Header from "../components/header";
function MyApp({Component, pageProps}) {
    return( <div>
            <main>
                <Header/>
                <Component {... pageProps}/>
            </main>
        </div>
    )
}

export default MyApp