import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact({listing}) {
    const [owner, setowner] = useState(null)
    const [message, setMessage] = useState('')
    const onChange = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() => {
        const fetchowner = async () => {
            try {
                const res = await fetch(`/api/user/${listing.userRef}`)
                const data = await res.json()
                setowner(data)
            } catch (error) {
                console.log(error)               
            }
        }
        fetchowner()

    }, [listing.userRef])
  return (
    <>
    {owner && (
        <div className='flex flex-col gap-2'>
            <p>Contact <span className='font-semi-bold'>{owner.username}</span> for 
            <span className='font-semi-bold'>{listing.name.toLowerCase()}</span></p>
            <textarea 
                name="message" 
                id="message" 
                rows="2" 
                value={message} 
                onChange={onChange}
                placeholder='Enter your message here...'
                className='w-full border p-3 rounded-lg'
            ></textarea>

            <Link to={`mailto:${owner.email}
            ?subject=Regarding ${listing.name}&body=${message}`}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
            >
                Send Message
            </Link>
        </div>
    )}
    </>
  )
}
