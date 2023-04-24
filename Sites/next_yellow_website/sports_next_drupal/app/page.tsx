import Image from 'next/image'
import getHomePageData from '@/lib/getHomePageData'


export const metadata = {
  title: 'Yellow Webiste for Sports',
  description: 'This website is created for sports course providers and coaches',
}


export default async function Home() {

  const homepagedata: Promise<Homepagedata[]> = getHomePageData();
  const homedata = await homepagedata;
  //console.log("homepage data", homedata);

  return (
    <main>
      {
        homedata?.data?.length &&
        homedata?.data?.map(item => {
          return(
            <div key={item.id}>
            <h2>{item.attributes.title}</h2>
            <div>
              <div dangerouslySetInnerHTML={{__html: item.attributes.body.value}} />
            </div>
            </div>
          )
        })
      }
    </main>
  )
}
