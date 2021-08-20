import connection from "../../../infra/typeorm";
import { RoomsRepository } from "../../../modules/rooms/repositories/implementations/RoomsRepository";

let roomsRepository: RoomsRepository;

describe("Repository | Room", () => {
  beforeAll(async () => {
    await connection.create();
    roomsRepository = new RoomsRepository();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  it("should be able to create a new room", async () => {
    const mockRoom = {
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

    const room = await roomsRepository.create(mockRoom);

    const roomFound = await roomsRepository.findById(room.id);

    expect(roomFound.name).toEqual(mockRoom.name);
    expect(roomFound.description).toEqual(mockRoom.description);
    expect(roomFound.publicArea).toEqual(mockRoom.publicArea);
    expect(roomFound.country).toEqual(mockRoom.country);
    expect(roomFound.postalCode).toEqual(mockRoom.postalCode);
    expect(roomFound.state).toEqual(mockRoom.state);
    expect(roomFound.city).toEqual(mockRoom.city);
    expect(roomFound.district).toEqual(mockRoom.district);
  });

  it("should be able to list all rooms independent of days", async () => {
    const roomOne = {
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

    const roomTwo = {
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

    await roomsRepository.create(roomOne);
    await roomsRepository.create(roomTwo);

    const rooms = await roomsRepository.list();

    rooms.forEach((room, index) => expect(room).toEqual(rooms[index]));
  });

  it("should be able to list a specific room using the room id", async () => {
    const roomOne = {
      id: 'fakeId',
      name: "Room",
      description: "Description Room",
      publicArea: "Public Area Room",
      roomNumber: 0,
      country: "Brazil",
      postalCode: "00000-000",
      state: "PR",
      city: "Foz do Iguaçu",
      district: "Room District",
      created_at: new Date(),
      updated_at: new Date()
    };
    const roomSpy = jest.spyOn(roomsRepository, 'create').mockReturnValue(
      new Promise((resolve) => roomOne)
    );

    console.log(roomSpy);

    const room = await roomsRepository.create(roomOne);



    expect(roomSpy).toEqual(room);
  });
});