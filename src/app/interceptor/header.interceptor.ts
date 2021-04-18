import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JWTTokenService } from '../service/jwttoken.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(
    private jwt: JWTTokenService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.jwt.getToken('token')}`
      }
    });
    return next.handle(request);
  }
}
