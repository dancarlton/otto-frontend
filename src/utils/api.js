export const baseUrl = import.meta.env.VITE_API_BASE_URL

// token api request
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

// user api requests
export async function getUser(token) {
  const response = await fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch user')
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
    const errorBody = await response.json()
    throw new Error(errorBody.message || 'Failed to register')
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
    const errorBody = await response.json()
    throw new Error(errorBody.message || 'Failed to update user')
  }

  return await response.json()
}

// gpt api requests
export async function askOtto(message, token) {
  const response = await fetch(`${baseUrl}/gpt/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  })

  return await response.json()
}

// buoy api requests
export async function fetchBuoyData(stationId, token) {
  const response = await fetch(`${baseUrl}/buoy/${stationId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch buoy data')
  }

  const data = await response.json()
  return data
}

// surf spots api requests
export async function fetchSurfSpots(token) {
  const response = await fetch(`${baseUrl}/spots/enriched`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Failed to fetch surf spots:', errorText)
    throw new Error('Failed to fetch surf spots')
  }

  const data = await response.json()

  return data.spots
}

export async function fetchSpotById(id, token) {
  const response = await fetch(`${baseUrl}/spots/id/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch surf spot by ID')
  }

  return await response.json()
}

export async function fetchSpotByName(name, token) {
  const response = await fetch(`${baseUrl}/spots/id/${name}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch surf spot by name')
  }

  return await response.json()
}

// waking up servers
export async function healthCheck() {
  const response = await fetch(`${baseUrl.replace('/api', '')}/health`)

  if (!response.ok) {
    throw new Error('Health check failed')
  }

  return await response.json()
}
