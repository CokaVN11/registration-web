import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '@/service/user.service';
import { CreateUserDto, LoginUserDto } from '@/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    return this.userService.authenticate(email, password);
  }
}
