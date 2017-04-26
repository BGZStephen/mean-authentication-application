import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./components/home/home.component"
import { LoginComponent } from "./components/login/login.component"
import { RegisterComponent } from "./components/register/register.component"
import { ProfileComponent } from "./components/profile/profile.component"
import { DashboardComponent } from "./components/dashboard/dashboard.component"
import { AuthGuard } from './guards/auth.guard'

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent, canActivate:[AuthGuard]},
  {path: "dashboard", component: DashboardComponent, canActivate:[AuthGuard]},
]

export const router = RouterModule.forRoot(APP_ROUTES)
