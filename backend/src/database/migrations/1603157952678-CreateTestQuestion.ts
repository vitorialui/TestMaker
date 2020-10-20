import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateTestQuestion1603157952678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'testquestion',
                columns: [
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
        await queryRunner.addColumn(
            'testquestion', 
            new TableColumn({
                name: 'question_id',
                type: 'uuid',
                isPrimary: true,
                isNullable: false
            }),
        );

        await queryRunner.createForeignKey(
            'testquestion',
            new TableForeignKey({
                columnNames: ['question_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'questions',
                name: 'QuestionIdTest',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
        await queryRunner.addColumn(
            'testquestion', 
            new TableColumn({
                name: 'test_id',
                type: 'uuid',
                isPrimary: true,
                isNullable: false
            }),
        );

        await queryRunner.createForeignKey(
            'testquestion',
            new TableForeignKey({
                columnNames: ['test_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tests',
                name: 'TestIdTest',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('testquestion', 'QuestionIdTest');
        await queryRunner.dropColumn('testquestion', 'question_id');
        await queryRunner.dropForeignKey('testquestion', 'TestIdTest');
        await queryRunner.dropColumn('testquestion', 'test_id');
        await queryRunner.dropTable('testquestion');
    }
}
