import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AddExperience(props) {
    // const [experiences, manageExperiences] = useState([])

    const [addExperience, setExperience] = useState({
        bucketlist_item: ``,
        city_id: props.match.params.cityId
    })

    // const addItem = () => {
    //     let newList = [...experiences, 'new experience']
    //     manageExperiences(newList)
    //     console.log(experiences)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(addExperience.bucketlist_item)
        axios.post(`http://localhost:3001/api/experiences`, {
            bucketlist_item: addExperience.bucketlist_item,
            city_id: addExperience.city_id
        })
        let newExperience = {
            bucketlist_item: ``,
            city_id: props.match.params.cityId
        }
        setExperience(newExperience)
        window.location.reload()
    }

    const handleChange = (e) => {
        const postedExperience = { ...addExperience }
        postedExperience[e.target.id] = e.target.value
        setExperience(postedExperience)
        // console.log(addExperience)
    }

    return (
        <div className='bucketlist-form'>
            <h1 className='bucketlist-title'>Add bucketlist item</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <section className='input'>
                    New item: <input type='text'
                    bucketlist_item='bucketlist_item'
                    onChange={(e) => handleChange(e)}
                    value={addExperience.bucketlist_item}
                    
                    id='bucketlist_item'/>
                </section>
                <button className='addButton'>Add item</button>
            </form>
        </div>

    )
}

export default AddExperience;