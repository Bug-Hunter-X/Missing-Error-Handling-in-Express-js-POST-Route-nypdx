const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  //Further data validation can be added here
  console.log('Received user:', user);
  res.status(201).json({ message: 'User created' });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));