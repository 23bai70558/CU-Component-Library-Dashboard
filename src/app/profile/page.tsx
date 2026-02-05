'use client';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

export default function ProfilePage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
        Profile
      </Typography>
      
      <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: 'primary.main',
            }}
          >
            <PersonIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Shaily Chauhan
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              shaily.chauhan@university.edu
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
