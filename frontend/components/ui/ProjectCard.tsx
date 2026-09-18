import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { asset } from "@/lib/paths";

type ProjectCardProps = {
  project: Project;
};

/**
 * 4:3 project card for website screenshots: client/role row on top,
 * year, tags and "View ↓" below a hairline. Image sits at 3% zoom and
 * zooms further on hover.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.url?.startsWith("http");

  const media = project.image ? (
    <Image
      src={asset(project.image.src)}
      alt={project.image.alt}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      className="scale-[1.03] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none"
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
        <span className="text-right text-muted">{project.role}</span>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden border border-line">{media}</div>
      <h3 className="mt-4 text-lead">{project.title}</h3>
      <p className="mt-3 max-w-xl text-caption text-fg/80">{project.summary}</p>
      <div className="mt-4 flex items-end justify-between gap-4 border-t border-line pt-3 text-meta">
        <span className="flex flex-wrap gap-x-3 gap-y-1">
          <span className="opacity-60">{project.year}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="uppercase text-label">
              {tag}
            </span>
          ))}
        </span>
        {project.url ? (
          <span className="shrink-0 font-medium">
            View <span aria-hidden>↓</span>
          </span>
        ) : null}
      </div>
    </>
  );

  if (!project.url) {
    return <article className="group">{body}</article>;
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
      <Link href={project.url} className="block">
        {body}
      </Link>
    </article>
  );
}
