import React from 'react'
import './home.scss'
import SearchBox from '../../components/SeachBox/SearchBox'

function Home() {


  const boxes = [
    {
      id: '1',
      digit: '20+',
      info: 'Years of experience'
    },
    {
      id: '2',
      digit: '300',
      info: 'Award Gained'
    },
    {
      id: '3',
      digit: '2000+',
      info: 'Property Ready '
    },
  ]

  return (
    <div className='home'>
      <div className='text'>
        <div className="wrapper">
          <h1 className=' title'>Explore Properties and Find Your Perfect Home
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quod voluptatem illum accusantium, excepturi eos error corrupti ad consequatur sed!
          </p>
          <SearchBox />
          <div className='boxes'>
            {boxes.map(box => {
              return (
                <div key={box.id}>
                  <h1>{box.digit}</h1>
                  <h2>{box.info}</h2>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='image'>
        <img src='./house.png' alt='' />
      </div>
    </div>
  )
}

export default Home
