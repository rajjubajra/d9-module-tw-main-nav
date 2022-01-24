import InputField from "./InputField"



function BookForm() {

  return (
  <div>
    <form>
      <h1 className="text-2xl pb-4">Book List Entry Form</h1>
      <InputField  title="Title" type="text"  />
      <InputField  title="Author" type="text" />
      <InputField  title="ISBN" type="text" />
      <div>
        <button className="px-8 py-2 bg-gray-200 mt-5">Submit</button>
      </div>
      
    </form>
  </div>
      

    
  )
}

export default BookForm
