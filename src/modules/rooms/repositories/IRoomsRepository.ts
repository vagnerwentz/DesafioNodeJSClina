import { Room } from '../entities/Room';

interface ICreateRoomDTO {
  name: string,
  description: string,
  publicArea: string,
  roomNumber: number,
  country: string,
  postalCode: string,
  state: string,
  city: string,
  district: string,
}

interface IRoomsRepository {
  create(room: ICreateRoomDTO): Promise<Room>;
  list(): Promise<Room[]>;
  findById(id: string): Promise<Room>;
}

export { IRoomsRepository, ICreateRoomDTO };