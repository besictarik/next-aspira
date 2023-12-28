import AspiraLogo from "../ui/aspira-logo-white";
import FaceBook from "../ui/icons/facebook-icon";
import Linkedin from "../ui/icons/linkedin-icon";
import Twitter from "../ui/icons/twitter-icon";
import LoginForm from "../ui/signin/login-form";

const Login = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="w-[500px relative right-12 z-10 flex p-[50px]">
        <LoginForm />
        <div className="absolute left-0 top-0 -z-10 h-full w-[200%] bg-white shadow-lg"></div>
      </div>
      <div className="z-20 ml-[70px] pr-[40px]">
        <AspiraLogo className="pb-[30px]" />
        <h2 className="pb-2 text-[30px] leading-[1.2] text-white">
          Login To Aspira Dashboard
        </h2>
        <p className="mb-4 leading-[1.8] text-white">
          College Of Management And Design
        </p>
        <div className="mt-6 flex gap-[10px]">
          <FaceBook />
          <Twitter />
          <Linkedin />
        </div>
      </div>
      <div className="absolute left-[calc(50%-30px)] top-0 z-10 h-full w-[60%] -skew-x-[5deg] bg-white bg-cover after:absolute after:h-full after:w-full after:bg-[#ff0000b8] after:content-['']"></div>
    </div>
  );
};

export default Login;
