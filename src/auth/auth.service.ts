import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) { }
	async login() {
		return { token: '' }
	}
	async validateUser(email: string, password: string) {
		const user = await this.userService.findByEmail(email)
		if (user) {
			const isValidPass = await bcrypt.compare(password, user.password)
			if (isValidPass) {
				return {
					...user,
					password: undefined
				}
			}
		}
		throw new Error('Email address or password provided is invalid.')
	}
}
