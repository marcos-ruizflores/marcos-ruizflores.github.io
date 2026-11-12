import {
  siOpenjdk,
  siSpringboot,
  siApachekafka,
  siPostgresql,
  siDocker,
  siKubernetes,
  siRedis,
  siMongodb,
  siJenkins,
  siGithubactions,
  siReact,
  siTypescript,
  siPython,
  siGit,
  type SimpleIcon,
} from 'simple-icons';

export const links = {
  email: 'marcos20028e@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marcos-ruiz-flores-vicente-12b8311b0',
  github: 'https://github.com/marcos-ruizflores',
  cv: '/cv/Marcos_Ruiz-Flores_CV.pdf',
};

// Logos shown in the scrolling strip under the hero
export const stack: { name: string; icon: SimpleIcon }[] = [
  { name: 'Java 21', icon: siOpenjdk },
  { name: 'Spring Boot', icon: siSpringboot },
  { name: 'Apache Kafka', icon: siApachekafka },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'Docker', icon: siDocker },
  { name: 'Kubernetes', icon: siKubernetes },
  { name: 'Redis', icon: siRedis },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'Jenkins', icon: siJenkins },
  { name: 'GitHub Actions', icon: siGithubactions },
  { name: 'React', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Python', icon: siPython },
  { name: 'Git', icon: siGit },
];
