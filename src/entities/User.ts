import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, length: 60})
    name: string

    @Column({nullable: false})
    birthday: Date

    @Column({nullable: false, length: 30})
    state: string

    @Column({nullable: false, length: 30})
    city: string

    @Column({nullable: false, length: 30})
    district: string

    @Column({nullable: false, length: 60})
    street: string

    @Column({type: 'longtext', nullable: false,})
    biography: string

}