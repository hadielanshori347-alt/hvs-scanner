// ============================================================
// API - Supabase REST helper functions
// ============================================================

async function dbGet(table, params = "") {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
    headers: HEADERS
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function dbInsert(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function dbUpdate(table, id, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: "PATCH",
    headers: HEADERS,
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function dbDelete(table, id) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: "DELETE",
    headers: HEADERS
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
}

// Ambil semua incharge dari data_incharge
async function getInchargeList() {
  return dbGet("data_incharge", "select=incharge&order=incharge");
}

// Ambil tujuan berdasarkan incharge + service
async function getTujuanList(incharge, service) {
  return dbGet("data_routing", `incharge=eq.${incharge}&service=eq.${service}&select=tujuan`);
}
