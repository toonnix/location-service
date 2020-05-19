import {MigrationInterface, QueryRunner} from "typeorm";

export class init1589574967875 implements MigrationInterface {
    name = 'init1589574967875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "description"`, undefined);
        await queryRunner.query(`ALTER TABLE "location" ADD "locationEffect" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "location" ADD "slot" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "location" ADD "initialThug" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "location" ADD "initialCivilian" integer NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "initialCivilian"`, undefined);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "initialThug"`, undefined);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "slot"`, undefined);
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "locationEffect"`, undefined);
        await queryRunner.query(`ALTER TABLE "location" ADD "description" character varying NOT NULL`, undefined);
    }

}
