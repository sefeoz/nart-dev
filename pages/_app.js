import '../styles/global.css';
import Header from "../components/header";
import Footer from "../components/footer";
import {Auth0Provider} from "@auth0/auth0-react";

function MyApp({Component, pageProps}) {
    return(
        <Auth0Provider
        domain={"dev-k32gu9l5.us.auth0.com"}
        clientId={"t3G36omFzCjIfWgr79GKjG5z3BfE3dlw"}
        redirectUri={"https://nartdeveloper.com"}
        >
        <div>
            <main className="mt-9">
                <Header/>
                <Component {... pageProps}/>
                <Footer/>
            </main>
        </div>
        </Auth0Provider>
    )
}

export default MyApp