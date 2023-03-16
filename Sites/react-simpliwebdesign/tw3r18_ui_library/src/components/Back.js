import {useNavigate} from 'react-router-dom'

function Back() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='cursor-pointer p-2 mx-4' onClick={() => navigate("/") }>X</div>
    </div>
  )
}

export default Back