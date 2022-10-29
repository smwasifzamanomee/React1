import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Components/Container'
import Button from '../../Components/Ui/Button'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import FormInput from '../../Components/Form/FormInput'
import { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const URL = `http://127.0.0.1:8000/api/register/`;

  const handleRegister =  async (e) => {
    e.preventDefault();

    const userCredential = {
      username,
      email,
      password
    }

    // fetch(URL, {
    //   method: 'POST',
    //   body: JSON.stringify(userCredential),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));


    // Async fetch
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userCredential)
    });
    const data = await response.json();
    console.log(data);


  }


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
            <Button className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6">
              <FaFacebookF className="text-3xl text-[#3b5998]" /> Log in with
              Facebook
            </Button>
          </div>

        </div>

        <form
          onSubmit={handleRegister}
          className="flex-1 h-full p-8 ">
          <h3 className="text-3xl font-bold text-center">Sign Up</h3>

          <FormInput setValue={setUsername} type='text' label="Username" value={username}/>
          <FormInput setValue={setEmail} type="email" label="Email" value={email} />
          <FormInput setValue={setPassword} type="password" label="Password" value={password} />
          <Button type='submit' className={"w-[400px] bg-bg_info text-light"}>Sign Up</Button>
        </form>
      </div>
    </Container>
  )
}

export default Register
