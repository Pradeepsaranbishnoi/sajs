import { IconType } from 'react-icons';
import { FaGraduationCap, FaHeartbeat, FaPrayingHands, FaTree, FaHandsHelping, FaBook, FaChalkboardTeacher, FaLaptop, FaUserMd, FaAmbulance, FaTint, FaRecycle, FaSolarPanel } from 'react-icons/fa';



export interface ActivityFeature {
    icon: IconType;
    title: string;
    description: string;
}

export interface ActivityData {
    id: string; // slug
    title: string;
    badge: string;
    highlightedWord: string; // The word in the title to be colored
    description: string;
    fullDescription: string[];
    image: string; // Path to image
    challenge: string; // Description of the problem/challenge
    features: ActivityFeature[];
}

export const activitiesData: Record<string, ActivityData> = {
    education: {
        id: 'education',
        title: 'Education & Learning',
        badge: '🎓 Education',
        highlightedWord: 'Learning',
        description: 'Empowering the next generation through quality education, scholarships, and learning resources.',
        fullDescription: [
            "We believe that education is the most powerful weapon which you can use to change the world. Our educational initiatives are designed to bridge the gap for underprivileged children who lack access to quality schooling.",
            "From establishing learning centers in remote villages to providing scholarships for meritorious students, we are committed to ensuring that no child is left behind. We also focus on digital literacy and vocational training to prepare youth for the modern workforce."
        ],
        image: '/images/indian_education.png',
        challenge: "Despite progress, millions of children in India still drop out of school due to poverty, lack of resources, and social pressure. Quality education remains a distant dream for many in rural and slum areas.",
        features: [
            {
                icon: FaBook,
                title: 'School Support',
                description: 'Providing textbooks, uniforms, and stationary to children in need.'
            },
            {
                icon: FaChalkboardTeacher,
                title: 'Remedial Classes',
                description: 'After-school tutoring to help students catch up and excel in their studies.'
            },
            {
                icon: FaLaptop,
                title: 'Digital Literacy',
                description: 'Computer training centers to bridge the digital divide in rural areas.'
            }
        ]
    },
    health: {
        id: 'health',
        title: 'Healthcare Support',
        badge: '❤️ Healthcare',
        highlightedWord: 'Support',
        description: 'Bringing essential medical services and health awareness to remote and underserved communities.',
        fullDescription: [
            "Access to basic healthcare is a fundamental human right. Unfortunately, many communities we serve lack nearest hospitals or medical facilities. Our goal is to bring healthcare to their doorsteps.",
            "We organize regular health camps, run mobile medical clinics, and provide free medicines to the elderly and destitute. Our programs also focus on preventive healthcare through awareness campaigns about hygiene, nutrition, and disease prevention."
        ],
        image: '/images/indian_healthcare.png',
        challenge: "Rural healthcare infrastructure faces severe shortages of doctors, medicines, and continuous care. For the elderly and bedridden deep in villages, accessing even basic medical help is often impossible.",
        features: [
            {
                icon: FaUserMd,
                title: 'Medical Camps',
                description: 'General and specialized health camps for regular check-ups and treatment.'
            },
            {
                icon: FaAmbulance,
                title: 'Mobile Clinics',
                description: 'Reach-out programs to provide care in elderly and bedridden patients homes.'
            },
            {
                icon: FaTint,
                title: 'Nutrition Support',
                description: 'Providing nutritional supplements to malnourished children and pregnant women.'
            }
        ]
    },
    sanskar: {
        id: 'sanskar',
        title: 'Sanskar & Culture',
        badge: '🕉️ Sanskar',
        highlightedWord: 'Culture',
        description: 'Instilling values, ethics, and cultural pride in the younger generation.',
        fullDescription: [
            "In a rapidly changing world, remaining rooted in our values is crucial. Our 'Sanskar' initiatives aim to impart moral and ethical education to children, fostering a sense of responsibility and compassion.",
            "We conduct workshops, storytelling sessions, and cultural events that celebrate our rich heritage. These programs are designed to build character and create socially responsible citizens."
        ],
        image: '/images/indian_community.png',
        challenge: "In the race for modernization, the younger generation is increasingly disconnecting from traditional values, ethics, and cultural roots, leading to a loss of identity and social cohesion.",
        features: [
            {
                icon: FaPrayingHands,
                title: 'Value Education',
                description: 'Classes focusing on ethics, morality, and character building.'
            },
            {
                icon: FaHandsHelping,
                title: 'Community Service',
                description: 'Encouraging youth to participate in social service and community building.'
            },
            {
                icon: FaGraduationCap,
                title: 'Youth Mentorship',
                description: 'Guiding young minds to become future leaders with strong moral compass.'
            }
        ]
    },
    environment: {
        id: 'environment',
        title: 'Environment Protection',
        badge: '🌱 Environment',
        highlightedWord: 'Protection',
        description: 'Working towards a greener planet through tree plantation and awareness drives.',
        fullDescription: [
            "Climate change is the defining challenge of our time. We are committed to doing our part by promoting environmental sustainability at the grassroots level.",
            "Our activities include large-scale tree plantation drives, waste management workshops, and promoting renewable energy adoption in rural areas."
        ],
        image: '/images/indian_environment.png',
        challenge: "Rapid urbanization and deforestation are stripping our planet of its green cover. Without immediate grassroots action on waste management and planting, future generations face a bleak environment.",
        features: [
            {
                icon: FaTree,
                title: 'Plantation Drives',
                description: 'Organizing community-led tree plantation events to increase green cover.'
            },
            {
                icon: FaRecycle,
                title: 'Waste Management',
                description: 'Educating communities on segregation and recycling of waste.'
            },
            {
                icon: FaSolarPanel,
                title: 'Green Energy',
                description: 'Promoting solar lights and eco-friendly practices in villages.'
            }
        ]
    },
    other: {
        id: 'other',
        title: 'Other Initiatives',
        badge: '⭐ Other',
        highlightedWord: 'Initiatives',
        description: 'Responsive programs addressing immediate needs and disaster relief.',
        fullDescription: [
            "Disasters and emergencies strike without warning. Our 'Other Initiatives' cover immediate relief work during floods, pandemics, and other crises.",
            "This bucket also includes special projects like women empowerment workshops, skill development for widows, and winter relief drives providing blankets to the homeless."
        ],
        image: '/images/indian_community.png',
        challenge: "Disasters strike without warning, leaving the most vulnerable with nothing. From bitter winters for the homeless to sudden floods, the gap between need and aid is often devastating.",
        features: [
            {
                icon: FaHandsHelping,
                title: 'Disaster Relief',
                description: 'Immediate response and aid distribution during natural calamities.'
            },
            {
                icon: FaUserMd,
                title: 'Women Empowerment',
                description: 'Skill training and financial literacy workshops for women.'
            },
            {
                icon: FaHeartbeat,
                title: 'Winter Relief',
                description: 'Distribution of warm clothes and blankets to the homeless.'
            }
        ]
    }
};
