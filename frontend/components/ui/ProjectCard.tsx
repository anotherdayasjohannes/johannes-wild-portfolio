import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { asset } from "@/lib/paths";

type ProjectCardProps = {
  project: Project;
};

/**
 * 4:5 project card: client/title row on top, year and tags below, "View ↓".
 * Image sits at 3% zoom and zooms further on hover.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.url?.startsWith("http");
  const isPlaceholder = !project.url;

  const media = project.image ? (
    <Image
      src={asset(project.image.src)}
      alt={project.image.alt}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      className="scale-[1.03] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none"
    />
  ) : (
    <div className="flex h-full w-full items-end bg-surface p-5" aria-hidden>
      <span className="text-label uppercase text-muted">(Bild folgt)</span>
    </div>
  );

  const body = (
    <>
      <div className="flex justify-between gap-4 pb-3 text-meta">
        <span className="font-medium">{project.client}</span>
        <span className="text-muted">{project.role}</span>
      </div>
      <div className="relative aspect-portrait overflow-hidden">{media}</div>
      <h3 className="mt-4 text-lead">{project.title}</h3>
      <p className="mt-2 max-w-md text-caption text-fg/80">{project.summary}</p>
      <div className="mt-4 flex items-end justify-between gap-4 border-t border-line pt-3 text-meta">
        <span className="flex flex-wrap gap-x-3 gap-y-1">
          <span className="opacity-60">{project.year}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="uppercase text-label">
              {tag}
            </span>
          ))}
        </span>
        {isPlaceholder ? null : (
          <span className="shrink-0 font-medium">
            View <span aria-hidden>↓</span>
          </span>
        )}
      </div>
    </>
  );

  if (isPlaceholder) {
    return <article className="group opacity-70">{body}</article>;
  }

  if (isExternal) {
    return (
      <article className="group">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
          {body}
        </a>
      </article>
    );
  }

  return (
    <article className="group">
      <Link href={project.url ?? "/"} className="block">
        {body}
      </Link>
    </article>
  );
}
