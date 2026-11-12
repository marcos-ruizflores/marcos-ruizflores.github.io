import {
  siOpenjdk,
  siSpringboot,
  siSpringsecurity,
  siSpring,
  siHibernate,
  siPostgresql,
  siMysql,
  siMongodb,
  siRedis,
  siFlyway,
  siApachekafka,
  siDocker,
  siKubernetes,
  siJenkins,
  siGithubactions,
  siGit,
  siLinux,
  siJunit5,
  siReact,
  siTypescript,
  siVuedotjs,
  siTailwindcss,
  siHtml5,
  siCss,
  siPython,
  siC,
  siClaude,
  siQiskit,
  siFastapi,
  siVite,
  siGnubash,
  type SimpleIcon,
} from 'simple-icons';

// Tech name (as written in content.ts) -> brand icon. Anything missing just renders as text.
const byName: Record<string, SimpleIcon> = {
  Java: siOpenjdk,
  'Java 17/21': siOpenjdk,
  'Java 21': siOpenjdk,
  'Spring Boot': siSpringboot,
  'Spring Security': siSpringsecurity,
  'Spring Data JPA': siSpring,
  Hibernate: siHibernate,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Redis: siRedis,
  Flyway: siFlyway,
  Kafka: siApachekafka,
  'Apache Kafka': siApachekafka,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Jenkins: siJenkins,
  'GitHub Actions': siGithubactions,
  Git: siGit,
  Linux: siLinux,
  Bash: siGnubash,
  JUnit: siJunit5,
  React: siReact,
  TypeScript: siTypescript,
  'Vue.js': siVuedotjs,
  Tailwind: siTailwindcss,
  HTML: siHtml5,
  CSS: siCss,
  Python: siPython,
  C: siC,
  'Claude Code': siClaude,
  Qiskit: siQiskit,
  FastAPI: siFastapi,
  Vite: siVite,
};

export interface TechIcon {
  path: string;
  // null means the brand colour is too dark to read on the dark theme, so use the text colour
  color: string | null;
}

const isTooDark = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.3;
};

export function iconFor(name: string): TechIcon | null {
  const icon = byName[name];
  if (!icon) return null;
  return { path: icon.path, color: isTooDark(icon.hex) ? null : `#${icon.hex}` };
}
