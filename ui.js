// ============================================================
// UI - Shared components: navbar, toast, loading
// ============================================================

function renderNavbar(activePage) {
  const user = getSession();
  const pages = [
    { id: "dashboard", label: "📊 Dashboard", href: "dashboard.html" },
    { id: "ob",        label: "📦 OB",        href: "ob.html" },
    { id: "ib",        label: "📥 IB",        href: "ib.html" },
    { id: "hvs",       label: "🏷️ HVS",       href: "hvs.html" },
    { id: "scan",      label: "🔍 Scan",      href: "scan.html" },
    { id: "driver",    label: "🚚 Driver",    href: "driver.html" },
    { id: "manifest",  label: "📋 Manifest",  href: "manifest.html" },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a>`
  ).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <nav class="navbar">
      <div class="brand">🚀 <span>GTW</span> BDO</div>
      <div class="nav-links">${links}</div>
      <div class="user-info">
        👤 <strong>${user?.username || "-"}</strong>
        <button class="btn-logout" onclick="doLogout()">Logout</button>
      </div>
    </nav>
    <div id="toast"></div>
  `);
}

function showToast(msg, type = "success") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = type;
  t.style.display = "block";
  setTimeout(() => { t.style.display = "none"; }, 3000);
}

function setLoading(btn, loading) {
  if (loading) {
    btn.disabled = true;
    btn._orig = btn.textContent;
    btn.textContent = "Menyimpan...";
  } else {
    btn.disabled = false;
    btn.textContent = btn._orig || "Simpan";
  }
}

function formatDate(str) {
  if (!str) return "-";
  return new Date(str).toLocaleString("id-ID", { dateStyle: "short", timeStyle: "short" });
}

function formatDateOnly(str) {
  if (!str) return "-";
  return new Date(str).toLocaleDateString("id-ID");
}

function todayISO() {
  return new Date().toISOString().slice(0, 16);
}

function confirmDelete(cb) {
  if (confirm("Yakin ingin menghapus data ini?")) cb();
}
