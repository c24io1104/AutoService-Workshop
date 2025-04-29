import { BodyParam, JsonController, Post } from 'routing-controllers';
import { AuthService } from '../services/AuthService';

@JsonController('/auth')
export class AuthController {
  private authService = new AuthService();

  @Post('/register')
  async register(
    @BodyParam('name') name: string,
    @BodyParam('email') email: string,
    @BodyParam('phone') phone: string
  ) {
    return this.authService.registerUser(name, email, phone);
  }
}