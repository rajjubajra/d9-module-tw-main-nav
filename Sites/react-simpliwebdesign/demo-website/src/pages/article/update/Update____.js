import React from 'react';
import {useForm} from 'react-hook-form'
import useGetArticle from '../../../hooks/useFetchOne';
import { useSelector } from 'react-redux';


let renderCount = 0;

function Form() {

  /**  uuid in order to fetch the article */
  const {uuid} = useSelector((state) => state.updateId)
  console.log(uuid);
  
  /** get Article */
  
  const {data, isLoading } = useGetArticle(uuid)
  console.log(data, isLoading);
  


  /** use-form-hook */
  const {register, handleSubmit, formState: {errors}} = useForm()
  

  renderCount++;


  if(isLoading) return <div>Loading...</div>
  if(!data) return <div>Error loading data</div>

  console.log(data[0])


  /** FORM SUMBMIT FUNCTION */
  const onSubmit = (data) => console.log(data);

  return (
    <div className='mt-10'>
      <div>Render Count = {renderCount}</div>
      <div className='uppercase my-5'>Update Article</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-flow-row">
            <input 
            className='border border-gray-400 p-1'
            {...register("title", {required: "This field is required"})} placeholder="Title" />
            <span>{errors.title?.message}</span>

            <input 
            className='border border-gray-400 p-1 mt-2'
            {...register("body", {required: "This field is required", minLength: {value: 10, message: "Minimum length is 10"}})} placeholder="Body" />
            <span>{errors.body?.message}</span>

            <input
            className='py-2 mt-2 px-4 bg-blue-600 text-gray-200 font-light tracking-wider cursor-pointer' 
            type="submit" />
        </div>
      </form>

    </div>
  )
}

export default Form
