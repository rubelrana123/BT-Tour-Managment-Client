export type UserRole = 'ADMIN' | 'Super_ADMIN' | 'USER';

export function hasRole(userRoles: UserRole[], requiredRole: UserRole): boolean {
    return userRoles.includes(requiredRole);
}