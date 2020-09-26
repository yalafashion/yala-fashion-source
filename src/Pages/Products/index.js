import React, { useState } from 'react';
import './style.css';
import { Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Modal from './modal';

// Product image source data
import Rugs from '../../Data/Rugs.json';
import Scarves from '../../Data/Scarves.json';
import Jewelry from '../../Data/Jewelry.json';

const PRODUCT_MAP = {
    "Scarves": Scarves,
    "Rugs": Rugs,
    "Jewelry": Jewelry,
}

const Gallery = ({ selectedCategory }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const products = PRODUCT_MAP[selectedCategory];

    return (
        <div>
            <div className="image_grid">
                {
                    products.map(p => {
                        return (
                            <motion.div className="img-wrap" key={p["index"]}
                                layout
                                whileHover={{ opacity: 1 }}
                                onClick={() => setSelectedImage(p["source"])}>
                                <motion.img src={p["source"]} alt={p["source"]}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                />
                            </motion.div>
                        )
                    })
                }
            </div>

            {
                selectedImage &&
                <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            }
        </div>
    );
}

const Products = () => {

    const [category, setCategory] = useState("Scarves");

    const categories = ["Scarves", "Rugs", "Jewelry"];

    const clickHandler = (e) => {
        const selectedCategory = e.target.innerHTML;
        if (category !== selectedCategory) {
            setCategory(selectedCategory);
        }
    }

    return (
        <Container>
            <Nav variant="pills">
                {
                    categories.map((cat, index) => {
                        return (
                            <Nav.Item key={index}>
                                {
                                    cat === category
                                        ? <div className="nav_link_selected" onClick={clickHandler}>{cat}</div>
                                        : <div className="nav_link" onClick={clickHandler}>{cat}</div>
                                }
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
            <Gallery selectedCategory={category} />

        </Container>
    );
};

export default Products;