import React from "react";
import Sale from "./Sale";
import ChildContent from "./ChildContent";
import Contact from "./Contact";



const sale = [ 
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet1670777759.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet_second1670553209.webp',
        path : '/'
    }
];

const content = [
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet1670558087.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet_second1670558088.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet1670558029.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet_second1670558029.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet1670558071.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet_second1670558071.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet1670558053.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet_second1670558053.webp',
        path : '/'
    },
    {
        image : 'https://media.canifa.com/Simiconnector/list_image_tablet1670558102.webp',
        path : '/'
    }
];

function Content () {
    return (
        <>
            <Sale sale={sale}/>
            <ChildContent childContent={content} />
            <Contact/>
        </>
    );
}

export default Content;