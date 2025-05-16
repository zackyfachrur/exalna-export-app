// import { Form } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginField } from "@components/ui/FormField";
import { SignInFormData } from "@type/components";
import { useForm } from "react-hook-form";
import GoogleButton from "@components/others/withGoogleAuth";
import { signInSchema } from "@services/validationSchemas";
import axios from "axios";
import Notifications from "@components/ui/Notifications";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit = async (data: SignInFormData) => {
    try {
      const payload = { ...data };

      const response = await axios.post(`https://ex-auth-services-production.up.railway.app/login`, payload);

      console.log("Login successful", response.data);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      Notifications("Login successful!");

      setTimeout(() => {
        window.location.assign("/");
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Notifications("You don't have an account!");
        console.error(
          "Error during login:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="w-[40%] flex justify-center items-center flex-col">
      <div className="flex justify-center items-start flex-col w-[65%] gap-5">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold w-full">Continue your journey</h2>
          <p className="font-medium">
            Reconnect and streamline{" "}
            <span className="font-semibold italic">
              your trade with technology
            </span>
            <i className="ri-robot-3-line text-blue-600 bg-white px-2 py-1 rounded-full"></i>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex gap-2">
            <LoginField
              type="text"
              name="identifier"
              labelText="Username or Email"
              inputId="identifier"
              register={register}
              error={errors.identifier}
            />
          </div>
          <LoginField
            type="password"
            name="password"
            labelText="Password"
            inputId="password"
            register={register}
            error={errors.password}
          />
          <LoginField
            type="password"
            name="confirmPassword"
            labelText="Confirm Password"
            inputId="confirmPassword"
            register={register}
            error={errors.confirmPassword}
          />
          <button className="bg-blue-600 font-medium px-4 py-3 text-white rounded-2xl cursor-pointer hover:opacity-85 animate active:scale-95 shadow-xl shadow-blue-600/30 animate">
            Sign In
          </button>
          <div className="flex flex-row w-full items-center gap-4 text-gray-300 font-bold">
            <hr className="w-full text-transparent bg-gray-300" />
            <span>or</span>
            <hr className="w-full text-transparent bg-gray-300" />
          </div>
        </form>

        <GoogleButton />
        <button className="w-full text-gray-500 font-medium">
          Don't have an Account ?{" "}
          <a
            href="/sign-up"
            className="font-bold underline text-blue-600 hover:opacity-80"
          >
            Sign Up
          </a>
        </button>
      </div>
    </div>
  );
};

export default Form;
