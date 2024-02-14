import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login() {
        throw new Error('Method not implemented.');
    }
    validateUser(email: string, password: string) {
        throw new Error('Method not implemented.');
    }
}
