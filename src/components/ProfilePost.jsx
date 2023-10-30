import React, { Fragment } from 'react'

const ProfilePost = () => {
    return (
        <Fragment>
            <div className="w-full flex mt-8 space-x-4">
                {/* left */}
                <div className="w-[35%] h-[200px] flex justify-center items-center">
                    <img src={`https://shorturl.at/ekpyP`} alt="" className="h-full w-full object-cover" />
                </div>
                {/* right */}
                <div className="flex flex-col w-[65%]">
                    <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, aliquam.
                    </h1>
                    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                        <p>@akshit</p>
                        <div className="flex space-x-2 text-sm">
                            <p>02/02/2023</p>
                            <p>2:00 pm</p>
                        </div>
                    </div>
                    <p className="text-sm md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ducimus vero quisquam quam alias hic totam, quaerat atque asperiores fuga expedita ad dicta voluptatum recusandae modi id! Reprehenderit aliquam quo magni odio voluptate ad suscipit quisquam? Ipsam omnis similique provident? Mollitia provident consequuntur, iste facere reiciendis cum debitis tempore ad!</p>
                </div>

            </div>
        </Fragment>
    )
}

export default ProfilePost
