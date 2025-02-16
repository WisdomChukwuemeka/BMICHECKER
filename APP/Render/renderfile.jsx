import { Header } from "./components/header"
import { Main } from "./components/BMI"
import { Firstcontainer } from "./components/firstsection"
import { Footer } from "./components/Footer"
export const Productrender = () => {
    return(
        <>
        <Header />
        <Firstcontainer />
           <Main /> 
           <Footer />
        </>
    )
}