import getCoursesData from "@/lib/getCoursesData";





export const metadata = {
  title: 'Yellow-website - Sports:Courses',
  description: 'This website is created for sports course providers and coaches',
}

export default async function CoursesPage() {

  const courseData: Promise<CourseData[]> = getCoursesData();
  const data = await courseData;
  console.log("couser data",data);
  const courseInclude: Promise<CourseInclude[]> = getCoursesData();
  const includes = await courseInclude;
  

  function getInclude(id){
    //console.log("course include ",includes);
    //console.log("FIND INDEX ID", id);

    const index = includes.included.findIndex(inc => inc.id === id );
    
    //console.log("INDEX FOUND ", index);
    return includes.included[index].attributes.name
  }

  return (
    <div>
      <h1>Tennis Courses:</h1>
      <div className="my-4">
        <ul className="flex gap-3">
          <li>Beginner</li>
          <li>Intermediate</li>
          <li>Advanced</li>
          <li>Improver</li>
        </ul>
      </div>
      <div className="border-t my-6 grid grid-cols-1 md:grid-cols-3">
        {
          data?.data?.length &&
          data?.data?.map(item => {
            return <div key={item.id} className="border p-4 m-4">
                  <h3>Course: {item.attributes.title}</h3>
                  <div>
                      <div dangerouslySetInnerHTML={{__html: item.attributes.body.value}} />
                  </div>
                  <div>
                    <h3>Course Calendar:</h3>
                    <div>
                      {item.attributes.field_course_calendar.value} to 
                      {item.attributes.field_course_calendar.end_value}
                    </div>
                  </div>
                  <div>
                    <h3>Type:</h3>
                    <div>{getInclude(item.relationships.field_course_type.data.id)}</div>
                  </div>
                  <div>
                    <h3>Venue:</h3>
                    <div>{getInclude(item.relationships.field_venue.data.id)}</div>
                  </div>
                  <div>
                    <h3>Lesson Time:</h3>
                    <div>{item.attributes.field_time_from_to}</div>
                  </div>
            </div>
          })

        }
      </div>

    </div>
  )
}
