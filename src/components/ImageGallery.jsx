import React from "react";
import { galleryImages } from "../utlity";

const ImageGallery = () => {
    console.log(galleryImages)
    return (
        <section id="gallery" className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-8">
                    Image Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1,2,3,4,5,6,7,8,9,10]?.map((item,index)=>
                        <img src="https://kitchenconfidante.com/wp-content/uploads/2021/08/Cantaloupe-Juice-kitchenconfidante.com-8583-FEATURED-IMAGE.jpg" alt="Gallery 1" className="object-cover " />
                    )}
                   
                    {/* Add more gallery images as needed */}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;