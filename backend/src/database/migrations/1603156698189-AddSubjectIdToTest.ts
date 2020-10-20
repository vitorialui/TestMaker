import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddSubjectIdToTest1603156698189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'tests',
            new TableColumn({
                name: 'subject_id',
                type: 'uuid',
                isNullable: false
            }),
        )

        await queryRunner.createForeignKey(
            'tests',
            new TableForeignKey({
                columnNames: ['subject_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'subjects',
                name: 'TestSubject',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tests', 'TestSubject');
        await queryRunner.dropColumn('tests', 'subject_id');
    }

}
