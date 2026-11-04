import ContactCTA from "../components/contact/ContactCTA"
import ContactHero from "../components/contact/ContactHero"
import DepartmentContactSection from "../components/contact/DepartmentContactSection"
import ContactSection from "../components/ContactSection"
import LocationSection from "../components/Locationsection"


const Contact = () => {
  return (
    <main>
        <ContactHero/>
        <DepartmentContactSection/>
        <ContactSection/>
        <LocationSection/>
        <ContactCTA/>
        
    </main>
  )
}

export default Contact