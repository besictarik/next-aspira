"use server";

import { type SupabaseClient } from "@supabase/supabase-js";

export const fetchStudents = async (supabase: SupabaseClient) => {
  console.log("Fetching students...");
  const { data, error } = await supabase
    .from("student")
    .select("*, college(name)");

  return data;
};

export const fetchProfessors = async (supabase: SupabaseClient) => {
  console.log("Fetching professors...");
  const { data, error } = await supabase
    .from("professor")
    .select("*, college(name)");

  return data;
};

export const fetchColleges = async (supabase: SupabaseClient) => {
  console.log("Fetching colleges...");
  const { data, error } = await supabase.from("college").select("*");

  return data;
};

export const fetchMentors = async (supabase: SupabaseClient) => {
  console.log("Fetching mentors...");
  const { data, error } = await supabase
    .from("mentor")
    .select("*, college(name)");

  return data;
};
