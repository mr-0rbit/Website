/*
# Create contact messages and internship registration tables

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `phone` (text, nullable) — optional phone number
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — message body
  - `created_at` (timestamptz, default now())
- `internship_registrations`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — applicant's full name
  - `email` (text, not null) — applicant's email
  - `phone` (text, not null) — applicant's phone number
  - `university` (text, nullable) — current university
  - `degree` (text, nullable) — degree program
  - `graduation_year` (text, nullable) — expected graduation year
  - `track` (text, not null) — chosen internship track (VAPT, SOC, GRC, etc.)
  - `experience` (text, nullable) — relevant experience summary
  - `resume_url` (text, nullable) — link to resume
  - `why` (text, nullable) — why they want to join
  - `status` (text, default 'pending') — application status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated INSERT only (public can submit forms, cannot read).
- No SELECT/UPDATE/DELETE policies for anon — submissions are write-only from the public site.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS internship_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  university text,
  degree text,
  graduation_year text,
  track text NOT NULL,
  experience text,
  resume_url text,
  why text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE internship_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_internship_registrations" ON internship_registrations;
CREATE POLICY "anon_insert_internship_registrations" ON internship_registrations
  FOR INSERT TO anon, authenticated WITH CHECK (true);
