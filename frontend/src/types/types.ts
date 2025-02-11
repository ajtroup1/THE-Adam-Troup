type Project = {
  title: string;
  description: string;
  detail: string;
  image: string;
  link: string;
  technologies?: Tech[];
}

type Tech = {
  name: string;
  icon: string;
  link: string;
}

export type { Project };