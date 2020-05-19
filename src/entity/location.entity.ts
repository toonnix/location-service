import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { MaxLength } from 'class-validator';

@Entity({ name: 'location' })
export class LocationEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  @MaxLength(50)
  locationCode: string;

  @Column({ type: 'varchar' })
  @MaxLength(50)
  title: string;

  @Column({ type: 'varchar' })
  locationEffect: string;

  @Column({ type: 'integer' })
  slot: number;

  @Column({ type: 'integer' })
  initialThug: number;

  @Column({ type: 'integer' })
  initialCivilian: number;
}