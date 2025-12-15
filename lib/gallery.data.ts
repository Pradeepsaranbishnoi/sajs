export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    category: string;
}

export const galleryData: GalleryImage[] = [
    { id: '1', src: '/images/indian_education.png', alt: 'Education Class', category: 'Education' },
    { id: '2', src: '/images/indian_healthcare.png', alt: 'Medical Camp', category: 'Health' },
    { id: '3', src: '/images/indian_community.png', alt: 'Community Meeting', category: 'Community' },
    { id: '4', src: '/images/indian_environment.png', alt: 'Tree Plantation', category: 'Environment' },
    // Reusing keeping placeholders or assuming user wants to see populated grid even if duplicates for now
    { id: '5', src: '/images/indian_education.png', alt: 'Digital Literacy', category: 'Education' },
    { id: '6', src: '/images/indian_healthcare.png', alt: 'Mobile Clinic', category: 'Health' },
];
