import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import Question from './Question';

@Entity('alternatives')
class Alternative {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    alternative: string;

    @ManyToOne(() => Question)
    @JoinColumn({ name: 'question_id' })
    user: Question;

    @Column()
    question_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Alternative;