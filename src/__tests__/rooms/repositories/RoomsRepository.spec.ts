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
});