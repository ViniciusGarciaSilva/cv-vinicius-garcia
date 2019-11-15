export interface Enterprise {
  name: string;
  icon: any;
  job: Job[];
}

export interface Job {
  title: string;
  description: string;
}