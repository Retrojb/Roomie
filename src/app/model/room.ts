// @TODO change room_type to only accept 3 types [private, public, shared]

export interface Rooms {
  id: number,
  room_name: string,
  room_type: string,
  room_size: string,
  room_owner?: string,
}
