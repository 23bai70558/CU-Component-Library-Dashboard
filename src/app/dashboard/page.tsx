'use client';

import DataTable from '@/components/DataTable';
import { TableRow } from '@/types/dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
// using Box-based CSS grid for layout to avoid Grid typing/import issues
import Typography from '@mui/material/Typography';

const tableData: TableRow[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    role: 'Developer',
    status: 'Active',
    joinDate: '2024-02-20',
  },
  {
    id: 3,
    name: 'Amit Patel',
    email: 'amit.patel@example.com',
    role: 'Designer',
    status: 'Pending',
    joinDate: '2024-03-10',
  },
];

export default function DashboardPage() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE5EE 100%)', py: 5 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: '#C2185B',
              mb: 1,
              fontSize: { xs: '28px', md: '36px' }
            }}
          >
            Welcome to Dashboard
          </Typography>
          <Typography variant="body1" sx={{ color: '#999', fontSize: '16px' }}>
            Manage your data and insights
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
            mb: 5,
          }}
        >
          <Box>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0D0 100%)',
                border: 'none',
                boxShadow: '0 8px 20px rgba(255, 105, 180, 0.15)',
                minHeight: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s, boxShadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(255, 105, 180, 0.2)',
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <PeopleIcon sx={{ fontSize: 40, color: '#FFFFFF', mb: 1 }} />
                <Typography variant="h5" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>
                  2,543
                </Typography>
                <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.9 }}>
                  Total Users
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #FFD4E5 0%, #FFB6D9 100%)',
                border: 'none',
                boxShadow: '0 8px 20px rgba(255, 105, 180, 0.15)',
                minHeight: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s, boxShadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(255, 105, 180, 0.2)',
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <FolderIcon sx={{ fontSize: 40, color: '#FFFFFF', mb: 1 }} />
                <Typography variant="h5" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>
                  127
                </Typography>
                <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.9 }}>
                  Active Projects
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Users Section */}
        <Card
          sx={{
            background: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid #FFE5EE'
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#C2185B',
                mb: 2.5
              }}
            >
              Users List
            </Typography>
            <DataTable rows={tableData} />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
