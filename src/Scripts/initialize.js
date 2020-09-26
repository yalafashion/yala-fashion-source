"use strict";

const fs = require("fs");
const BASE_PATH = "../../public/Images/";
const FINAL_PATH = "../Data/";

async function main() {
    let category_list = [];

    const categories = await fs.readdirSync(BASE_PATH);
    categories.forEach(category => category_list.push(`${BASE_PATH}${category}`));

    category_list.forEach(async (path) => {
        let category = path.split("/");
        category = category[category.length - 1];
        const store_path = `${FINAL_PATH}${category}.json`;
        const source_path = `/Images/${category}/`;
        const product_list = []

        const products = await fs.readdirSync(path);
        products.forEach((product, index) => {
            product_list.push({
                "index": index,
                "source": `${source_path}${product}`
            });
        });

        fs.writeFileSync(store_path, JSON.stringify(product_list));
    });
}

main();