import { Module } from '@nestjs/common';
import config from '../ormconfig';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Bookmark } from './entities/bookmark.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Bookmark])
  ]
})
export class AppModule { }
