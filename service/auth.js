export const login = async (form) => {
  try {
    const response = await fetch("/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("error");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject("ada error");
  }
};
export const register = async (form) => {
  try {
    const response = await fetch("/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject("ada error");
  }
};
