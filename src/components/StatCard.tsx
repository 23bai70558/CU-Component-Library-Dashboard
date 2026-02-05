'use client';

import { StatCardData } from '@/types/dashboard';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {data.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
              borderRadius: '50%',
              backgroundColor: data.color,
              color: 'white',
            }}
          >
            {data.icon}
          </Box>
        </Box>
        <Typography variant="h3" component="div" fontWeight="bold">
          {data.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
