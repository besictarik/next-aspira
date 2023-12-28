import Image from "next/image";
import ProfilePhoto from "@/public/default-profile-photo.jpg";

const User = () => {
  return (
    <div className="flex items-center pl-9">
      <Image
        src={ProfilePhoto}
        className="rounded-full"
        alt="User Profile Photo"
      />
      <div className="pl-[30px]">
        <h3 className="text-base font-semibold">John Doe</h3>
        <p className="text-xs text-[#464a53]">Admin</p>
      </div>
    </div>
  );
};

export default User;
