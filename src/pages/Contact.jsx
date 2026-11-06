import ContactForm from "../components/contact/ContactForm"
import ContactHero from "../components/contact/ContactHero"
import DepartmentContactSection from "../components/contact/DepartmentContactSection"
import FacilityVisitSection from "../components/contact/FacilityVisitSection"




const Contact = () => {
  return (
    <main>
        <ContactHero/>
        <DepartmentContactSection/>        
        <ContactForm/>        
        <FacilityVisitSection/>                
    </main>
  )
}

export default Contact