import Header from "../components/Header";
import Input from "../components/Input";
import { supabase } from "../api/supabase";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Header
        heading="Create a new account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="-space-y-px">
          <Input
            placeholder="Enter email address"
            autoComplete="email"
            isRequired={true}
            handleChange={handleChange}
            type="email"
            name="email"
          />
          <Input
            placeholder="Enter password"
            autoComplete="current-password"
            isRequired={true}
            handleChange={handleChange}
            type="password"
            name="password"
          />
        </div>
        
        <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default Signup;
