import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { validateUserPermission } from "../utils/validateUserPermission";

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
}

export function useCan({ permissions, roles }: UseCanParams) {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  const userHasValidPermissions = validateUserPermission({ user, permissions, roles });

  return userHasValidPermissions;
}