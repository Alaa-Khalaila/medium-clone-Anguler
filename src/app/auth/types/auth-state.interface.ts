import { BackendErrors } from "src/app/shared/types/backend-errors.interface";
import { CurrentUser } from "src/app/shared/types/current-user.interface";

export interface AuthState {
  isSubmitting: boolean
  ValidationErrors?: BackendErrors
  currentUser?: CurrentUser
  isLoggedIn: boolean
  isLoading:boolean
}
