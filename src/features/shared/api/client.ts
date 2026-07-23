const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:3000";

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    options
  );

  if (!response.ok) {
    throw await createApiError(response);
  }

  return response.json();
}

function createApiError(response: Response) {
    throw new Error("Function not implemented.");
}
