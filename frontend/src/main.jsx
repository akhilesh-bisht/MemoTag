import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const webDevTopics = [
  {
    category: "Foundations",
    topics: {
      easy: [
        "HTML",
        "CSS",
        "Bash basics (cd, ls, pwd, mkdir, touch, vi)",
        "Git/Github",
        "JS Intro, Single threaded nature of JS",
        "Common JS APIs (map, filter, reduce, Object.keys)",
      ],
      medium: [
        "Bash medium (grep, piping, reverse search)",
        "Async JS, callback queue, event loop",
      ],
      hard: ["Creating promises, Common Promise API methods"],
    },
  },
  {
    category: "Simple frontend, DOM",
    topics: {
      easy: [
        "Intro to DOM, DOM Tree Structure",
        "Common DOM APIs",
        "Event handlers, onClick, stopPropagation",
        "localStorage",
      ],
      medium: ["DOM Manipulation, Dynamic frontends"],
      hard: ["Creating a simple reconciler, Foundation for React"],
    },
  },
  {
    category: "JS Runtimes (Node.js/Bun/Cloudflare)",
    topics: {
      easy: [
        "What is a JS runtime",
        "Node.js installation, common APIs",
        "file system api, fetch",
        "External packages, axios vs fetch",
      ],
      medium: ["v8, cf runtime"],
      hard: ["stream, worker threads, cluster module"],
    },
  },
  {
    category: "HTTP Servers",
    topics: {
      easy: ["What are HTTP Servers", "Methods, routes, URLs, IPs and domains"],
      medium: [
        "headers, body, query parameters",
        "Intro to express, creating routes",
        "Middlewares in express",
        "File system like DBs",
        "Authentication using JWTs",
        "Secret management using Doppler",
      ],
      hard: [],
    },
  },
  {
    category: "NoSQL Databases",
    topics: {
      easy: [
        "Intro to Databases",
        "MongoDB Intro, getting your first DB",
        "mongoose, Schemas, Simple CRUD",
      ],
      medium: [
        "SQL vs NoSQL",
        "Relationships intro",
        "Relationships in Mongo",
        "Aggregations in Mongo",
      ],
      hard: [],
    },
  },
  {
    category: "SQL Databases",
    topics: {
      easy: [
        "Recap SQL vs NoSQL",
        "Postgres intro, getting your free instance",
      ],
      medium: [
        "Creating schemas, CREATE TABLE",
        "SQL queries (CRUD)",
        "Indexes",
        "Sub queries, batch queries",
      ],
      hard: ["Transactions and Concurrency Control", "Normalization"],
    },
  },
  {
    category: "ORMs",
    topics: {
      easy: ["Intro to ORMs"],
      medium: [
        "Prisma basics, setup, schema generation and CRUD queries",
        "Drizzle basics, setup, schema",
      ],
      hard: [
        "Transactions and relationships in Prisma",
        "Txns and relationships in Drizzle",
      ],
    },
  },
  {
    category: "React",
    topics: {
      easy: [
        "Revise DOM, foundation of React",
        "Components in React",
        "Routing in React",
      ],
      medium: [
        "useState, useEffect",
        "useRef, useMemo, useCallback",
        "Custom hooks",
        "Context API",
        "Intro to state management",
        "intro to Recoil, atoms and selectors",
      ],
      hard: ["atomFamily, selectorFamily", "Connecting FE to BE"],
    },
  },
  {
    category: "Styling React apps",
    topics: {
      easy: ["Material UI"],
      medium: ["Tailwind", "Shadcn"],
      hard: [],
    },
  },
  {
    category: "Typescript",
    topics: {
      easy: ["TS vs JS, why TS?"],
      medium: ["types in ts", "interfaces in ts"],
      hard: ["Advanced TS APIs (Partial, Exclude, etc.)"],
    },
  },
  {
    category: "NextJS",
    topics: {
      easy: [],
      medium: [
        "Why NextJS, SSR vs CSR",
        "File based routing",
        "Middlewares",
        "SSG, ISR",
        "Tailwind, Shadcn integration",
        "API routes",
        "Data fetching",
        "NextAuth, Cookie based auth",
        "Internationalization",
      ],
      hard: [],
    },
  },
  {
    category: "Monorepos, Turborepo, Lints",
    topics: {
      easy: ["What is linting", "What is a monorepo", "What is turborepo"],
      medium: [
        "Prettier, ESLint",
        "Basic yarn workspaces monorepo",
        "Turborepo",
      ],
      hard: ["pre-commit hooks/husky", "Lints in CI"],
    },
  },
  {
    category: "Websockets / RTC",
    topics: {
      easy: ["one way vs two way communication", "what are websockets vs HTTP"],
      medium: [
        "Creating a websocket server",
        "Client-side logic to connect to ws server",
        "UDP vs TCP communication, WebRTC",
      ],
      hard: ["SFUs and Mediasoup"],
    },
  },
  {
    category: "Testing",
    topics: {
      easy: ["Why testing?"],
      medium: ["Unit tests", "End to end tests"],
      hard: ["Integration tests"],
    },
  },
  {
    category: "Advanced Backend",
    topics: {
      easy: [],
      medium: [
        "Advanced BE communication",
        "Queues (Redis)",
        "Pub/Sub (Redis/Kafka/RabbitMQ)",
        "Scaling WS & HTTP servers",
        "Node.js vs Go vs Rust performance",
      ],
      hard: [],
    },
  },
  {
    category: "More Topics",
    topics: {
      easy: [],
      medium: [
        "ZOD",
        "OpenAPI Spec",
        "Rate Limiting",
        "Captcha",
        "DDOS Protection",
        "Sharding, Replication, Resiliency",
        "GRPC",
        "Load Balancers",
        "CAP Theorem",
        "Serverless BE",
        "Autogenerated clients",
      ],
      hard: [],
    },
  },
  {
    category: "Linux / Bash Scripting",
    topics: {
      easy: [
        "Basic bash commands",
        "Aliases, .bashrc/.zshrc",
        "Creating your own bash script",
      ],
      medium: [
        "interactive vs non-interactive shells",
        "Cron jobs",
        "File transfer - ftp, scp",
        "File permissions",
        "args in bash scripts",
        "grep",
      ],
      hard: [
        "stderr, stdout, File descriptors, piping",
        "Creating a CLI in Node.js",
      ],
    },
  },
  {
    category: "VMs / EC2 / GCP",
    topics: {
      easy: ["What are VMs?"],
      medium: [
        "Creating a VM in various cloud providers",
        "GUI vs CLIs",
        "Deploying a non-containerized app to VM",
        "Process management",
        "Reverse proxies",
      ],
      hard: ["Certificate management", "Load balancers"],
    },
  },
  {
    category: "ASGs / MIG",
    topics: {
      easy: ["What is autoscaling?"],
      medium: ["Images, Target Groups, ASGs, LBs", "Autoscaling policies"],
      hard: ["MIG Internals"],
    },
  },
  {
    category: "Containerization",
    topics: {
      easy: ["What is a container"],
      medium: [
        "What is Docker",
        "How to dockerize your app",
        "Publishing to DockerHub",
        "docker-compose",
      ],
      hard: [
        "Docker vs other container runtimes",
        "Volumes and networks",
        "Multi-stage builds",
      ],
    },
  },
  {
    category: "ECS",
    topics: {
      easy: ["What is ECS?"],
      medium: [
        "ECR vs Dockerhub",
        "Setting up Task Definitions",
        "Serverless vs EC2 deployments",
        "Autoscaling policies",
      ],
      hard: [],
    },
  },
  {
    category: "Kubernetes",
    topics: {
      easy: [
        "Intro to Kubernetes",
        "Local deployment using kind/minikube",
        "Replicasets, Deployments",
      ],
      medium: [
        "K8s networking concepts",
        "Ingress, ingress controllers",
        "Certificate management",
        "Configmaps & Secrets",
        "K8s Policies, RBAC, CRDs",
      ],
      hard: [
        "Kubernetes Architecture",
        "Storage: PVs, PVCs, StorageClasses",
        "StatefulSets, DaemonSets, Jobs",
      ],
    },
  },
];
