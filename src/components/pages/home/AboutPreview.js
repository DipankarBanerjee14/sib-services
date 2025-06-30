import Image from 'next/image';

export default function AboutPreview() {
    return (
        <section id="about" className="bg-[#dedede] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    {/* Image Side */}
                    <div className="m-0 p-0">
                        <Image
                            src="/images/who3.webp"
                            alt="About SIB"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Text Side */}
                    <div>
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Who We Are</h2>
                        <h3 className="text-xl font-semibold text-yellow-500 mb-4">About Us</h3>
                        <p className="text-gray-800 mb-4 leading-relaxed">
                            At HRP Management, we consistently take steps to improve our performance each year, as we strive for long-term sustainability and client satisfaction. We are proud and efficient providers of Integrated Facility Management, Security Services, Manpower Outsourcing, Logistics, Payroll Support, and more. Our establishment was founded on November 8, 2013, under the trusted leadership of Mr. Shyamal Karmakar. While we operate independently, our foundation is built on the same leadership values and vision that guided the growth of S&IB.
                        </p>
                        <p className="text-gray-800 mb-6 leading-relaxed">
                            You can visit us at our registered office at Sarat Bose Road, Kolkata, India, if you wish to have a conversation with us in person. HRP Management has a strong presence throughout India, so you can have access to our solutions from anywhere in the nation. We strive to incorporate various kinds of professionals from diverse domains, including ex-servicemen from the defense sector, security experts, administrative personnel, and specialists in banking and logistics operations. This team of experienced individuals from different fields is one of our key strengths because it helps us provide reliable, flexible, and customer-friendly services, regardless of the industry you are a part of.
                        </p>
                        <a
                            href="/about"
                            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
