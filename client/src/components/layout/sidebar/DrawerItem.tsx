'use client';

import { Box, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';

import { ListItem } from '@/components/extended/ListItem';
import { sidebarData } from '@/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DrawerItem = () => {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {sidebarData?.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            style={{ textDecoration: 'none', fontWeight: '700', color: 'inherit' }}
          >
            <ListItem
              disablePadding
              sx={{
                backgroundColor: `${pathname === item.path ? '#476D7C' : 'transparent'}`,
                color: `${pathname === item.path ? '#000' : theme.palette.primary.main}`,
              }}
            >
              <ListItemButton>
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default DrawerItem;
