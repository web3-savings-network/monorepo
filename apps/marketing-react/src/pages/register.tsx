import FormUserRegister from "@/components/FormUserRegister";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Register = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="content font-primary">
        <SectionOne />
      </div>
    </Main>
  );
};

const SectionOne = (props) => {
  return (
    <section className="py-20">
      <div className="container max-w-screen-sm mx-auto text-center">
        <h3 className="font-bold font-body text-4xl lg:text-7xl">
          Join the Pack
        </h3>
        <h5 className="font-normal lg:text-xl">
          <span className="font-">alpha access</span> will be limited to 100{" "}
          <br />
          <span className="font-s">prizes savings protocol depositors</span>
        </h5>
        {/* <span className="text-2xl mt-3 block">🐺</span> */}
      </div>
      <div className="my-10" />
      <div className="container max-w-screen-sm mx-auto">
        <FormUserRegister className="card" />

        <div className="my-10" />
        <div className="text-center">
          <p className="">
            Hang out by the pool and{" "}
            <span className="font-bold">enjoy more winning</span>
          </p>
          <span className="text-3xl">🏖️</span>
        </div>
      </div>
    </section>
  );
};

export default Register;
