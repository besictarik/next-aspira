import { useFormStatus } from "react-dom";

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="flex h-14 w-full items-center justify-center bg-[#ff0000b8] text-base text-white hover:bg-[#32137c] aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:hover:bg-[#ff0000b8]"
    >
      Sign In
    </button>
  );
};

export default LoginButton;
