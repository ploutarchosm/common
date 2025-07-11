import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { passwordGenerator } from "../helpers/password-generator";

@Injectable()
export class PasswordService {
    async hash(password: string) {
        return await bcrypt.hash(password, 5);
    }

    async compare(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }

    generatePassword(length: number) {
        return passwordGenerator(length);
    }
}
