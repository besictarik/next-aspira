"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (
  prevState: string | undefined,
  formData: FormData,
) => {
  const cookiestore = cookies();
  const supabase = createClient(cookiestore);

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) return "Invalid credentials";
  return redirect("/dashboard/info");
};

export const signOut = async () => {
  const cookiestore = cookies();
  const supabase = createClient(cookiestore);
  await supabase.auth.signOut();

  return redirect("/login");
};
