import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get<string>('MYSQL_DB_LOCALHOST'),
      port: configService.get<number>('MYSQL_DB_PORT'),
      username: configService.get<string>('MYSQL_DB_USERNAME'),
      password: configService.get<string>('MYSQL_DB_PASSWORD'),
      database: configService.get<string>('MYSQL_DB_DATABASE'),

      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    inject: [ConfigService],
 }),
  UsuarioModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
