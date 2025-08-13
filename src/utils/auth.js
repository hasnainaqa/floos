export const loginUser = () => {
  localStorage.setItem("floosLoggedIn", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("floosLoggedIn");
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("floosLoggedIn") === "true";
};


export const generateRandomToken = () => {
  return [...crypto.getRandomValues(new Uint8Array(16))]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
};