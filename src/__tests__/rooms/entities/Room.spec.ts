import { Room } from '../../../modules/rooms/entities/Room';

describe("Model | Room", () => {
  it("should be able to create a room with all props", () => {
    const room = new Room();

    Object.assign(room, {
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
      updated_at: new Date(),
    });

    expect(room).toMatchObject({
      name: "Room",
      description: "Description Room",
      publicArea: "Public Area Room",
      roomNumber: 0,
      country: "Brazil",
      postalCode: "00000-000",
      state: "PR",
      city: "Foz do Iguaçu",
      district: "Room District",
      created_at: room.created_at,
      updated_at: room.updated_at,
    });

    expect(room.created_at).toBeInstanceOf(Date);
    expect(room.updated_at).toBeInstanceOf(Date);
  })
});