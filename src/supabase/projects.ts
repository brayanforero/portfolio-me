import supabase from "./store";

export const getProjects = async (key: "es" | "en" = "es") => {
  const { data, error } = await supabase
    .from("projects")
    .select()
    .filter("lang", "eq", key);

  return { data, error };
};
