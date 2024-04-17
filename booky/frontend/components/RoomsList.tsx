"use client"

import Link from "next/link"

const RoomsList = ({ rooms }: { rooms: any }) => {
  return (
    <>
      {rooms.data.map((room: any) => (
        <div key={room.id}>
          <Link href={`/room/${room.id}`}>room </Link>
        </div>
      ))}
    </>
  )
}

export default RoomsList
