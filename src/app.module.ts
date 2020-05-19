import { LocationController } from './controller/location.controller';
import { LocationService } from './service/location.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationEntity } from './entity/location.entity';
import { configService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([
      LocationEntity
    ])],
  controllers: [
    LocationController
  ],
  providers: [
    LocationService
  ],
})
export class AppModule { }
