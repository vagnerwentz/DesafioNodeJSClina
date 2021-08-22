import connection from '../../../infra/typeorm';
import { SchedulesRepository } from '../../../modules/schedules/repositories/implementations/SchedulesRepository';
import { RoomsRepository } from '../../../modules/rooms/repositories/implementations/RoomsRepository';

let roomsRepository: RoomsRepository;
let schedulesRepository: SchedulesRepository;

describe("Repository | Schedules", () => {
  beforeAll(async () => {
    await connection.create();
    roomsRepository = new RoomsRepository();
    schedulesRepository = new SchedulesRepository();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });
  it("should be able to create a schedule to a room", async () => {
    const roomData = {
      name: "Room",
      description: "Description Room",
      publicArea: "Public Area Room",
      roomNumber: 0,
      country: "Brazil",
      postalCode: "00000-000",
      state: "PR",
      city: "Foz do Iguaçu",
      district: "Room District",
    };

    const room = await roomsRepository.create(roomData);

    const scheduleData = {
      period: 'manhã',
      status: 'disponível',
      date: new Date(),
      room_id: room.id,
    };

    const schedule = await schedulesRepository.create(scheduleData);

    expect(schedule).toHaveProperty('id');
    expect(schedule.date).toEqual(scheduleData.date);
    expect(schedule).toHaveProperty('room_id');
    expect(schedule.room_id).toEqual(scheduleData.room_id);
  });
});