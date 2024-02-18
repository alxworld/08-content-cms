import React from 'react'
import heroImage from './assets/hero.svg'

function Hero() {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Ramapuram Corporate Fellowship</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolore. Harum neque non a sapiente. Quam corrupti sapiente, repellat eligendi labore expedita culpa animi aliquid earum et sint inventore molestias.
                </p>
            </div>
            <div className="img-container">
                <img className='img' src={heroImage} alt='hero image' />
            </div>
        </div>
    </section>
  )
}

export default Hero