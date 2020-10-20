import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddQuestionIdToAlternatives1600131416587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'alternatives',
            new TableColumn({
                name: 'question_id',
                type: 'uuid',
                isNullable: false
            }),
        )

        await queryRunner.createForeignKey(
            'alternatives',
            new TableForeignKey({
                columnNames: ['question_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'questions',
                name: 'QuestionAlternative',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('alternatives', 'QuestionAlternative');
        await queryRunner.dropColumn('alternatives', 'question_id');
    }

}
