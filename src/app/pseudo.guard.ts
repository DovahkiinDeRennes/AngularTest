import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';



export const pseudoGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService); 


  const pseudo = route.params['username'];
if(pseudo)
  return true;
return false
};
