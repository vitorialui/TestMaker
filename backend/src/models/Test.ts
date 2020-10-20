import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn, JoinTable, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Subject from "./Subject";
import Question from "./Question";

@Entity()
export class Test {

    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Subject)
    @JoinColumn({ name: 'subject_id' })
    subject: Subject;

    @PrimaryGeneratedColumn()
    subject_id: string;

    @Column()
    title: string;

    @ManyToMany(type => Question)
    @JoinTable()
    questions: Question[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}