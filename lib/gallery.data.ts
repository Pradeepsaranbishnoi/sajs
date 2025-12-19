export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    category: string;
}

export const galleryData: GalleryImage[] = [
    // diverse community & event photos
    { id: '1', src: '/images/gallery/DSC00931.jpg', alt: 'Community Event Gathering', category: 'Community' },
    { id: '2', src: '/images/gallery/DSC01427.jpg', alt: 'Social Welfare Activity', category: 'Health' },
    { id: '3', src: '/images/gallery/DSC01966.jpg', alt: 'Group Photo', category: 'Community' },
    { id: '4', src: '/images/gallery/DSC02565.JPG', alt: 'Field Work', category: 'Environment' },
    { id: '5', src: '/images/gallery/DSC02567.jpg', alt: 'Volunteers in Action', category: 'Community' },
    { id: '6', src: '/images/gallery/DSC02577.jpg', alt: 'Team Collaboration', category: 'Community' },
    { id: '7', src: '/images/gallery/K_B08667.jpg', alt: 'Ceremony & Celebration', category: 'Events' },
    { id: '8', src: '/images/gallery/K_B08724.jpg', alt: 'Award Distribution', category: 'Events' },
    { id: '9', src: '/images/gallery/K_B08886.jpg', alt: 'Community Support', category: 'Events' },

    // Blog/Activity related images
    { id: '10', src: '/images/gallery/blog_1.png', alt: 'Educational Initiative', category: 'Education' },
    { id: '11', src: '/images/gallery/blog_2.png', alt: 'Healthcare Camp', category: 'Health' },
    { id: '12', src: '/images/gallery/blog_3.png', alt: 'Environmental Drive', category: 'Environment' },
    { id: '13', src: '/images/gallery/blog_4.png', alt: 'Skill Development', category: 'Education' },
    { id: '14', src: '/images/gallery/blog_5.png', alt: 'Women Empowerment', category: 'Community' },
    { id: '15', src: '/images/gallery/blog_6.png', alt: 'Youth Engagement', category: 'Education' },
    { id: '16', src: '/images/gallery/blog_7.png', alt: 'Rural Development', category: 'Community' },
    { id: '17', src: '/images/gallery/blog_8.png', alt: 'Sanitation Awareness', category: 'Health' },
    { id: '18', src: '/images/gallery/blog_9.png', alt: 'Cultural Activity', category: 'Events' },
];
