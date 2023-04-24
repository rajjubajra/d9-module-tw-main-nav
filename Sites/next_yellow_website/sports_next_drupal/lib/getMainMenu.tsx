
export default async function getMainMenu() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/menu_items/tennis-main-menu`)
  if(!res.ok) throw new Error("Failed to fetch tennis-menu Data");
  return res.json();
}
