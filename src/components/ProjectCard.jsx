export default function ProjectCard({id, title, description, media, technologies, repoUrl }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/20 transition">
      {media[0].type === "video" ? (
        <iframe
          className="w-full h-48 rounded-lg mb-3"
          src={media[0].url}
          title={title}
          allowFullScreen
        />
      ) : (
        <img src={media[0].url} alt={title} className="w-full h-48 object-cover rounded-lg mb-3" />
      )}

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {description && <p className="text-gray-400 mb-3 text-sm">{description}</p>}

      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((t, i) => (
          <span key={i} className="px-2 py-1 text-xs bg-gray-700 text-cyan-300 rounded-full">
            {t}
          </span>
        ))}
      </div>

      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
      >
        Voir le code →
      </a>
    </div>
  );
}
