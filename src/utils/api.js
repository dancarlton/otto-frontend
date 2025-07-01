export async function registerUser(email, password) {
  const response = await fetch('http://localhost:3001/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to register');
  }

  return await response.json(); // returns { user, token }
}
