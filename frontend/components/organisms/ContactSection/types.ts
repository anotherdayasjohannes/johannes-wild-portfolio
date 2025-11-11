export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface ContactSectionProps {
  title: string;
  subtitle?: string;
  contactInfo: ContactInfo;
  formLabels?: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  infoLabels?: {
    phone: string;
    email: string;
    address: string;
  };
  className?: string;
}

