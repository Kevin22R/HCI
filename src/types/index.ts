export interface Activity {
  id: string;
  name: string;
  date?: Date;
  startTime?: string;
  endTime?: string;
  description: string;
  location: string;
  category: string;
  isPublished: boolean;
  registrationInfo?: string;
  datePending?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  available: boolean;
  sizes?: string[];
  deliveryInfo?: string;
}

export interface Kit {
  id: string;
  name: string;
  price: number;
  audience: string;
  components: KitComponent[];
}

export interface KitComponent {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

export interface Registration {
  firstName: string;
  secondName?: string;
  lastName: string;
  secondLastName?: string;
  documentType: string;
  documentNumber: string;
  city: string;
  address?: string;
  email: string;
  affiliationType: string;
  academicProgram?: string;
  studentCode?: string;
  size?: string;
}

export interface Order {
  id: string;
  registration: Registration;
  kitId?: string;
  customComponents?: KitComponent[];
  total: number;
  status: 'pending' | 'paid' | 'rejected' | 'cancelled';
  createdAt: Date;
  confirmationCode?: string;
  runnerNumber?: string;
}
