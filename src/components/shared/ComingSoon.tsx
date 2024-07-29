import React from 'react'
import { Typography } from '../ui'

const ComingSoon:React.FC = () => {
  return (
    <div className="grid h-screen place-content-center text-center bg-white px-4">
        <Typography as="h1" variant="xl" className="uppercase tracking-widest text-gray-700">
            Coming Soon
        </Typography>
        <Typography as="p" variant="md" className="tracking-widest text-gray-500">
            We're working hard to bring you something amazing. Stay tuned!
        </Typography>
    </div>
  )
}

export default ComingSoon
