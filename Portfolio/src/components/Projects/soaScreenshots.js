const basePath = `${process.env.PUBLIC_URL}/projects/soaexa`;

export default [
  ["console.png", "Execution REST et trace de classification", "REST execution and classification trace"],
  ["graphql.png", "Explorateur GraphQL et resultat de requete", "GraphQL explorer and query response"],
  ["architecture.png", "Architecture native et regles metier", "Native architecture and business rules"],
].map(([file, fr, en]) => ({ src: `${basePath}/${file}`, caption: { fr, en } }));
