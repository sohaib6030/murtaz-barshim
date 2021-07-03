import React from 'react'
import ImageGallery from 'react-image-gallery';
import VerticalCarousel from '../../../components/VerticalCarousel';
import './index.css'
const Brief = () => {
    
const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <div className={'brief-container'} style={{overflow:'hidden'}}>
      <div className={'brief-content'} >
        <p className="brief-heading">
          Mutaz Barshim is a Qatari high jumping world champion, holder of the
          Asian record and, at 2.43m, has registered the second highest jump in
          history.
        </p>
        <p className={"brief-paragraph"}>
          Mutaz Barshim has always been into sports. He grew up in an extremely
          active family:
        </p>
        <p className={"brief-paragraph"}>
           his father was an athlete and all his brothers
          practised sports regularly. As a child, his father used to take him to
          the local athletics club and he loved it. At around 11 years old,
          Mutaz started going to training by himself. Focusing on the high jump,
          Mutaz soon started to reach heights he never before thought possible…
          both figuratively and literally!
        </p>
        <div className="brief-btn">
          <a className="brief-btn-text" href={"#"}>Read More</a>
        </div>
      </div>
        <div className={'brief-slider-container'}>
            <VerticalCarousel images={images}/>
        </div>  
    </div>
  )
}

export default Brief
