

function InputField({title,type, required}) {
  return (
    <div className="flex flex-col mt-2">
    <label>{title}</label>
    <input className="border boarder-gray-200 p-2" type={type} required={required}  />
    </div>
  )
}

export default InputField
