import React from 'react';
import '../styles/ExperienceCard.css'

export default function ExperienceCard(props) {
  return (
    <div className='exp-card'>
      <section className='exp-item'>
       <h1>Bucket List:</h1> 
       <ul>
        <li className='bucketlist-item'>{props.bucketlist_item}</li>
        </ul>
      </section>
    </div>
  )
}