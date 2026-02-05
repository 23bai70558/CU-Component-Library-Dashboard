'use client';

import { SidebarProps } from '@/types/layout';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { usePathname, useRouter } from 'next/navigation';

const DRAWER_WIDTH = 240;

export default function Sidebar({ open, onClose, menuItems }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          background: '#FFFFFF',
          borderRight: '2px solid #FFE5EE',
        },
      }}
    >
      <Toolbar sx={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0D0 100%)' }} />
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              selected={pathname === item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                mx: 1,
                borderRadius: '8px',
                color: pathname === item.path ? '#FFFFFF' : '#666',
                background: pathname === item.path ? 'linear-gradient(135deg, #FFB6D9 0%, #FFC0D0 100%)' : 'transparent',
                '&:hover': {
                  background: pathname === item.path ? 'linear-gradient(135deg, #FFB6D9 0%, #FFC0D0 100%)' : '#FFF5F8',
                },
                '& .MuiListItemIcon-root': {
                  color: pathname === item.path ? '#FFFFFF' : '#FFB6D9',
                  minWidth: 40,
                }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: pathname === item.path ? 600 : 500,
                    color: pathname === item.path ? '#FFFFFF' : '#333'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
