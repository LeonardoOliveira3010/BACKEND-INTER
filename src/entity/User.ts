import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
} from 'typeorm'


// Conceito decorator
@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: number

    @Column()
    accountNumber: number

    @Column()
    accountDigit: number

    @Column()
    wallet: string

    @Column()
    email: string

    @Column()
    password: string
}