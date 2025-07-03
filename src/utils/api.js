const baseUrl = 'http://localhost:3001/api'

export async function verifyToken(token) {
  const response = await fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!response.ok) {
    throw new Error('Invalid token')
  }

  return await response.json()
}

export async function loginUser(email, password) {
  const response = await fetch(`${baseUrl}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw new Error('Login failed')
  }

  return await response.json()
}

export async function registerUser(name, email, password) {
  const response = await fetch(`${baseUrl}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })

  if (!response.ok) {
    throw new Error('Failed to register')
  }

  return await response.json()
}

export async function updateUser(token, userData) {
  const response = await fetch(`${baseUrl}/users/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  })
  if (!response.ok) {
    throw new Error('Failed to update user')
  }

  return await response.json()
}
