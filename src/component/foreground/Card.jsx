import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineStickyNote2, MdDelete } from "react-icons/md";
import '../style/Card.scss';

const Card = ({ data, index, toggleTag, onMainTextChange, onFooterTextChange, onDeleteCard, reference }) => {
    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-2 py-4 overflow-hidden note"
            onClick={() => toggleTag(index)}
        >
            <MdOutlineStickyNote2 className='ico' />
            <div className="absolute w-full h-4/5 ">
                <textarea
                    className='text-sm leading-tight mt-0.5 font-semibold Note_text w-11/12 h-5/6 '
                    placeholder="Enter your note here..."
                    value={data.main_text}
                    onChange={(e) => onMainTextChange(index, e.target.value)}
                />
            </div>
            <div className={`tag footer absolute bottom-0 w-full left-0 ${data.tag.Card_color}`}>
                <textarea
                    placeholder="TITLE..."
                    className="Footer_text uppercase font-bold placeholder-gray-500 placeholder-opacity-100 placeholder:uppercase placeholder:font-bold"
                    value={data.footer_text}
                    onChange={(e) => onFooterTextChange(index, e.target.value.toUpperCase())}
                />
                <MdDelete
                    className='icodel'
                    onClick={(e) => {
                        onDeleteCard(index);
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Card;
