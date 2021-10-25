import React from 'react';
import WorkshopItem from './WorkshopItem';
import Spinner from '../../shared-components/Spinner'

function WorkshopList({ loading, posts }) {
    const content = posts.map(item => <WorkshopItem data={item} key={item.sys.id} />);

    return (
        <>
            {
                loading ? <Spinner /> :
                    <div className="container">
                        <div className="row">{content}</div>
                    </div>
            }
        </>
    )
}

export default WorkshopList;
