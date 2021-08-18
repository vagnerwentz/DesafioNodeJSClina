import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('rooms')
class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    publicArea: string;

    @Column()
    roomNumber: number;

    @Column({ nullable: true })
    complement?: string;

    @Column()
    country: string;

    @Column()
    postalCode: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    district: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Room };