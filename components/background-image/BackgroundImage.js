import { useEffect, useState } from 'react';
import Image from 'next/image';

function getWindowDimensions() {
    const {
        innerWidth: width, innerHeight: height
    } = window;
    return {
        width, height,
    };
}

export default function BackgroundImage() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        function handleResize() {
            const { width, height } = getWindowDimensions();
            setWidth(width);
            setHeight(height);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (width && height) {
        return (
            <Image
                src= {'https://source.unsplash.com/${width}x/${height}/?nature,water,mountains,landscape'}
                width={width}
                height={height}
                alt = 'background image'
                quality= '100'
            />
        );

    }

    return null;
}