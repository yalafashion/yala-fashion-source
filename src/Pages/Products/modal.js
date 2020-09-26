import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setSelectedImage(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >

            <motion.img src={selectedImage} alt="enlarged"
                initial={{ y: "-50vh" }}
                animate={{ y: "0" }}
            />
        </motion.div>
    );
}

export default Modal;