import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users = [
  {
    id: 1,
    username: 'elves@teste.com',
    password: '$2b$10$hb8dAbiweTF7M5omobwUjuf9p0V2ynlcm.fjmYRecadviqNb/xwhC',
    role: 'admin',
  },
  {
    id: 2,
    username: 'acsa@teste.com',
    password: '$2b$10$EKuXS9k9Wph3Xm4zvVh68u2xKvn/iNrvu24KBZGapAnaz6ve5GxSC',
    role: 'user',
  },
  {
    id: 3,
    username: 'yasmim@teste.com',
    password: '$2b$10$pHDkLCASiVEKKRU8brrP2emjlPKpl2DSbE5OQW7EQz/M4nq4un2dG',
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(username, password) {
    const user = this.validateCredentials(username, password);

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };
    return this.jwtService.sign(payload);
  }

  validateCredentials(username, password) {
    const user = users.find(
      (user) =>
        user.username === username &&
        bcrypt.compareSync(password, user.password),
    );

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
