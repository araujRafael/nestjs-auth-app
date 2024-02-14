import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    CanActivate
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// this import is necessary to run canActivate, otherwise it generates an error
import 'rxjs';
//  ^^^

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') implements CanActivate {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

    handleRequest(err, user) {
        if (err || !user) {
            throw new UnauthorizedException(err?.message);
        }

        return user;
    }
}