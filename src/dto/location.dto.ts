import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
import { LocationEntity } from 'src/entity/location.entity';

export class LocationDTO implements Readonly<LocationDTO> {
  @ApiProperty({ type: 'string', uniqueItems: true })
  @MaxLength(50)
  locationCode: string;

  @ApiProperty({ type: 'string' })
  @MaxLength(50)
  title: string;

  @ApiProperty({ type: 'string' })
  locationEffect: string;

  @ApiProperty({ type: 'integer' })
  slot: number;

  @ApiProperty({ type: 'integer' })
  initialThug: number;

  @ApiProperty({ type: 'integer' })
  initialCivilian: number;

  public static from(dto: Partial<LocationDTO>) {
    const location = new LocationDTO();
    location.locationCode = dto.locationCode;
    location.title = dto.title;
    location.locationEffect = dto.locationEffect;
    location.slot = dto.slot;
    location.initialThug = dto.initialThug;
    location.initialCivilian = dto.initialCivilian;
    return location;
  }

  public static fromEntity(entity: LocationEntity) {
    return this.from({
      locationCode: entity.locationCode,
      title: entity.title,
      locationEffect: entity.locationEffect,
      slot: entity.slot,
      initialThug: entity.initialThug,
      initialCivilian: entity.initialCivilian,
    });
  }

  public toEntity(this: LocationDTO) {
    const location = new LocationEntity();
    location.locationCode = this.locationCode;
    location.title = this.title;
    location.locationEffect = this.locationEffect;
    location.slot = this.slot;
    location.initialThug = this.initialThug;
    location.initialCivilian = this.initialCivilian;
    location.createDateTime = new Date();
    return location;
  }
}
