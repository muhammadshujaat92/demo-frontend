import Home from "../Components/Homepage/Home";
import { fetchData } from "../utils/apiHelper";

export async function generateMetadata() {
  try {
    const metaData = await fetchData("home-pages");
    const { Tabtitle, metaDescription } = metaData?.[0]?.attributes || {};

    return {
      title: Tabtitle || 'Default Title',
      description: metaDescription || 'Default Description',
      openGraph: {
        title: Tabtitle || 'Default Title',
        description: metaDescription || 'Default Description',
        images: [
          {
            url: "https://indiayaatra.com/media/India_Yaatra_logo_1504ad9733.webp",
          }
        ]
      },
      alternates: {
        canonical: `https://indiayaatra.com/`,
      }
    };
  } catch (error) {
    return {
      title: 'Default Title',
      description: 'Default Description'
    };
  }
}

const page = async () => {
  const homeData = await fetchData("home-pages?populate=slides&populate=section1.BackgroundImage&populate=section2.image&populate=section3.image&populate=section4.sideBox&populate=section5.content&populate=section5.content.image&populate=sec6.userImages&populate=sec6.secData&populate=faqSection.BackImage&populate=faqSection.FrontImage&populate=faqSection.AccordianData&populate=lastSectionData.contactDetail&populate=bannerImage");
  return <Home homeData={homeData} />
}

export default page