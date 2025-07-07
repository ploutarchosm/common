import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { hasPermission } from "../helpers/has-permission";
import { SECURITY_META_DATA_KEY } from "../constants/security-meta-data-key";

@Injectable()
export class PermissionsGuard implements CanActivate {
    private readonly reflector: Reflector;
    constructor(reflector: Reflector) {
        this.reflector = reflector;
    }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const permissions = this.reflector.get(
            SECURITY_META_DATA_KEY,
            context.getHandler(),
        );
        if (!permissions) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
            return false;
        }
        return hasPermission(request, permissions);
    }
}
