import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import ProjectDetailContainer from "@/container/projectDetailPage";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProjectDetailContainer project={project} />
    </main>
  );
}
