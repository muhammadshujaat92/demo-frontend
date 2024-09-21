import Home from './_(Component)/Home'

export const baseUrl = (category) => {
  const url = `https://inviting-thrill-7bbda9fa6e.strapiapp.com/api/${category}?populate=*`
  return url
}

const page = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default page