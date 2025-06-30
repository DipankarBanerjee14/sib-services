import {
    FaBuilding,
    FaUsers,
    FaMoneyCheckAlt,
    FaTruck,
    FaBroom,
    FaBug,
    FaFireExtinguisher,
    FaVideo,
    FaPeopleCarry,
    FaBoxes,
    FaWarehouse,
    FaRecycle,
    FaCity,
    FaToolbox,
    FaNetworkWired,
} from 'react-icons/fa';
import Link from 'next/link';

const services = [
    {
        title: "Integrated Facility Management",
        description:
            "Housekeeping, pest control, maintenance, and security in one seamless solution to cut costs and boost efficiency.",
        icon: <FaBuilding size={32} />,
    },
    {
        title: "Manpower Outsourcing Services",
        description:
            "Get trained office staff and technicians through our flexible outsourcing program.",
        icon: <FaUsers size={32} />,
    },
    {
        title: "Payroll Management Services",
        description:
            "Streamlined payroll processing to minimize errors and ensure timely employee payments.",
        icon: <FaMoneyCheckAlt size={32} />,
    },
    {
        title: "Logistics & Transportation Services",
        description:
            "Reliable warehousing, transport coordination, and delivery services customized for businesses.",
        icon: <FaTruck size={32} />,
    },
    {
        title: "Housekeeping Services",
        description:
            "Maintain hygiene and cleanliness in work and residential spaces with personalized care.",
        icon: <FaBroom size={32} />,
    },
    {
        title: "Pest Control Services",
        description:
            "Eco-friendly, certified pest removal solutions that protect people and property.",
        icon: <FaBug size={32} />,
    },
    {
        title: "Fire Safety & Evacuation Services",
        description:
            "Installations, checks, and emergency plans for fire safety and compliance.",
        icon: <FaFireExtinguisher size={32} />,
    },
    {
        title: "CCTV & Central Monitoring Systems",
        description:
            "Surveillance setups with real-time alerts, remote access, and recording.",
        icon: <FaVideo size={32} />,
    },
    {
        title: "Manpower Supply Services",
        description:
            "Trained, adaptive staff for long and short-term staffing across industries.",
        icon: <FaPeopleCarry size={32} />,
    },
    {
        title: "B2B Logistics Services",
        description:
            "Handle raw materials and finished goods efficiently with supply chain visibility.",
        icon: <FaBoxes size={32} />,
    },
    {
        title: "Property Management Services",
        description:
            "End-to-end property services: maintenance, inspections, rent collection, and vendor management.",
        icon: <FaWarehouse size={32} />,
    },
    {
        title: "Waste Management Services",
        description:
            "Eco-conscious waste pickup and sorting for residential, commercial, and industrial clients.",
        icon: <FaRecycle size={32} />,
    },
    {
        title: "Facade Cleaning Services",
        description:
            "Deep cleaning of building exteriors to improve longevity and visual appeal.",
        icon: <FaCity size={32} />,
    },
    {
        title: "Plumbing & Electrical Maintenance",
        description:
            "Prevent leaks and malfunctions with reliable on-demand system maintenance.",
        icon: <FaToolbox size={32} />,
    },
    {
        title: "Optical Fibre & Telecom Tower Services",
        description:
            "Setup and maintenance of fiber cables and telecom towers with safety focus.",
        icon: <FaNetworkWired size={32} />,
    },
];

export default function OurServices() {
    return (
        <section className="py-16 bg-[#dedede] text-blue-900">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
                    Our Services
                </h2>
                <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-800">
                    We provide end-to-end facility, security, banking, logistics, and utility support solutions for corporates across India. Here are a few of our key services:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-blue-900 p-6 rounded-xl text-white shadow hover:shadow-md transition duration-300 transform hover:scale-105"
                        >
                            <div className="text-yellow-400 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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
