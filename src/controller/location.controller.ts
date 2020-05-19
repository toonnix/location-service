import { Controller, Body, Get, Param, Post, Delete } from '@nestjs/common';
import { LocationService } from 'src/service/location.service';
import { LocationDTO } from 'src/dto/location.dto';

@Controller('location')
export class LocationController {
  constructor(private serv: LocationService) { }

  @Get()
  public async getAll(): Promise<LocationDTO[]> {
    return await this.serv.getAll()
  }

  @Get(':locationCode')
  public async findByHeroCode(@Param('locationCode') locationCode: string) {
    return await this.serv.get(locationCode)
  }

  @Post()
  public async post(@Body() dto: LocationDTO): Promise<LocationDTO> {
    return this.serv.create(dto);
  }

  @Delete(':locationCode')
  public async delete(@Param('locationCode') locationCode: string) {
    return await this.serv.delete(locationCode);
  }
}
