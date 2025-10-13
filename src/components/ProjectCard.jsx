export default function ProjectCard({ title, description, videoUrl, repo, thumbnail }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
      <img src={thumbnail} alt={title} className="rounded-xl mb-3" />
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="aspect-video mb-3">
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full rounded-md"
          allowFullScreen
        />
      </div>
      <a href={repo} className="text-blue-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
        Voir le code →
      </a>
    </div>
  );
}
