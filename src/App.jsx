import { useState } from 'react'
import { Container, Typography, Button, Box, Link, Stack } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 4 }}>
      <Stack direction="row" spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        <Link href="https://vite.dev" target="_blank" rel="noopener">
          <Box component="img" src={viteLogo} alt="Vite logo" sx={{ height: '6em', p: 1.5 }} />
        </Link>
        <Link href="https://react.dev" target="_blank" rel="noopener">
          <Box component="img" src={reactLogo} alt="React logo" sx={{ height: '6em', p: 1.5 }} />
        </Link>
      </Stack>

      <Typography variant="h3" gutterBottom>
        Vite + React
      </Typography>

      <Box sx={{ my: 4 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary">
        Click on the Vite and React logos to learn more
      </Typography>
    </Container>
  )
}

export default App
