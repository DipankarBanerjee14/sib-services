import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="py-16 px-4 bg-[#dedede]">
            <div className="max-w-[78rem] mx-auto bg-white px-4 md:px-10 py-10 md:py-14 rounded-2xl shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text mb-10">
                    About Us
                </h1>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
                    <p className="text-blue-900 font-semibold text-xl text-center">
                        Building trust, driving performance – that’s HRP Management.
                    </p>

                    <p>
                        At HRP Management, we consistently take steps to improve our performance each year, as we strive for long-term sustainability and client satisfaction. We are proud and efficient providers of Integrated Facility Management, Security Services, Manpower Outsourcing, Logistics, Payroll Support, and more. Our establishment was founded on November 8, 2013, under the trusted leadership of Mr. Shyamal Karmakar. We operate independently, guided by a clear set of leadership values and a long-term vision focused on growth and integrity.
                    </p>

                    <p>
                        You can visit us at our registered office at Sarat Bose Road, Kolkata, India, if you wish to have a conversation with us in person. HRP Management has a strong presence throughout India, so you can have access to our solutions from anywhere in the nation. We strive to incorporate various kinds of professionals from diverse domains, including ex-servicemen from the defense sector, security experts, administrative personnel, and specialists in banking and logistics operations. This team of experienced individuals from different fields is one of our key strengths because it helps us provide reliable, flexible, and customer-friendly services, regardless of the industry you are a part of.
                    </p>

                    <p>
                        We do everything in our power to create long-term relationships with our clients that are rooted in trust, performance, and proactive support. We take pride in our dedicated and skillful teams of experts who take sufficient time to understand your unique needs and offer adaptable and appropriate solutions. Alongside this, our loyalty extends to our employees, as we strive to provide them with opportunities for growth, innovation, and a sense of ownership. This aspect, in turn, boosts the quality of the services that cater to our clients.
                    </p>

                    <p>
                        At the heart of our operations, we believe in constant improvement. HRP Management makes sure every employee undergoes routine workshops, upskilling sessions, and progress evaluations so that they can keep up with ever-changing client demands and performance standards. You can depend on us if you want to hire valuable services that utilize the help of modern technology, clear processes, and personalized support for your benefit.
                    </p>

                    <p className="text-center font-semibold text-blue-800 text-xl mt-10">
                        <Link href="/contact" className="underline hover:text-blue-700">Contact us</Link> today to learn more about what we can do for you!
                    </p>
                </div>
            </div>
        </section>
    );
}
  