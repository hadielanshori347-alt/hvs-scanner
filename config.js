// ============================================================
// CONFIG - Supabase Connection
// ============================================================
const SUPABASE_URL = "https://tbopoplkwvpdnbrhsqmk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRib3BvcGxrd3ZwZG5icmhzcW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMTAyMDMsImV4cCI6MjA5NTY4NjIwM30.6SuI675lGX_1kRqMCCBN2Sxx96BKgStNy8oNSq8c3Sk";

const HEADERS = {
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  "Prefer": "return=representation"
};

// Admin yang boleh login (dari tabel data_users)
const ADMIN_USERNAMES = ["HADI", "FADLI", "RESKI", "FAISAL", "ANDRE", "DIMAS"];
