import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSchedule1629464351684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "schedules",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "period",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "date",
            type: "timestamp with time zone",
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
          {
            name: 'room_id',
            type: 'uuid',
          }
        ],
      }
      ),
    );
    await queryRunner.createForeignKey(
      'schedules',
      new TableForeignKey({
        name: 'ScheduleRoom',
        columnNames: ['room_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('schedules', 'ScheduleRoom');
    await queryRunner.dropColumn('schedules', 'room_id');
    await queryRunner.dropTable('schedules');
  }
}
