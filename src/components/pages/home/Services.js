import {
    FaBuilding,
    FaUsers,
    FaMoneyCheckAlt,
    FaPeopleCarry,
    FaTruck,
    FaBoxes,
    FaBroom,
    FaWarehouse,
    FaRecycle,
    FaCalendarCheck,
    FaCity,
} from 'react-icons/fa';
import Link from 'next/link';

const services = [
    {
        title: "Integrated Facility Management Services",
        description:
            "We provide experts to manage your facility operations—maintenance, cleaning, and daily tasks—helping you streamline processes, and reduce costs.",
        icon: <FaBuilding size={32} />,
    },
    {
        title: "Manpower Outsourcing",
        description:
            "We handle recruitment, training, and deployment of your workforce, letting you reduce admin overhead and improve operational efficiency.",
        icon: <FaUsers size={32} />,
    },
    {
        title: "Payroll Management",
        description:
            "We take over salary calculations, tax deductions, payslip generation, and ensure complete compliance—removing the monthly payroll hassle.",
        icon: <FaMoneyCheckAlt size={32} />,
    },
    {
        title: "Manpower Supply",
        description:
            "Get skilled, semi-skilled, and unskilled staff across industries—available for long-term or project-based requirements.",
        icon: <FaPeopleCarry size={32} />,
    },
    {
        title: "Logistics & Transportation",
        description:
            "We ensure timely, safe, and efficient delivery of goods using optimized routes and real-time fleet tracking systems.",
        icon: <FaTruck size={32} />,
    },
    {
        title: "B2B Logistics",
        description:
            "Simplify backend processes with scalable logistics: warehousing, distribution, and end-to-end supply chain visibility.",
        icon: <FaBoxes size={32} />,
    },
    {
        title: "Housekeeping Services",
        description:
            "Efficient and reliable cleaning for offices, commercial spaces, and residences—regular upkeep, deep cleaning, and sanitation.",
        icon: <FaBroom size={32} />,
    },
    {
        title: "Property Management",
        description:
            "Boost property value and returns with expert management—tenant relations, rent collection, maintenance, and marketing.",
        icon: <FaWarehouse size={32} />,
    },
    {
        title: "Waste Management",
        description:
            "We handle collection, segregation, recycling, and eco-friendly disposal—aligned with environmental regulations and green practices.",
        icon: <FaRecycle size={32} />,
    },
    {
        title: "Event Management",
        description:
            "From venue selection to on-site logistics—we manage your social or corporate events with precision and creativity.",
        icon: <FaCalendarCheck size={32} />,
    },
    {
        title: "Facade Cleaning",
        description:
            "We preserve your property’s aesthetics using advanced equipment and safe chemicals for long-term facade care.",
        icon: <FaCity size={32} />,
    },
  ];

export default function OurServices() {
    return (
        <section className="py-16 bg-[#dedede] text-blue-900">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
                    Our Services
                </h2>
                <p className="text-center text-lg mb-12 max-w-7xl mx-auto text-gray-800">
                    Our main priority at HRP Management is to provide you with all kinds of services, be it to run a business or take care of a property. Hence, you can relax knowing every step our professionals take is centered around professionalism, precision, and people-first values. From staffing to logistics, we bring efficiency to every corner of your business!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-blue-900 p-6 rounded-xl text-white shadow hover:shadow-md transition duration-300 transform hover:scale-105"
                        >
                            <div className="text-yellow-400 mb-4">{service.icon}</div>
                            <h3 className=" font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <Link href="/services">
                        <span className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                            View All Services
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
