"use server";

import { type SupabaseClient } from "@supabase/supabase-js";

export const fetchStudents = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from("student")
    .select("*, college(name)");

  return data;
};

export const fetchProfessors = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from("professor")
    .select("*, college(name)");

  return data;
};

export const fetchColleges = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase.from("college").select("*");

  return data;
};

export const fetchMentors = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from("mentor")
    .select("*, college(name)");

  return data;
};

export const fetchStudentCount = async (supabase: SupabaseClient) => {
  const { count, error } = await supabase
    .from("student")
    .select("*", { count: "exact", head: true });

  return count;
};

export const fetchProfessorCount = async (supabase: SupabaseClient) => {
  const { count, error } = await supabase
    .from("professor")
    .select("*", { count: "exact", head: true });

  return count;
};

export const fetchCollegeCount = async (supabase: SupabaseClient) => {
  const { count, error } = await supabase
    .from("college")
    .select("*", { count: "exact", head: true });

  return count;
};

export const fetchMentorCount = async (supabase: SupabaseClient) => {
  const { count, error } = await supabase
    .from("mentor")
    .select("*", { count: "exact", head: true });

  return count;
};
