DROP POLICY IF EXISTS "Allow service role full access" ON public.inquiries;

DROP POLICY IF EXISTS "Allow anonymous inquiries insert" ON public.inquiries;

CREATE POLICY "Allow anonymous inquiries insert" ON public.inquiries
  FOR INSERT TO anon
  WITH CHECK (
    name IS NOT NULL AND length(trim(name)) > 0
    AND email IS NOT NULL AND length(trim(email)) > 0
  );