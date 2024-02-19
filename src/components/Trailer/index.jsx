import { useState } from "react";
import { fetchData } from "../../utils/apiUtils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { GiFilmProjector } from "react-icons/gi";
import { FaCircleArrowRight, FaCircleArrowLeft  } from "react-icons/fa6";
import { BsPlayFill } from "react-icons/bs";

import 'swiper/css';
import 'swiper/css/navigation';
import '../../css/trailerControls.css'
import styles from './Trailer.module.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export default function Trailer({ id, latestMovies = false }) {
  const [open, setOpen] = useState(false)
  const [embed, setEmbed] = useState([])
  const [hasTrailer, setHasTrailer] = useState(true)

  const handleTrailer = async(ev) => {
    ev.preventDefault()
    setOpen(true)

    const videos = await fetchData(`${moviesURL}${id}/videos?${apiKey}`)

    if(videos && videos.results.length > 0) {
      setHasTrailer(true)

      const filterTrailer = videos.results.filter(video => {
        const lowercaseTrailer = video.name.toLowerCase()
        return lowercaseTrailer.includes('trailer')
      })

      setEmbed([])

      filterTrailer.forEach(video => {
        setEmbed(previousVideos => {
          const objVideo = { 
            id: video.id, 
            name: video.name,
            key: video.key,
            iframe: <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title={`Youtube video - ${video.name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          }

          return [objVideo, ...previousVideos]
        })
      })

      if(filterTrailer.length === 0) setHasTrailer(false)
    }

    if(videos.results.length === 0) setHasTrailer(false)
  }

  const closeOverlay = () => {
    setOpen(false)
    setEmbed([])
  }

  return (
    <>
      {latestMovies ? (
        <span onClick={handleTrailer} className={styles.seeTrailerIcon} title="Assistir Trailer"><BsPlayFill /></span>
      ) : (
        <button onClick={handleTrailer} className={styles.btnTrailer}>
          <GiFilmProjector /> Ver Trailer
        </button>
      )}
      
      <div id="myNav" className={styles.overlay} style={{ width: `${open ? '100%' : '0%'}`}}>
        <a className={styles.closebtn} onClick={closeOverlay}>&times;</a>

        <div className={styles.overlayContent}>
          <Swiper modules={[Navigation]} navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}>
            {embed && embed.length > 0 && embed.map(video => (
              <SwiperSlide key={video.key}>
                <div key={video.id} className={styles.trailerWrapper}>
                  <h2 className={styles.titleTrailer}>{video.name}</h2>
                  {video.iframe}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {!hasTrailer ? (
            <h2 className={styles.titleNotFound}>Não encontramos nenhum trailer pertencente à esse filme. =(</h2>
          ) : (
            <>
              <div className='customNav custom-prev' title="Trailer anterior">
                <FaCircleArrowLeft />
              </div>
              <div className='customNav custom-next' title="Próximo trailer">
                <FaCircleArrowRight />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}