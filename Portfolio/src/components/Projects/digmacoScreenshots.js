const basePath = `${process.env.PUBLIC_URL}/projects/digmaco`;

const screenshots = [
  ["01-dashboard.png", "Vue d'ensemble du dashboard", "Dashboard overview"],
  ["02-user-activity.png", "Activité des utilisateurs", "User activity"],
  ["03-retention.png", "Analyse de la rétention", "Retention analysis"],
  ["04-churn-prediction.png", "Prédiction du churn par IA", "AI churn prediction"],
  ["05-segmentation.png", "Segmentation des utilisateurs", "User segmentation"],
  ["06-report-generator.png", "Génération de rapports IA", "AI report generation"],
  ["07-engagement.png", "Engagement des utilisateurs", "User engagement"],
  ["08-revenue.png", "Abonnements et revenus", "Subscriptions and revenue"],
  ["09-activity-charts.png", "Graphiques d'activité", "Activity charts"],
  ["10-segmentation-charts.png", "Graphiques de segmentation", "Segmentation charts"],
].map(([file, fr, en]) => ({ src: `${basePath}/${file}`, caption: { fr, en } }));

export default screenshots;
