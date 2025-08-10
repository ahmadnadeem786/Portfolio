import React from 'react';

const testimonials = [

  {
    name: 'Emma Brown',
    role: 'UI/UX Designer',
    message: 'Loved collaborating with Ahmad. His attention to detail is outstanding.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO @BrightApps',
    message: 'Ahmad delivered our MVP with top-notch performance and pixel-perfect UI. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Sophia Turner',
    role: 'Freelance Illustrator',
    message: 'His ability to understand creative needs and implement them in code is unmatched.',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-[#fff]" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-9 flex-wrap gap-4">
          <div className="flex-col flex gap-6 items-start">
            <div className="flex flex-col items-start">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">What Clients Say</h2>
              <div className="h-1 w-[90%] bg-[#F2AA4CFF] mt-2"></div>
            </div>
            <p className="text-gray-500 text-left max-w-md">
              Real experiences from real collaborations — trust built through quality and performance.
            </p>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            <span className="text-[#F2AA4CFF]"> -- </span> 03
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-2xl  shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className='flex gap-4 items-center justify-center'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-20 rounded-xl object-cover mb-4"
                />
                <div className='text-left'>
                  <h3 className="text-lg font-semibold text-yellow-500">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{testimonial.role}</p>
                  <p className="text-white italic">“{testimonial.message}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
