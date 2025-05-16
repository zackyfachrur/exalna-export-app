import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@services/validationSchemas";
import { SignUpFormData } from "@type/components";
import { RegisterField } from "@components/ui/FormField";
import axios from "axios";
import GoogleButton from "@components/others/withGoogleAuth";
import Notifications from "@components/ui/Notifications";

const Form = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const payload = {
        ...data,
      };

      const response = await axios.post(
        `https://ex-auth-services-production.up.railway.app/register`,
        payload
      );
      console.log("Registration successful", response.data);
      Notifications("Registration successful! Please sign in.");
      setTimeout(() => { 
        window.location.assign("/sign-in")
       }, 200)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Notifications("Your have already have an Account! Please sign in.");
        console.error(
          "Error during registration:",
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
          <h2 className="text-4xl font-bold w-full">Get started today</h2>
          <p className="font-medium">
            Join now and manage your{" "}
            <span className="font-semibold italic">
              import-export with AI precision
            </span>
            <i className="ri-robot-3-line text-blue-600 bg-white px-2 py-1 rounded-full"></i>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full"
        >
          <div className="grid grid-cols-2 gap-2">
            <RegisterField
              type="text"
              name="username"
              labelText="Username"
              inputId="username"
              register={register}
              error={errors.username}
            />
            <RegisterField
              type="email"
              name="email"
              labelText="Email"
              inputId="email"
              register={register}
              error={errors.email}
            />
          </div>
          <RegisterField
            type="select"
            name="companyCategories"
            labelText="Email Domain"
            inputId="emailDomain"
            register={register}
            error={errors.companyCategories}
            options={[
              { label: "Consumer Good (Food, etc.)", value: "Consumer Good" },
              { label: "Industrial Goods (Raw materials, etc.)", value: "Industrial Goods" },
              { label: "Agricultural Products (Coffee, tea, cocoa, etc.)", value: "Agricultural Products" },
              { label: "Fisheries (Frozen fish, shrimp, squid, etc.)", value: "Fisheries" },
            ]}
          />
          <RegisterField
            type="text"
            name="companyName"
            labelText="Company Name"
            inputId="companyName"
            register={register}
            error={errors.companyName}
          />
          <RegisterField
            type="number"
            name="yearsOfExperience"
            labelText="Years Of Experience"
            inputId="yearsOfExperience"
            register={register}
            error={errors.yearsOfExperience}
            valueAsNumber={true}
          />
          <div className="flex gap-2">
            <RegisterField
              name="password"
              labelText="Password"
              inputId="password"
              register={register}
              error={errors.password}
            />
            <RegisterField
              name="confirmPassword"
              labelText="Confirm Password"
              inputId="confirmPassword"
              register={register}
              error={errors.confirmPassword}
            />
          </div>
          <button className="bg-blue-600 font-medium px-4 py-3 text-white rounded-2xl cursor-pointer hover:opacity-85 animate active:scale-95 shadow-xl shadow-blue-600/30 animate">
            Sign Up
          </button>
          <div className="flex flex-row w-full items-center gap-4 text-gray-300 font-bold">
            <hr className="w-full text-transparent bg-gray-300" />
            <span>or</span>
            <hr className="w-full text-transparent bg-gray-300" />
          </div>
        </form>
        <GoogleButton />
        <button className="w-full text-gray-500 font-medium">
          Already have an Account ?{" "}
          <a
            href="/sign-in"
            className="font-bold underline text-blue-600 hover:opacity-80"
          >
            Sign In
          </a>
        </button>
      </div>
    </div>
  );
};

export default Form;
