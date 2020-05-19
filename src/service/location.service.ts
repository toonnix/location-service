import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from 'src/entity/location.entity';
import { Repository, DeleteResult } from 'typeorm';
import { LocationDTO } from 'src/dto/location.dto';

@Injectable()
export class LocationService {
  constructor(@InjectRepository(LocationEntity) private readonly repo: Repository<LocationEntity>) { }

  public async getAll(): Promise<LocationDTO[]> {
    return await this.repo.find()
      .then((items: LocationEntity[]) => items.map((e: LocationEntity) => LocationDTO.fromEntity(e)));
  }

  public async get(locationCode: string): Promise<LocationDTO[]> {
    return await this.repo.find({ locationCode })
      .then(items => items.map(e => LocationDTO.fromEntity(e)));
  }

  public async create(dto: LocationDTO): Promise<LocationDTO> {
    return this.repo.save(dto)
      .then(e => LocationDTO.fromEntity(e));
  }

  public async delete(locationCode: string): Promise<DeleteResult> {
    return await this.repo.delete({ locationCode });
  }
}
