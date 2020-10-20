import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddUserIdToSubjects1600747167118 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'subjects', 
            new TableColumn({
                name: 'user_id',
                type: 'uuid',
                isNullable: false
            }),
        );

        await queryRunner.createForeignKey(
            'subjects',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                name: 'SubjectUser',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('subjects', 'SubjectUser');
        await queryRunner.dropColumn('subjects', 'user_id');
    }

}
