import { Room } from "../../rooms/entities/Room";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum Period {
  Morning = "manhã",
  Afternoon = "tarde",
  Evening = "noite",
}

enum Status {
  Available = "disponível",
  Unavailable = "indisponível",
  Reserved = "reservada",
}

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "enum",
    enum: Period,
  })
  period: Period;

  @Column({
    type: "enum",
    enum: Status,
  })
  status: Status;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  room: Room;
}

export { Schedule };
