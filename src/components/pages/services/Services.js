import { BsCashStack } from "react-icons/bs";
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
    FaCashRegister,
    FaBell,
    FaLaptopCode,
    FaSatelliteDish,
    FaBalanceScale,
    FaWrench,
    FaDolly,
    FaShippingFast,
} from "react-icons/fa";

export default function Services() {
    const services = [
        {
            title: "Integrated Facility Management",
            description:
                "Housekeeping, pest control and maintenance in one seamless solution to cut costs and boost efficiency.",
            icon: <FaBuilding />,
        },
        {
            title: "Manpower Outsourcing Services",
            description:
                "Get trained office staff and technicians through our flexible outsourcing program.",
            icon: <FaUsers />,
        },
        {
            title: "Payroll Management Services",
            description:
                "Streamlined payroll processing to minimize errors and ensure timely employee payments.",
            icon: <FaMoneyCheckAlt />,
        },
        {
            title: "Logistics & Transportation Services",
            description:
                "Reliable warehousing, transport coordination, and delivery services customized for businesses.",
            icon: <FaTruck />,
        },
        {
            title: "Housekeeping Services",
            description:
                "Maintain hygiene and cleanliness in work and residential spaces with personalized care.",
            icon: <FaBroom />,
        },
        {
            title: "Pest Control Services",
            description:
                "Eco-friendly, certified pest removal solutions that protect people and property.",
            icon: <FaBug />,
        },
        {
            title: "Fire Safety & Evacuation Services",
            description:
                "Installations, checks, and emergency plans for fire safety and compliance.",
            icon: <FaFireExtinguisher />,
        },
        {
            title: "CCTV & Central Monitoring Systems",
            description:
                "Surveillance setups with real-time alerts, remote access, and recording.",
            icon: <FaVideo />,
        },
        {
            title: "Manpower Supply Services",
            description:
                "Trained, adaptive staff for long and short-term staffing across industries.",
            icon: <FaPeopleCarry />,
        },
        {
            title: "B2B Logistics Services",
            description:
                "Handle raw materials and finished goods efficiently with supply chain visibility.",
            icon: <FaBoxes />,
        },
        {
            title: "Property Management Services",
            description:
                "End-to-end property services: maintenance, inspections, rent collection, and vendor management.",
            icon: <FaWarehouse />,
        },
        {
            title: "Waste Management Services",
            description:
                "Eco-conscious waste pickup and sorting for residential, commercial, and industrial clients.",
            icon: <FaRecycle />,
        },
        {
            title: "Facade Cleaning Services",
            description:
                "Deep cleaning of building exteriors to improve longevity and visual appeal.",
            icon: <FaCity />,
        },
        {
            title: "Plumbing & Electrical Maintenance",
            description:
                "Prevent leaks and malfunctions with reliable on-demand system maintenance.",
            icon: <FaToolbox />,
        },
        {
            title: "Optical Fibre & Telecom Tower Services",
            description:
                "Setup and maintenance of fiber cables and telecom towers with safety focus.",
            icon: <FaNetworkWired />,
        },
        {
            title: "ATM Cash Management & Cash Van Services",
            description:
                "Secure cash movement and ATM refilling using armored vans and RBI-compliant protocols.",
            icon: <BsCashStack />,
        },
        {
            title: "Alarm Management Services",
            description:
                "Modern alarm installations with 24/7 monitoring and remote alerting.",
            icon: <FaBell />,
        },
        {
            title: "HR & Digital Management Solutions",
            description:
                "HR consulting and digital tools to manage recruitment, payroll, compliance, and analytics.",
            icon: <FaLaptopCode />,
        },
        {
            title: "IoT Solutions",
            description:
                "Monitor energy, equipment, and workflows in real-time with actionable insights.",
            icon: <FaSatelliteDish />,
        },
        {
            title: "Electro-Mechanical Services",
            description:
                "Custom maintenance for HVAC and mechanical tools to reduce operational downtime.",
            icon: <FaWrench />,
        },
        {
            title: "Treasury Management Services",
            description:
                "Manage cash flow, assets, and reports while staying compliant and financially agile.",
            icon: <FaBalanceScale />,
        },
        {
            title: "Repair Maintenance Utilities",
            description:
                "Timely repairs for essential systems — from plumbing to HVAC — to avoid downtime.",
            icon: <FaToolbox />,
        },
        {
            title: "Forklift Rental Service",
            description:
                "Certified forklifts and operators for safe transport of heavy materials.",
            icon: <FaDolly />,
        },
        {
            title: "Delivery Boy Services",
            description:
                "Punctual and careful last-mile delivery team for all your logistic needs.",
            icon: <FaShippingFast />,
        },
    ];

    return (
        <section className="py-16 px-6 bg-[#dedede]">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
                Our Services
            </h2>
            <p className="text-center max-w-[78rem] mx-auto text-gray-700 mb-12 leading-relaxed">
                Feel free to rely on HRP Management whenever you need a full spectrum of reliable and customizable services.
                You will be happy to know that we offer all-inclusive assistance in different sectors to take the burden off your shoulders with ease.
                Whether you are seeking facility management solutions, skilled security staff, manpower outsourcing, logistics support, or additional services, we are there for you.
                Our technicians and approaches will help you maintain the sanctity of your corporate office, retail space, financial institution, and residential complex.
                <br /><br />
                <strong className="text-blue-900"> Here&apos;s everything we can do for you:</strong>
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[78rem] mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-blue-900 text-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105 duration-300"
                    >
                        <div className="text-orange-500 text-3xl mb-4">{service.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-200">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
  