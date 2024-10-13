import axios from 'axios'
import Home from './_(Component)/Home'
import { fetchData } from '@/utils/apiHelper'

export const baseUrl = (category) => {
  const url = `https://admin.indiayaatra.com/api/${category}?populate=*`
  return url
}
export const mainUrl = (suffix) => {
  const url = suffix ? `https://admin.indiayaatra.com/api/${suffix}` : `https://admin.indiayaatra.com`
  return url
}
const page = async () => {
  const homeData = await fetchData("home-pages?populate=slides&populate=section1.BackgroundImage&populate=section2.image&populate=section3.image&populate=section4.sideBox&populate=section5.content&populate=section5.content.image&populate=sec6.userImages&populate=sec6.secData&populate=faqSection.BackImage&populate=faqSection.FrontImage&populate=faqSection.AccordianData&populate=lastSectionData.contactDetail");
  return <Home homeData={homeData} />
}

export default page