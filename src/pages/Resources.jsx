import PDFDocumentsSection from "../components/resources/PDFDocumentsSection"
import ResourcesCTASection from "../components/resources/ResourcesCTASection"
import ResourcesFAQSection from "../components/resources/ResourcesFAQSection"
import ResourcesHero from "../components/resources/ResourcesHero"


const Resources = () => {
  return (
    <main>
        <ResourcesHero/>
        <PDFDocumentsSection/>
        <ResourcesCTASection/>
        <ResourcesFAQSection/>
    </main>
  )
}

export default Resources