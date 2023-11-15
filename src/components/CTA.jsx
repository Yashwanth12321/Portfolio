import React from 'react'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'> lets connect <br className='sm:block hidden' />
        and create something amazing</p>

        <Link to='/contact' className='btn'>contact</Link>
    </section>
  )
}

export default CTA