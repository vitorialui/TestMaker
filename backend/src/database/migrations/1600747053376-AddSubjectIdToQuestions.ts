import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddSubjectIdToQuestions1600747053376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'questions', 
            new TableColumn({
                name: 'subject_id',
                type: 'uuid',
                isNullable: false
            }),
        );

        await queryRunner.createForeignKey(
            'questions',
            new TableForeignKey({
                columnNames: ['subject_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'subjects',
                name: 'QuestionSubject',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('questions', 'QuestionSubject');
        await queryRunner.dropColumn('questions', 'subject_id');
    }

}
