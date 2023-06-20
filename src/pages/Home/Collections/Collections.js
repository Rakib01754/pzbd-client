import React from 'react';

const Collections = () => {
    const spareCategories = [
        {
            productId: '01',
            title: 'Logic Boards',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/LOGIC-LOW.jpg'
        },
        {
            productId: '02',
            title: 'Fuser Units',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/FUSER-LOW-2.jpg'
        },
        {
            productId: '03',
            title: 'Transfer Units',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/TRANSFER-BELT-LOW.jpg'
        },
        {
            productId: '04',
            title: 'Pickup Rollers',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/PICKUP-ROLLER-LOW.jpg'
        },
        {
            productId: '05',
            title: 'Print Heads',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/PRINT-HEAD-LOW.jpg'
        },
        {
            productId: '06',
            title: 'Pressure Rollers',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/PRESSURE-ROLLER-LOW.jpg'
        },
        {
            productId: '07',
            title: 'Power Boards',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/POWER-BOARD-LOW.jpg'
        },
        {
            productId: '08',
            title: 'Drum Units',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/DRUM-UNIT-LOW.jpg'
        },
        {
            productId: '09',
            title: 'Heating Assy',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/HEATING-ELEMENT-LOW.jpg'
        },
        {
            productId: '10',
            title: 'Developer Units',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/DEVELOPER-UNIT-LOW.jpg'
        },
        {
            productId: '11',
            title: 'Teflon Sleeves',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/TEFLON-Sleeve-LOW.jpg'
        },
        {
            productId: '12',
            title: 'Blades & OPC',
            image: 'https://printermasters.co.ke/wp-content/uploads/2020/09/OPC-BLADES-LOW.jpg'
        },
    ]
    return (
        <div className='w-[95%] mx-auto'>
            <h3 className='text-2xl bg-gray-50 p-4 my-2 font-bold text-center text-[#FF0000]'>Spare Parts Collection</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
                {spareCategories.map((sparecategory, i) =>
                    <div key={i} className='border border-black rounded'>
                        <img src={sparecategory.image} alt="" className='p-2' />
                        <h3 className='font-bold text-xl p-2 text-center'>{sparecategory.title}</h3>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Collections;