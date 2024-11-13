export type Location = {
  _id: string;
  name: string;
  status?: 'complete' | 'incomplete';
  workScope?: string | WorkScope | null;
  createdAt?: Date;
  updatedAt?: Date;
  selectedWorkScope?: string;
};

export type Logs = {
  _id: string;
  message: string;
  location: string | Location;
  workScope: string | WorkScope;
  isComplete?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type WorkScope = {
  _id: string;
  name: string;
  duration: number;
  displayTime: string;
  variance: number;
};
