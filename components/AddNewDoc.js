import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'

const AddNewDoc = () => {
  return (
    <section className='bg-[#F8F9FA] pb-10 px-10'>
        <div className="max-w-3xl mx-auto">
            <div className="py-6 flex justify-between items-center">
                <h2 className="text-gray-700 text-lg">Start A New Document</h2>

                <Button
                color='gray'
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="border-0"
                >
                    <Icon name="more_vert" size="3xl"/>
                </Button>
            </div>
            <div className="">
                <div className="relative border-[1px] cursor-pointer hover:border-blue-700 rounded-sm h-52 w-40">
                <Image objectFit='contain' src="https://links.papareact.com/pju" layout="fill"/>
                </div>

                <p className='ml-2 mt-2 text-sm'>Blank</p>
            </div>
        </div>
    </section>
  )
}

export default AddNewDoc