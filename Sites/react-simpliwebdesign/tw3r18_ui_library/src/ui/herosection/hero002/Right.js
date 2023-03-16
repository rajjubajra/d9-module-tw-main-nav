import {smartwatch_p} from '../../../assets';
import Title from './Title';



function Right({image}) {

  return (
    <div className='w-full sm:h-screen flex flex-col gap-6 items-center justify-center'>
      <div className='sm:hidden mt-16'>
        <Title />
      </div>
      <div className="sm:w-96 sm:h-96 w-72 h-72 bg-gray-300 shadow-lg border border-b border-gray-900 flex justify-center items-center">
        <img className="w-40" src={smartwatch_p} alt="smart watch" />
      </div>
    </div>
  )
}

export default Right
