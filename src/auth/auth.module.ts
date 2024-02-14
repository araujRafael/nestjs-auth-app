import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, JwtModule.register({
    secret: process.env.JWT_SECRET!,
    signOptions: { expiresIn: '30d' }
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule { }
