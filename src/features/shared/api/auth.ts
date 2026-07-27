export function getAccessToken() {
  if (typeof window === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; auth-token=`);

  if (parts.length !== 2) return null;

  return parts.pop()?.split(";").shift() ?? null;
}
