interface props {
  Email: string;
  Password: string;
}

export async function authLogin({ Email, Password }: props) {
  const response = await fetch("https://localhost:7064/api/Authetication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Email, Password }),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }
  const data = await response.json();
  return data;
}
