import { Routes } from '@angular/router';
import { HomeComponent } from "./../home/home.component";
import { StructuralComponent } from "./../structural/structural.component";
import { InteractionComponent } from "./../interaction/interaction.component";
import { PipesComponent } from "./../pipes/pipes.component";
import { ServiceComponent } from "./../service/service.component";
import { FormComponent } from "./../form/form.component";
import { TaskManagerComponent } from "./../task-manager/task-manager.component";
import { AddOreditTaskComponent } from "./../task-manager/add-oredit-task/add-oredit-task.component";
import { UserdetailComponent } from "./../userdetail/userdetail.component";
import { BlogHomeComponent } from "./../blog-home/blog-home.component";
import { BlogComponent } from "./../blog-home/blog/blog.component";
import { AuthGuard } from "./auth.guard";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "structural",
    component: StructuralComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
   {
    path: "interaction",
    component: InteractionComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
  {
    path: "pipes",
    component: PipesComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
   {
    path: "service",
    component: ServiceComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
   {
    path: "user/:id",
    component: UserdetailComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
  {
    path: "forms",
    component: FormComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
  {
    path: "taskManager",
    component: TaskManagerComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
  {
    path: "addorEdit",
    component: AddOreditTaskComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
  {
    path: "addorEdit/:id",
    component: AddOreditTaskComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
    {
    path: "blogs",
    component: BlogHomeComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
  {
    path: "blog/:id",
    component: BlogComponent,
    pathMatch: "full",
     canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];