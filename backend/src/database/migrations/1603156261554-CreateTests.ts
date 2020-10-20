import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTests1603156261554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tests',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
					}
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tests');
    }
}
