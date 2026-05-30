// ============================================================
// AUTH - Login, logout, session management
// ============================================================

function getSession() {
  const s = sessionStorage.getItem("gtw_user");
  return s ? JSON.parse(s) : null;
}

function setSession(user) {
  sessionStorage.setItem("gtw_user", JSON.stringify(user));
}

function clearSession() {
  sessionStorage.removeItem("gtw_user");
}

function requireLogin() {
  if (!getSession()) {
    window.location.href = "../index.html";
  }
}

async function doLogin(username, password) {
  const data = await dbGet(
    "data_users",
    `username=eq.${username}&password=eq.${password}&select=username,user_id`
  );
  if (data && data.length > 0) {
    setSession(data[0]);
    return true;
  }
  return false;
}

function doLogout() {
  clearSession();
  window.location.href = "../index.html";
}
