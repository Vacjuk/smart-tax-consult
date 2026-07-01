import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { inquirySchema, type InquiryFormData } from "./inquiry.schema";

function createServerSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error("Chybí konfigurace databáze.");
  }

  return createClient<Database>(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      storage: undefined,
    },
  });
}

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data) => inquirySchema.parse(data as InquiryFormData))
  .handler(async ({ data }) => {
    const supabase = createServerSupabaseClient();

    const { error } = await supabase.from("inquiries").insert({
      name: data.name,
      email: data.email,
      service: data.service ?? null,
      message: data.message,
    });

    if (error) {
      console.error("Inquiry insert error:", error);
      throw new Error("Nepodařilo se odeslat poptávku. Zkuste to prosím znovu.");
    }

    return { success: true };
  });
