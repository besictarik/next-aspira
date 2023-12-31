import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const EditStudent = async () => {
  const editUser = async () => {
    "use server";
    const cookiestore = cookies();
    const supabase = createClient(cookiestore);

    await supabase.auth.updateUser({
      data: { role: "admin" },
    });
    await supabase.auth.refreshSession();
  };

  const getUsers = async () => {
    const cookiestore = cookies();
    const supabase = createClient(cookiestore);

    const { data, error } = await supabase.from("students").select();
    console.log(data);

    return data;
  };

  const students = (await getUsers()) || [];

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
      {students.map((student, index) => {
        return <p key={index}>{student.name}</p>;
      })}
    </>
  );
};

export default EditStudent;
