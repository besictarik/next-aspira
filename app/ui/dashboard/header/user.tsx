import Image from "next/image";
import ProfilePhoto from "@/public/default-profile-photo.jpg";
import LogoutIcon from "@/public/icons/right-from-bracket-solid.svg";
import { signOut } from "@/app/lib/actions";

const User = () => {
  return (
    <div className="group/container flex items-center pl-9 hover:cursor-pointer">
      <Image
        src={ProfilePhoto}
        className="rounded-full"
        alt="User Profile Photo"
      />
      <div className="relative flex pl-[30px]">
        <div>
          <h3 className="text-base font-semibold">John Doe</h3>
          <p className="text-xs text-[#464a53]">Admin</p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="group/link absolute -right-5 top-0 -z-10 flex h-full min-w-9 items-center gap-1 rounded-s-xl bg-[#ff0000b8] px-1 transition-all delay-0  duration-300 ease-in-out group-hover/container:right-0 group-hover/container:z-20 group-hover/container:min-w-full group-active/container:right-0 group-active/container:z-20 group-active/container:min-w-full"
          >
            <Image src={LogoutIcon} alt="Logout Icon" />
            <span className="hidden text-[#FFFFFFB3] transition-all delay-0 duration-300 ease-in-out group-hover/container:block group-hover/link:text-white group-active/container:block">
              Logout
            </span>
          </button>
        </form>
        <div className="absolute right-0 top-0 -z-20 h-full w-0 bg-white  transition-all delay-0 duration-300 ease-in-out group-hover/container:z-10 group-hover/container:w-full group-active/container:z-10 group-active:w-full"></div>
      </div>
    </div>
  );
};

export default User;
