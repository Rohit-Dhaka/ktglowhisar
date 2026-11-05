// import ContactCTA from "../components/contact/ContactCTA"
import ContactForm from "../components/contact/ContactForm"
import ContactHero from "../components/contact/ContactHero"
import DepartmentContactSection from "../components/contact/DepartmentContactSection"
import FacilityVisitSection from "../components/contact/FacilityVisitSection"
// import ContactSection from "../components/home/ContactSection"
// import LocationSection from "../components/home/Locationsection"



const Contact = () => {
  return (
    <main>
        <ContactHero/>
        <DepartmentContactSection/>        
        <ContactForm/>        
        <FacilityVisitSection/>
        {/* <ContactCTA/> */}
        
    </main>
  )
}

export default Contact