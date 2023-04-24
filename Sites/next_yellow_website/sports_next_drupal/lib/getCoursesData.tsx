export default async function getCoursesData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/node/tennis_courses?include=field_course_type,field_venue`);
    if(!res.ok) throw new Error("Fail to fetch");
    return res.json();
}
