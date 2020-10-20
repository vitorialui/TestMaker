import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Subject from './Subject';

@Entity('questions')
class Question {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    enunciado: string;

    @ManyToOne(() => Subject)
    @JoinColumn({ name: 'subject_id' })
    subject: Subject;

    @Column()
    subject_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Question;