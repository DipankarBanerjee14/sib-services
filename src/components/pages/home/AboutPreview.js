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
                            S&amp;IB Services Private Limited is a reputed service provider in the field of Total Security Solution,
                            Integrated Facility Management, Outsourced Banking Services, Optical Fibre Cable Laying (Aerial),
                            Mobile Tower Erection &amp; Maintenance, Transportation &amp; Logistics, Housekeeping, CCTV,
                            E-Surveillance, IT / IOTs, Payroll Management etc.
                            Established in 1985, and has now the strength of approximately 35,000 personnel, covering about
                            6500 locations pan India.
                        </p>
                        <p className="text-gray-800 mb-6 leading-relaxed">
                            Founded by Mr. Shyamal Karmakar, the Managing Director of the Company, S&amp;IB is an established
                            brand-name today. The Management consists of professionals and experts from various fields such as
                            ex-servicemen from Defense, Police, Intelligence, Para-military, Fire services, Disaster Management
                            Services, Banking Personnel for cash remittance and ATM operations, Engineering fields, Management
                            &amp; Administrative personnel. Induction of Management Trainees from Premier Institutes is a
                            continuous process for reinforcing the management team.
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
