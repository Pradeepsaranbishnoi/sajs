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
        name: 'Bhagirath Bishnoi',
        role: 'President',
        image: '/images/indian_community.png', // Using the Indian themed placeholder for now
        bio: 'Leading the foundation with a vision for sustainable community development and social welfare.',
    },
    {
        id: '2',
        name: 'Ramesh Bishnoi',
        role: 'Vice President',
        image: '/images/indian_healthcare.png', // Using the Indian themed placeholder for now
        bio: 'Dedicated to overseeing operations and ensuring effective implementation of our initiatives.',
    }
];
