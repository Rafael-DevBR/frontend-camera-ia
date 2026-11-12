const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://192.168.0.231:5899";

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw await createApiError(response);
  }

  return response.json();
}

async function createApiError(response: Response): Promise<Error> {
  let message = `Erro ${response.status}`;
  try {
    const body = await response.json();
    if (body?.message) {
      message = Array.isArray(body.message)
        ? body.message.join(", ")
        : body.message;
    }
  } catch {
    // Corpo não é JSON; usa o status/texto padrão
  }
  return new Error(message);
}
