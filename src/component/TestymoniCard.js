import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const TestymoniCard = () => {
  return (
    <>
        <div className="testymoni-card d-flex align-items-center b-radius-40">
            <div className="d-flex">
                <img src="images/img-testymoni.png" alt="" />
                <div>
                    <h4 className='color-blue'>Courtney Henry</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <div className='d-flex color-blue'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TestymoniCard