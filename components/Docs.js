import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

const Docs = () => {
  return (
    <section className='bg-white px-10 md:px-0'>
        <div className="max-w-3xl mx-auto text-sm text-gray-700 py-8">
            <div className='flex items-center justify-between pb-5'>
                <h2 className='font-medium flex-grow'>My Documents</h2>
                <p className='mr-12'>Date Created</p>
                <Button
                color='gray'
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="border-0"
                >
                    <Icon name="folder" size="3xl"/>
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Docs