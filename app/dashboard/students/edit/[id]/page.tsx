import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const EditStudent = async () => {
  const editUser = async () => {
    "use server";
  };

  return (
    <>
      <form action={editUser}>
        <button
          className="flex h-10 items-center rounded-lg bg-[#ff0000b8] px-4 text-sm font-medium text-white transition-colors hover:bg-[#ff000b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff0000b8]"
          type="submit"
        >
          Edit Student
        </button>
      </form>
    </>
  );
};

export default EditStudent;
