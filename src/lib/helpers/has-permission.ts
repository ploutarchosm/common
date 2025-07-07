import { Request } from "express";
import { IPermission } from "../interfaces/permission.interface";
import * as pm from 'picomatch';

export function hasPermission(req: Request, permissions: string[]) {
    if (
        !(req && req.user && req.user.permissions && req.user.permissions.length)
    ) {
        return false;
    }
    return permissions.every(permission => {
        return req.user.permissions.some((x: IPermission) =>
            pm(x.name, { bash: true })(permission),
        );
    });
}
