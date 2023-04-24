import Link from 'next/link';
import getMainMenu from '@/lib/getMainMenu';

export default async function Headers() {

  const mainmenu: Promise<Tennismainmenu[]> = await getMainMenu();
  const menudata = await mainmenu
  //console.log(menudata);

  return (
    <div className='my-2 mx-4 flex  justify-between'>
    <ul className="flex gap-2">
      {
        menudata?.data?.length &&
        menudata?.data?.map(item => {
          let url = item.attributes.url.replace("/backend/","/")
          return <li key={item.id}>
              <Link href={url}>
                {item.attributes.title}
              </Link>
            </li>
        })
      }
    </ul>
    <div>
      <Link href="/">Login</Link>
    </div>
    </div>
  )
}
