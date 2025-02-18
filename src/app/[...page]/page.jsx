import React from 'react'
import Edit from '../../Components/Edit';
import { notFound } from 'next/navigation'

const page = ({ params }) => {
    const isEdit = params.page[params.page.length - 1] === 'edit';

    if (!isEdit) {
        return notFound()
    }

    return (
        <div>
            <Edit />
        </div>
    );
}

export default page