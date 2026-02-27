import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("project").title("Project"),
      S.documentTypeListItem("contactMember").title("Contact Member"),
      S.documentTypeListItem("service").title("Service"),
      S.documentTypeListItem("stat").title("Company Stat"),
      S.documentTypeListItem("testimonial").title("Testimonial"),
      S.documentTypeListItem("teamMember").title("Team Member"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "project",
            "contactMember",
            "service",
            "stat",
            "testimonial",
            "teamMember",
          ].includes(item.getId()!),
      ),
    ]);
