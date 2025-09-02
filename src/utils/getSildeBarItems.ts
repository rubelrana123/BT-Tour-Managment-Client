 
import { adminSidebarItems } from '@/routes/adminSidebarItems';
import { userSidebarItems } from '@/routes/userSlideBarItems';
import type { TRole } from '@/types';
 

export const getSildeBarItems = (role: TRole) => {
  switch (role) {
    case 'ADMIN':
    case 'Super_ADMIN':
      return adminSidebarItems;
    case 'USER':
      return userSidebarItems;
    default:
      return [];
  }
}