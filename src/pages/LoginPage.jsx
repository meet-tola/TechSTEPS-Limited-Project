import Header from "../components/Header";
import Input from "../components/Input";
import { supabase } from "../database";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setToken }) => {
  let navigate = useNavigate();
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      setToken(data);
      navigate("/dashboard");

    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
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
            id="grid-email"
          />
          <Input
            placeholder="Enter password"

            handleChange={handleChange}
            type="password"
            name="password"
            id="grid-password"
          />
        </div>
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Forgot your password?
          </a>
        </div>
        <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
