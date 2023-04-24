export default async function getAboutPageData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/node/tennis_about_us`);
  if(!res.ok) throw new Error("Failed to fetch About page data");
  return res.json();
}
