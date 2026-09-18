import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import type { Project } from "@/content/types";
import { asset } from "@/lib/paths";

type ProjectMosaicProps = {
  projects: Project[];
};

/** full · half half · half half · full · half half, repeating. */
const PATTERN: Array<"full" | "half"> = ["full", "half", "half", "half", "half", "full", "half", "half"];

/**
 * Arilla-style mosaic of framed 16:9 tiles on the 12-column module, 30 px apart.
 * Meta row under each tile shares the tile's columns: index · client · year · →.
 */
export function ProjectMosaic({ projects }: ProjectMosaicProps) {
  const rows: Array<Array<{ project: Project; index: number; size: "full" | "half" }>> = [];
  projects.forEach((project, i) => {
    const size = PATTERN[i % PATTERN.length];
    const last = rows[rows.length - 1];
    if (size === "half" && last && last.length === 1 && last[0].size === "half") {
      last.push({ project, index: i + 1, size });
    } else {
      rows.push([{ project, index: i + 1, size }]);
    }
  });

  return (
    <div className="px-gutter">
      {rows.map((row, r) => (
        <div key={r} className="mt-gutter grid grid-cols-12 gap-x-gutter gap-y-step">
          {row.map(({ project, index, size }) => (
            <FadeUp key={project.slug} className={size === "full" ? "col-span-12" : "col-span-12 md:col-span-6"}>
              <ProjectTile project={project} index={index} size={size} />
            </FadeUp>
          ))}
        </div>
      ))}
    </div>
  );
}

function ProjectTile({ project, index, size }: { project: Project; index: number; size: "full" | "half" }) {
  const cols = size === "full" ? "grid-cols-12" : "grid-cols-6";
  const clientSpan = size === "full" ? "col-span-4" : "col-span-2";
  const arrowCol = size === "full" ? "col-start-12" : "col-start-6";
  const external = project.url?.startsWith("http");

  const body = (
    <>
      <figure className="tile aspect-video">
        {project.image ? (
          <Image
            src={asset(project.image.src)}
            alt={project.image.alt}
            fill
            sizes={size === "full" ? "100vw" : "(min-width: 810px) 50vw, 100vw"}
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-end p-5 text-ui text-ink-2">(Bild folgt)</div>
        )}
      </figure>
      <div className={`mt-3.5 grid ${cols} gap-x-gutter text-ui font-medium leading-tight`}>
        <span className="solid col-span-1 text-orange">{index}</span>
        <span className={clientSpan}>{project.client}</span>
        <span className="tnum col-span-2 whitespace-nowrap font-retina text-ink-2">{project.year}</span>
        <span className={`case col-span-1 text-right text-orange-text ${arrowCol}`} aria-hidden>
          →
        </span>
      </div>
      <h3
        className={`u mt-2.5 font-light [--u-color:var(--orange)] group-hover:[text-decoration-color:var(--orange)] ${
          size === "full" ? "text-lead max-w-[40ch]" : "text-body"
        }`}
      >
        {project.title}
        {size === "full" ? <span className="text-ink-2"> — {project.role}</span> : null}
      </h3>
      <p className="mt-2 text-ui font-retina leading-tight text-ink-2">
        {project.tags.join(" / ")}
      </p>
    </>
  );

  if (!project.url) return <article className="group">{body}</article>;

  return (
    <article className="group">
      {external ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
          {body}
        </a>
      ) : (
        <Link href={project.url} className="block">
          {body}
        </Link>
      )}
    </article>
  );
}
