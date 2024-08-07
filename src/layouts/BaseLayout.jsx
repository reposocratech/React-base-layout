import { Helmet } from "react-helmet-async"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const BaseLayout = ({children, title, description}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:url" content={window.location.href}/>
        <meta property="og:type" content="website"/>
      </Helmet>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default BaseLayout