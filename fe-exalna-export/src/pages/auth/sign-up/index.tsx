import Form from "./Form";
import Hero from "./Hero";

const SignUp = () => {
  return (
    <>
      <section className="h-[100vh] w-[100vw] z-[99] bg-white flex justify-between items-center">
        <Form />
        <Hero />
      </section>
    </>
  );
};

export default SignUp;
