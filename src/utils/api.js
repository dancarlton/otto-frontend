const baseUrl = 'http://localhost:3001/api'

export async function registerUser(name, email, password) {
  const response = await fetch(`${baseUrl}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to register')
  }

  return await response.json() // returns { user, token }
}

export async function updateUser(token, userData) {
  const response = await fetch(`${baseUrl}/users/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify( userData ),
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to update user')
  }

  return await response.json()
}
