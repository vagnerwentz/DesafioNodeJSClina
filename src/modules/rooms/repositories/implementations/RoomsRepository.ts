import { getRepository, Repository } from "typeorm";
import { Room } from "../../entities/Room";
import { ICreateRoomDTO, IRoomsRepository } from "../IRoomsRepository";

class RoomsRepository implements IRoomsRepository {
  private repository: Repository<Room>;

  constructor() {
    this.repository = getRepository(Room);
  }

  async create(roomData: ICreateRoomDTO): Promise<Room> {
    const room = this.repository.create(roomData);

    await this.repository.save(room);

    return room;
  }

  async list(): Promise<Room[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Room> {
    return this.repository.findOne(id);
  }

}

export { RoomsRepository };