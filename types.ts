
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'AI' | 'Design' | '3D' | 'Development';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
