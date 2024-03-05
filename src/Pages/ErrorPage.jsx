import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
   <section className='flex justify-center items-center'>
     <div>
      <Link to='/' > Go Back Home</Link>
      <h2 className='5xl blue-500'>
        Page Not Found
      </h2>

     </div>

   </section>
  )
}

export default ErrorPage