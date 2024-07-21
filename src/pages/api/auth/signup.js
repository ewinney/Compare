// Note: This is a mock implementation. In a real-world scenario, you would need to:
// 1. Validate input
// 2. Hash the password
// 3. Store the user in a database
// 4. Handle errors properly

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Mock user creation
    const user = { id: Date.now(), name, email };

    // In a real implementation, you would save the user to a database here

    res.status(201).json({ message: 'User created successfully', user });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}