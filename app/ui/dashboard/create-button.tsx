import Link from "next/link";

const CreateButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="flex h-10 items-center rounded-lg bg-[#ff0000b8] px-4 text-sm font-medium text-white transition-colors hover:bg-[#ff000b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff0000b8]"
    >
      <span className="hidden md:block">{text}</span>{" "}
      <span className="ml-4 text-xl">+</span>
    </Link>
  );
};

export default CreateButton;
