import ContactForm from '../contact/ContactForm';
import ContactInfo from '../contact/ContactInfo';

interface ContactSectionProps {
  /** Optional custom ID for the section hash */
  id?: string;
  /** Background color class */
  className?: string;
}

/**
 * ContactSection Component
 * 
 * Displays the full Contact section (Form + Info side-by-side).
 */
export default function ContactSection({ 
    id = "contact",
    className = "py-16 bg-white" 
}: ContactSectionProps) {
  return (
    <section id={id} className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
