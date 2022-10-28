import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Components/Container'
import Button from '../../Components/Ui/Button'
import { FcGoogle} from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import FormInput from '../../Components/Form/FormInput'

const Register = () => {
  return (
    <Container>
      <div className="md:w-[1000px] mx-auto min-h-max shadow-lg border-t border-primary md:flex  justify-between gap-8 items-center ">
        <div className=" bg-primary h-full flex-1 flex flex-col justify-center items-center md:py-36">
          {/* Forgot Password */}
          <Link
            to="/login"
            className="md:w-[300px] text-light underline text-center mt-6 text-sm  block"
          >
            Have you an account?
          <Button className='w-full bg-light py-3 px-12 text-primary text-lg mt-2'>
           Log in
          </Button>
          </Link>

          <div className="mt-12 md:w-[300px]">
            <Button className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6">
              <FcGoogle className="text-3xl" />
              <span className="ml-4">Log in with Google</span>
            </Button>
            <Button  className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6">
              <FaFacebookF className="text-3xl text-[#3b5998]" /> Log in with
              Facebook
            </Button>
          </div>

        </div>

        <form 
        className="flex-1 h-full p-8 ">
          <h3 className="text-3xl font-bold text-center">Sign Up</h3>
          {/* First Name */}
          <FormInput  setValue='setFirstName' type="text" label="First Name" />
          <FormInput  setValue='setLastName' type="text" label={"Last Name"} />
          <FormInput  setValue='setEmail' type="email" label="Email" />
          <FormInput  setValue='setPhone' type="tel" label="Phone" />
          <FormInput  setValue='setAddress' type="text" label="Adress" />
          <FormInput setValue='setPassword' type="password" label="Password" />
          <FormInput setValue='setConfrimPassword' type="password" label="Confirm Password" />
          <Button type='submit' className={"w-[400px] bg-bg_info text-light"}>Sign Up</Button>
        </form>
      </div>
    </Container>
  )
}

export default Register
