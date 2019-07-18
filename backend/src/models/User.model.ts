import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {ObjectType, Field, Int} from 'type-graphql';

@Entity('users')
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    private userId: number;

    @Column('text')
    @Field()
    fullName: string;

    @Column('text')
    @Field()
    email: string;
}