export interface Enterprise {
  name: string;
  icon: any;
  start: string;
  end: string;
  job: Job[];
}

export interface Job {
  title: string;
  description: string;
}