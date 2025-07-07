import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { SECURITY_META_DATA_KEY } from "../constants/security-meta-data-key";

export const Permissions = (...permissions: string[]): CustomDecorator => {
    return SetMetadata(SECURITY_META_DATA_KEY, permissions);
};
