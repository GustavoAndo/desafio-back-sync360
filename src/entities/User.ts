import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, length: 60})
    name: string

    @Column({nullable: false})
    ano_nascimento: number

    @Column({nullable: false, length: 30})
    estado: string

    @Column({nullable: false, length: 30})
    cidade: string

    @Column({nullable: false, length: 30})
    bairro: string

    @Column({nullable: false, length: 60})
    rua: string

    @Column({type: 'longtext', nullable: false,})
    biografia: string

}