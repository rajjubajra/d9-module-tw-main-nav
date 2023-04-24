import getAboutPageData from "@/lib/getAboutPageData"






export const metadata = {
  title: 'Yellow-website-Sports:About',
  description: 'This website is created for sports course providers and coaches',
}

export default async function AboutPage() {

  const aboutpagedata: Promise<Aboutpagedata[]> = getAboutPageData();
  const aboutdata = await aboutpagedata;

  
  return (
    <div>
      {
        aboutdata?.data?.length 
        && aboutdata?.data.map(item => {
          return <div key={item.id}>
            <h2>{item.attributes.title}</h2>
            <div>
              <div dangerouslySetInnerHTML={{__html: item.attributes.body.value}} />
            </div>
          </div>
        })
      }
      About Page
    </div>
  )
}