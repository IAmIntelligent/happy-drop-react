import React from "react";

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-8">
                    Testimonials
                </h2>
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/3 px-4">
                        <div className="bg-white rounded-lg p-8 mx-auto max-w-xs">
                            <img
                                src="https://static.toiimg.com/thumb/84884867.cms?imgsize=315241&width=800&height=800"
                                alt="Testimonial 1"
                                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                            <p className="text-gray-600">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam bibendum, sapien nec convallis feugiat, odio sapien
                                molestie sapien, ac luctus purus dolor id lectus. Ut quis erat
                                venenatis, iaculis turpis in, volutpat mi. Cras at ultricies
                                nunc."
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <div className="bg-white rounded-lg p-8 mx-auto max-w-xs">
                            <img
                                src="https://static.toiimg.com/thumb/84884867.cms?imgsize=315241&width=800&height=800"
                                alt="Testimonial 2"
                                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
                            <p className="text-gray-600">
                                "Nullam a lacinia lacus. Nulla facilisi. Proin ac aliquet ex,
                                et rhoncus eros. Suspendisse non risus aliquet, varius turpis
                                non, tempus sem. Sed et varius mauris, vel volutpat risus.
                                Cras vehicula, purus vel feugiat interdum, orci lacus congue
                                nisl, at blandit tellus nulla vel risus."
                            </p>
                        </div>
                    </div>
                    {/* Add more testimonials as needed */}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;