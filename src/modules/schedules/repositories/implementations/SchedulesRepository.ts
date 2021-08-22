import { getRepository, Repository } from 'typeorm';

import { Schedule } from "../../entities/Schedule";
import { ISchedulesRepository, ScheduleDTO } from "../ISchedulesRepository";

class SchedulesRepository implements ISchedulesRepository {
  private repository: Repository<Schedule>;

  constructor() {
    this.repository = getRepository(Schedule);
  }

  async create({ period, status, date, room_id }: ScheduleDTO): Promise<Schedule> {
    const schedule = this.repository.create({
      period,
      status,
      date,
      room_id
    });

    await this.repository.save(schedule);

    return schedule;
  }

}

export { SchedulesRepository };