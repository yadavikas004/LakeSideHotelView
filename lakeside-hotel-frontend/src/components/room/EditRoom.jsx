// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { getRoomById, updateRoom } from '../utils/ApiFunctions'
import { Link, useParams } from 'react-router-dom'

const EditRoom = () => {
  const [room, setRoom] = useState({
    photo: "",
    roomType: "",
    roomPrice: ""
  })

  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [imagePreview, setImagePreview] = useState("")
  const { roomId } = useParams()

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setRoom({ ...room, photo: selectedImage })
    setImagePreview(URL.createObjectURL(selectedImage))
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setRoom({ ...room, [name]: value })
  }

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await getRoomById(roomId)
        setRoom(roomData)
        setImagePreview(roomData.photo)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRoom()
  }, [roomId])


  const handleSubmit = async (e) => {
    e.preventDeafult()
    try {
      const response = await updateRoom(roomId, room)
      if (response.status === 200) {
        setSuccessMessage("Room updated successfully!")
        const updatedRoomData = await getRoomById(roomId)
        setRoom(updatedRoomData)
        setImagePreview(updatedRoomData.photo)
        setErrorMessage("")
      } else {
        setErrorMessage("Error updating room")
      }
    } catch (error) {
      console.error(error)
      setErrorMessage(error.message)
    }
  }

  return (
    <>
      <section className='container, mt-5 mb-5'>
      <h3 className="text-center mb-5 mt-5">Edit Room</h3>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>
            <h2 className='mt-5 mb-2 text-align-center'>Update Room</h2>
            {successMessage && (
              <div className='alert alert-success fade show'>{successMessage}</div>
            )}
            {errorMessage && (
              <div className='alert alert-danger fade show'>{errorMessage}</div>
            )}
            <form action="" onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor="roomType" className='form-label'>Room Type</label>
                <input
                  className='form-control'
                  required
                  id='roomType'
                  type='text'
                  name='roomType'
                  value={room.roomType}
                  onChange={handleInputChange}
                />
              </div>


              <div className='mb-3'>
                <label htmlFor="roomPrice" className='form-label'>Room Price</label>
                <input
                  className='form-control'
                  required
                  id='roomPrice'
                  type='number'
                  name='roomPrice'
                  value={room.roomPrice}
                  onChange={handleInputChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor="photo" className='form-label'>Room Photo</label>
                <input
                  id='photo'
                  name='photo'
                  type='file'
                  required
                  className='form-control'
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img src={`data:image/jpeg;base64,${imagePreview}`}
                    alt='Preview Room Photo'
                    style={{ maxWidth: "400px", maxHeight: "400px" }}
                    className='mb-3'
                  />
                )}
              </div>
              <div className='d-grid gap-2 d-md-flex mt-2'>
                <Link to={"/existing-rooms"} className="btn btn-outline-info ml-5">Back</Link>
                <button className='btn btn-outline-warning ' type='submit'>Edit Room</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditRoom