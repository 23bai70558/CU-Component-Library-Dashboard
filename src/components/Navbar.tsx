'use client';

import { NavbarProps } from '@/types/layout';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0D0 100%)',
        boxShadow: '0 4px 12px rgba(255, 105, 180, 0.2)',
        borderBottom: '2px solid #FFE5EE'
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, color: '#FFFFFF' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '0.5px'
          }}
        >
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
