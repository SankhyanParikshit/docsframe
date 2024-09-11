import React, { useState, useEffect, useRef } from 'react';

import Card from './Card';
import Saaadbar from './Saaadbar';

const Foreground = () => {
    const ref = useRef(null);

    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem('cardsData');
        return storedData ? JSON.parse(storedData) : [{ main_text: "", footer_text: "", tag: { isOpen: false, Card_color: "bg-amber-950" } }];
    });

    useEffect(() => {
        localStorage.setItem('cardsData', JSON.stringify(data));
    }, [data]);

    const [openIndex, setOpenIndex] = useState(null);

    const toggleTag = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const handleMainTextChange = (index, newText) => {
        const newData = [...data];
        newData[index].main_text = newText;
        setData(newData);
    };

    const handleFooterTextChange = (index, newText) => {
        const newData = [...data];
        newData[index].footer_text = newText.toUpperCase();
        setData(newData);
    };

    const handleAddCard = (color) => {
        const newCard = {
            main_text: "",
            footer_text: "",
            tag: { isOpen: false, Card_color: color }
        };
        setData([...data, newCard]);
    };

    const handleDeleteCard = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    };

    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex">
            <div className="w-11/12 p-4 flex gap-6 flex-wrap ">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        data={item}
                        index={index}
                        isOpen={index === openIndex}
                        toggleTag={toggleTag}
                        onMainTextChange={handleMainTextChange}
                        onFooterTextChange={handleFooterTextChange}
                        onDeleteCard={handleDeleteCard}
                        reference={ref} // Pass reference to Card component
                    />
                ))}
            </div>
            <Saaadbar onAddCard={handleAddCard} />
        </div>
    );
};

export default Foreground;
