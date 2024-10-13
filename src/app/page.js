import axios from 'axios'
import Home from './_(Component)/Home'

export const baseUrl = (category) => {
  const url = `https://admin.indiayaatra.com/api/${category}?populate=*`
  return url
}
export const mainUrl = (prefix) => {
  const url = prefix ? `https://admin.indiayaatra.com/api/${prefix}` : `https://admin.indiayaatra.com`
  return url
}
const page = async () => {
  try {
    const url = mainUrl('home-pages?populate=slides&populate=section1.BackgroundImage&populate=section2.image&populate=section3.image&populate=section4.sideBox&populate=section5.content&populate=section5.content.image&populate=sec6.userImages&populate=sec6.secData&populate=faqSection.BackImage&populate=faqSection.FrontImage&populate=faqSection.AccordianData&populate=lastSectionData.contactDetail')
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const homeData = response.data.data;    
    return <Home homeData={homeData}/>
  } catch (error) {
    console.log(error.message)
    return <div>Internal server error</div>
  }
}

export default page