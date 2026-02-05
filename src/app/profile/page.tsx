'use client';

import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function ProfilePage() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE5EE 100%)', py: 5 }}>
      <Container maxWidth="sm">
        {/* Header */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: '#C2185B',
            textAlign: 'center',
            mb: 4,
            fontSize: { xs: '28px', md: '36px' }
          }}
        >
          My Profile
        </Typography>

        {/* Profile Card */}
        <Card
          sx={{
            background: '#FFFFFF',
            boxShadow: '0 8px 24px rgba(255, 105, 180, 0.15)',
            borderRadius: '20px',
            border: '2px solid #FFE5EE',
            overflow: 'hidden',
            mb: 3
          }}
        >
          {/* Header Background */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0D0 100%)',
              height: '100px',
              position: 'relative'
            }}
          />

          <CardContent sx={{ pt: 0, pb: 4, px: 4, textAlign: 'center' }}>
            {/* Avatar */}
            <Avatar
              sx={{
                width: 100,
                height: 100,
                background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0D0 100%)',
                fontSize: '50px',
                color: '#FFFFFF',
                margin: '-50px auto 20px',
                boxShadow: '0 4px 12px rgba(255, 105, 180, 0.25)',
              }}
            >
              <PersonIcon sx={{ fontSize: '60px' }} />
            </Avatar>

            {/* Name */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#C2185B',
                mb: 1
              }}
            >
              Shaily Chauhan
            </Typography>

            {/* Status */}
            <Chip
              label="Active"
              color="success"
              sx={{
                background: '#FFB6D9 !important',
                color: '#FFFFFF !important',
                fontWeight: 600,
                mb: 3
              }}
            />

            {/* Email */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <EmailIcon sx={{ color: '#FFB6D9', fontSize: '20px' }} />
              <Typography variant="body1" sx={{ color: '#666', fontSize: '16px' }}>
                shaily.chauhan@university.edu
              </Typography>
            </Box>

            {/* Department Info */}
            <Box sx={{ mt: 3, pt: 3, borderTop: '2px solid #FFE5EE' }}>
              <Typography variant="body2" sx={{ color: '#999', mb: 1 }}>
                Department
              </Typography>
              <Typography variant="h6" sx={{ color: '#C2185B', fontWeight: 600, mb: 2 }}>
                Computer Science
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: '#999', mb: 0.5 }}>
                    Year
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333', fontWeight: 600 }}>
                    2024
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#999', mb: 0.5 }}>
                    Semester
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333', fontWeight: 600 }}>
                    6th
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
