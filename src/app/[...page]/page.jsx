import React from 'react'
import Edit from '@/Components/Edit';

const page = ({ params }) => {
    const isEdit = params.page[params.page.length - 1] === 'edit';

    if (!isEdit) {
        return <div>404 - Not Found</div>;
    }

    return (
        <div>
            <Edit />
        </div>
    );
}

export default page