import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Seo from "../components/seo/Seo"

const BaseLayout = ({children, title, description}) => {
  return (
    <>
      <Seo title={title} description={description}/>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default BaseLayout