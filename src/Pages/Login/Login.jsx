import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle} from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import Container from '../../Components/Container'
import Button from '../../Components/Ui/Button'
import FormInput from '../../Components/Form/FormInput'

const Login = () => {
  return (
    <Container>
    <div className="md:w-[1000px] mx-auto min-h-max shadow-lg border-t border-primary md:flex justify-between gap-8 items-center">

       <div className=" bg-primary h-full flex-1 flex flex-col justify-center items-center md:py-28">
         {/* Forgot Password */}
         <Link
           to="/register"
           className="md:w-[300px] text-light underline text-center mt-6 text-sm  block"
         >
           Are you new here?
         <Button className='w-full bg-light py-3 px-12 text-primary text-lg mt-2'>
           Register
         </Button>
         </Link>

         <div className="mt-12 md:w-[300px]">
         <Button className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6">
             <FcGoogle className="text-3xl" />
             <span className="ml-4">Log in with Google</span>
           </Button>
           <Button className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6">
             <FaFacebookF className="text-3xl text-[#3b5998]" /> Log in with
             Facebook
           </Button>
         </div>

       </div>

       <form 
       className="flex-1 px-8 py-28">
         <h3 className="text-3xl font-bold mb-6 text-center">Login</h3>
         <FormInput  setValue='setEmail'type="email" label="Email"/>
         <FormInput  setValue='setPassword' type="password" label="Password"/>
         <Button type='submit' className={"w-[400px] bg-bg_info text-light"}>Sign in</Button>
       </form>

     </div>
   </Container>
  )
}

export default Login