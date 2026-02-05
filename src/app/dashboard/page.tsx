'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import StatCard from '@/components/StatCard';
import DataTable from '@/components/DataTable';
import { StatCardData, TableRow } from '@/types/dashboard';

const statCardsData: StatCardData[] = [
  {
    title: 'Total Users',
    value: '2,543',
    icon: <PeopleIcon />,
    color: '#c00000',
  },
  {
    title: 'Active Projects',
    value: '127',
    icon: <FolderIcon />,
    color: '#1976d2',
  },
];

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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {statCardsData.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <StatCard data={stat} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
          Users
        </Typography>
      </Box>

      <DataTable rows={tableData} />
    </Container>
  );
}
