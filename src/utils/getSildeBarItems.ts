import type { UserRole } from '@/assets/role/role';
import { adminSidebarItems } from '@/routes/adminSidebarItems';
import { userSidebarItems } from '@/routes/userSlideBarItems';
 

export const getSildeBarItems = (role: UserRole) => {
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