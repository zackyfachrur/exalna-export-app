import { useState } from "react";
import { SignUpFormFieldProps, SignInFormFieldProps } from "@type/components";

/* 
  Input
  Component for Register Field with ZOD Validation
*/

export const RegisterField = ({
  inputId,
  labelText,
  name,
  register,
  type,
  error,
  valueAsNumber,
  options,
}: SignUpFormFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const errorMessage = Array.isArray(error)
    ? error.filter((err) => err !== undefined)[0]?.message
    : error?.message;

  return (
    <div>
      {type === "select" ? (
        <div className="w-full relative cursor-pointer">
          <select
            id={inputId}
            {...register(name)}
            className={`appearance-none w-full h-12 px-5 pr-10 text-gray-500 font-medium rounded-sm border text-md outline-none cursor-pointer ${
              error ? "border-red-500" : "border-gray-300 text-sm"
            } focus:border-blue-500 text-base`}
          >
            <option value="" disabled hidden selected>
              Categories
            </option>
            {options?.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="px-5 bg-blue-600"
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom arrow */}
          <i className="ri-arrow-down-s-line absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
        </div>
      ) : inputId === "password" || inputId === "confirmPassword" ? (
        <div className="w-full h-12 relative flex bg-transparent outline-none px-4 text-md rounded-sm border peer focus-within:border-[#4070f4] peer-focus:border-[#4070f4]  border-gray-300 items-center">
          <input
            required
            className="peer w-full outline-none text-base text-gray-500 font-medium"
            id={inputId}
            type={showPassword === false ? "text" : "password"}
            {...(register?.(name)
              ? register(name, {
                  valueAsNumber: type === "number" ? valueAsNumber : undefined,
                })
              : {})}
          />
          <label
            className="absolute top-1/2 bg-white translate-y-[-50%] font-medium left-4 px-1 peer-focus:top-0 peer-focus:left-3 peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150 text-sm text-gray-500"
            htmlFor={inputId}
          >
            {labelText}
          </label>
          <span
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i
              className={
                showPassword === false ? "ri-eye-line" : "ri-eye-off-line"
              }
            ></i>
          </span>
        </div>
      ) : (
        <div className="w-full h-12 relative flex bg-transparent outline-none px-4 text-md rounded-sm border peer focus-within:border-[#4070f4] peer-focus:border-[#4070f4]  border-gray-300 ">
          <input
            required
            className="peer w-full outline-none text-md text-gray-500 font-medium"
            id={inputId}
            type={type}
            {...(register?.(name)
              ? register(name, {
                  valueAsNumber: type === "number" ? valueAsNumber : undefined,
                })
              : {})}
          />
          <label
            className="absolute top-1/2 bg-white translate-y-[-50%] font-medium left-4 px-1 peer-focus:top-0 peer-focus:left-3 peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150 text-sm text-gray-500"
            htmlFor={inputId}
          >
            {labelText}
          </label>
        </div>
      )}

      {errorMessage && (
        <span className="text-red-500 font-medium text-xs">{errorMessage}</span>
      )}
    </div>
  );
};

/* 
  Input
  Component for Login Field with ZOD Validation
*/

export const LoginField = ({
  inputId,
  labelText,
  name,
  register,
  type = "text",
  error,
  valueAsNumber,
}: SignInFormFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const errorMessage = Array.isArray(error)
    ? error?.[0]?.message
    : error?.message;

  const isPasswordField =
    inputId === "password" || inputId === "confirmPassword";

  return (
    <>
      <div className="w-full h-12 relative flex bg-transparent outline-none px-4 text-md rounded-sm border peer focus-within:border-[#4070f4] peer-focus:border-[#4070f4] border-gray-300 items-center">
        <input
          required
          id={inputId}
          type={isPasswordField ? (showPassword ? "password" : "text") : type}
          className="peer w-full outline-none text-base text-gray-500 font-medium"
          {...register(
            name,
            type === "number" && valueAsNumber
              ? { valueAsNumber: true }
              : undefined
          )}
        />

        <label
          htmlFor={inputId}
          className="absolute top-1/2 bg-white translate-y-[-50%] font-medium left-4 px-1 peer-focus:top-0 peer-focus:left-3 peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150 text-sm text-gray-500"
        >
          {labelText}
        </label>

        {isPasswordField && (
          <span
            className="cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
          </span>
        )}
      </div>

      {errorMessage && (
        <span className="text-red-500 font-medium text-xs">{errorMessage}</span>
      )}
    </>
  );
};
