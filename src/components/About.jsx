import React from "react";

const AboutUs = () => {
    return (
        <section id="about" className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-8">
                    About Us
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 px-4">
                        <img
                            src="https://sandhyahariharan.co.uk/wp-content/uploads/2011/05/homemade-pineapple-juice-7-of-7.jpg"
                            alt="About Us"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
                        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            bibendum, sapien nec convallis feugiat, odio sapien molestie
                            sapien, ac luctus purus dolor id lectus. Ut quis erat venenatis,
                            iaculis turpis in, volutpat mi. Cras at ultricies nunc. Morbi
                            tincidunt, tellus eu scelerisque blandit, urna ex aliquam nisl,
                            at ultrices justo nisi a metus. Vivamus vitae risus et ex
                            pharetra finibus. Curabitur venenatis ex eu interdum. Donec
                            bibendum sagittis consequat. Nullam a lacinia lacus. Nulla
                            facilisi. Proin ac aliquet ex, et rhoncus eros. Suspendisse non
                            risus aliquet, varius turpis non, tempus sem. Sed et varius
                            mauris, vel volutpat risus. Cras vehicula, purus vel feugiat
                            interdum, orci lacus congue nisl, at blandit tellus nulla vel
                            risus. Curabitur feugiat vestibulum metus in dapibus. Sed
                            malesuada id leo quis consequat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
