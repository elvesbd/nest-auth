import { Injectable } from '@nestjs/common';

const users = [
  {
    id: 1,
    username: 'elves@teste.com',
    password: '$2b$10$hb8dAbiweTF7M5omobwUjuf9p0V2ynlcm.fjmYRecadviqNb/xwhC',
  },
  {
    id: 2,
    username: 'acsa@teste.com',
    password: '$2b$10$EKuXS9k9Wph3Xm4zvVh68u2xKvn/iNrvu24KBZGapAnaz6ve5GxSC',
  },
  {
    id: 3,
    username: 'yasmim@teste.com',
    password: '$2b$10$pHDkLCASiVEKKRU8brrP2emjlPKpl2DSbE5OQW7EQz/M4nq4un2dG',
  },
];

@Injectable()
export class AuthService {
  login(username, password) {
    console.log(username, password);
  }
}
