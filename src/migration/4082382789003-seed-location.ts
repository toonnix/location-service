import { MigrationInterface, QueryRunner } from "typeorm";

export class seedLocation4082382789003 implements MigrationInterface {
    name = 'seedLocation4082382789003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("location")
            .values([
                {
                    locationCode: "AVENGER_TOWER",
                    title: "Avenger Tower",
                    locationEffect: "You may draw 1 card",
                    slot: 3,
                    initialThug: 0,
                    initialCivilian: 1,
                },
                {
                    locationCode: "SHIELD_HELICARRIER",
                    title: "S.H.I.E.L.D. Helicarrier",
                    locationEffect: "You may move to any other Location",
                    slot: 4,
                    initialThug: 2,
                    initialCivilian: 1,
                },
                {
                    locationCode: "NYPD_STATIOM",
                    title: "NYPD Station",
                    locationEffect: "You may discard 1 [Thug] from any Location",
                    slot: 4,
                    initialThug: 1,
                    initialCivilian: 2,
                },
                {
                    locationCode: "STARK_LAB",
                    title: "Stark Lab",
                    locationEffect: "You may get 2 [ATTACK] tokens",
                    slot: 4,
                    initialThug: 2,
                    initialCivilian: 1,
                },
                {
                    locationCode: "TIMES_SQUARE",
                    title: "Times Square",
                    locationEffect: "You may rescue 1 [Civilian] from this Location",
                    slot: 4,
                    initialThug: 2,
                    initialCivilian: 1,
                }

            ])
            .execute()

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}