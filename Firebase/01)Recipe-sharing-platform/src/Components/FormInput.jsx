
const FormInput = ({name,placeholder,register}) => {
  return (
    <>
    <input type="text" name={name} placeholder={placeholder} {...register} className='w-full px-5 py-2 rounded-md'/>
    </>
  )
}

export default FormInput