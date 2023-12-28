"use server";

import { redirect } from "next/navigation";

export const signIn = async (
  prevState: string | undefined,
  formData: FormData,
) => {
  redirect("/dashboard/info");
};
