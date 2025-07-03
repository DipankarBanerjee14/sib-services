import Image from 'next/image';

export default function AboutPreview() {
    return (
        <section id="about" className="bg-[#dedede] mb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    {/* Image Side */}
                    <div className="m-0 p-0">
                        <Image
                            src="/images/who.png"
                            alt="About SIB"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Text Side */}
                    <div>
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">About Us</h2>
                        <h3 className="text-xl font-semibold text-orange-500 mb-4">Who Are We?</h3>
                        <p className="text-gray-800 mb-4 leading-relaxed">
                            HRP Management Private Limited is a reliable service provider you can trust when hiring various facilities for your home, office, or industrial space. With our assistance, you can access Integrated Facility Management, Payroll Services, Outsourced Banking Operations, Optical Fibre Cable Laying, and many more. We have been an established part of the industry since 2013, which has allowed us to broaden our presence across India. Rest assured that we can rescue you in various sectors with our trained and responsive workforce.                        </p>
                        <p className="text-gray-800 mb-6 leading-relaxed">
                            Mr. Shyamal Karmakar, our dependable founder, still continues as the Managing Director of HRP Management. We take pride in only bringing in experienced and educated professionals from diverse backgrounds to make sure you do not have to worry about the quality of the facilities. Before hiring an expert, we thoroughly check their understanding of telecommunications, banking, engineering, logistics, disaster management, and administration. New ideas and growing talent are our biggest focus, so at HRP Management, we do everything we can to keep our team flexible, updated, and ready for the future with appropriate training!
                        </p>
                        <a
                            href="/about"
                            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-[78rem] h-px bg-gray-300 my-8 mx-auto"></div>

        </section>
    );
}
