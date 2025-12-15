export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

export const teamData: TeamMember[] = [
    {
        id: '1',
        name: 'Dr. Anita Sharma',
        role: 'Founder & President',
        image: '/images/indian_community.png', // Placeholder, ideally specific
        bio: 'A visionary leader with over 20 years of experience in social work and education.',
        socials: {
            linkedin: '#',
            email: 'anita@sajs.org'
        }
    },
    {
        id: '2',
        name: 'Mr. Rajesh Verma',
        role: 'Director of Operations',
        image: '/images/indian_education.png', // Placeholder
        bio: 'Dedicated to streamlining our initiatives and maximizing on-ground impact.',
        socials: {
            linkedin: '#'
        }
    },
    {
        id: '3',
        name: 'Priya Singh',
        role: 'Head of Education',
        image: '/images/indian_healthcare.png', // Placeholder
        bio: 'Passionate about bringing quality education to every child in rural India.',
        socials: {
            email: 'priya@sajs.org'
        }
    },
    {
        id: '4',
        name: 'Dr. Amit Patel',
        role: 'Medical Advisor',
        image: '/images/indian_community.png', // Placeholder
        bio: 'Leading our healthcare camps and medical outreach programs.',
    },
    {
        id: '5',
        name: 'Suman Gupta',
        role: 'Community Outreach',
        image: '/images/indian_education.png', // Placeholder
        bio: 'Building strong relationships with the communities we serve.',
    },
    {
        id: '6',
        name: 'Vikram Malhotra',
        role: 'Volunteer Coordinator',
        image: '/images/indian_environment.png', // Placeholder
        bio: 'Mobilizing our army of volunteers for large-scale events.',
    }
];
