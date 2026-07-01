CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service text,
  message text,
  status text DEFAULT 'new',
  created_at timestamp with time zone DEFAULT now()
);

GRANT INSERT, SELECT ON public.inquiries TO anon;
GRANT ALL ON public.inquiries TO service_role;

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inquiries insert" ON public.inquiries
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON public.inquiries
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);