import { Schedule } from "../entities/Schedule";

interface ScheduleDTO {
  period: string;
  status: string;
  date: Date;
  room_id: string;
}

interface ISchedulesRepository {
  create({ period, status, date, room_id }: ScheduleDTO): Promise<Schedule>;
}

export { ISchedulesRepository, ScheduleDTO };