import React, {useContext} from 'react';
import {WorkshopListContext} from "../../../contexts/WorkshopContext";
import WorkshopItem from "../workshop/WorkshopItem";
import Spinner from "../../shared-components/Spinner";

const RandomWorkshops = () => {
    const {randomWorkshops, Loading} = useContext(WorkshopListContext);
    const content = randomWorkshops.map(item => <WorkshopItem data={item} key={item.fields.id} />);
    return (
        <>
            {
                Loading ? <Spinner /> :
                    <div className="container">
                        <div className="row">{content}</div>
                    </div>
            }
        </>
    )
}

export default RandomWorkshops
