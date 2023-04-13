import React from "react";
import bgImage from "./fruits-bg.jpg"; // Import background image

const JuicePage = () => {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <header className="py-8">
                    <h1 className="text-5xl text-white text-center font-bold">
                        Fresh Juices
                    </h1>
                    <p className="text-white text-center mt-4">
                        Delicious and healthy juices made from fresh fruits!
                    </p>
                </header>

                {/* Main Content */}
                <main className="flex-1">
                    <section className="flex justify-center items-center h-screen">
                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl text-white font-bold mb-8">
                                Freshness at its best
                            </h2>
                            <p className="text-white text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                in ex nec augue semper blandit eu vel eros. Cras fermentum,
                                augue sit amet facilisis eleifend, lacus elit dignissim arcu,
                                eget aliquet tortor sem non nisl. Ut non venenatis dolor.
                            </p>
                        </div>
                    </section>

                    <section className="bg-white py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl text-gray-800 font-bold mb-8 text-center">
                                Our Juices
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {/* Juice Cards */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src="https://via.placeholder.com/300"
                                        alt="Juice 1"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-2xl text-gray-800 font-bold mb-4">
                                            Juice 1
                                        </h3>
                                        <p className="text-gray-600">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Etiam in ex nec augue semper blandit eu vel eros. Cras
                                            fermentum, augue sit amet facilisis eleifend.
                                        </p>
                                    </div>
                                </div>
                                {/* Repeat for other juice cards */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {/* Juice 2 */}
                                </div>
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {/* Juice 3 */}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-6">
                    <div className="container mx-auto px-4">
                        <p className="text-center text-sm">
                            &copy; 2023 Fresh Juices. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>

            {/* Fruits, Leaves, and Vines */}
            <div className="absolute bottom-0 left-0 right-0">
                <img
                    src="https://via.placeholder.com/200"
                    alt="Fruits"
                    className="absolute bottom-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-60"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt="Leaves"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt="Vines"
                    className="absolute bottom-0 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-60"
                />
            </div>
        </div>
    );
};

export default JuicePage;
