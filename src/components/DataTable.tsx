'use client';

import { TableRow as TableRowType } from '@/types/dashboard';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface DataTableProps {
  rows: TableRowType[];
}

export default function DataTable({ rows }: DataTableProps) {
  const getStatusColor = (status: string): 'success' | 'warning' | 'error' | 'default' => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'inactive':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(255, 105, 180, 0.1)',
        border: '1px solid #FFE5EE'
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="user data table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#FFE5EE' }}>
            <TableCell sx={{ fontWeight: 'bold', color: '#C2185B' }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#C2185B' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#C2185B' }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#C2185B' }}>Role</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#C2185B' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#C2185B' }}>Join Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:hover': { backgroundColor: '#FFF5F8' },
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: '#333' }}>
                {row.id}
              </TableCell>
              <TableCell sx={{ color: '#333' }}>{row.name}</TableCell>
              <TableCell sx={{ color: '#666' }}>{row.email}</TableCell>
              <TableCell sx={{ color: '#333' }}>{row.role}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={getStatusColor(row.status)}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    '& .MuiChip-colorSuccess': {
                      backgroundColor: '#FFB6D9 !important',
                      color: '#FFFFFF !important'
                    },
                    '& .MuiChip-colorWarning': {
                      backgroundColor: '#FFD4E5 !important',
                      color: '#FFFFFF !important'
                    },
                    '& .MuiChip-colorError': {
                      backgroundColor: '#FF99C8 !important',
                      color: '#FFFFFF !important'
                    }
                  }}
                />
              </TableCell>
              <TableCell sx={{ color: '#666' }}>{row.joinDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
