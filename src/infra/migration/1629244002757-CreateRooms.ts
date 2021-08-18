import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRooms1629244002757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rooms",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'publicArea',
                        type: 'varchar'
                    },
                    {
                        name: 'roomNumber',
                        type: 'int'
                    },
                    {
                        name: 'complement',
                        type: 'varchar',
                    },
                    {
                        name: 'country',
                        type: 'varchar',
                    },
                    {
                        name: 'postalCode',
                        type: 'varchar',
                    },
                    {
                        name: 'state',
                        type: 'char(2)',
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                    },
                    {
                        name: 'district',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rooms');
    }

}
