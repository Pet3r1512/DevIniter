import NewBadge from "../../components/Layouts/Badges/NewBadge";

/* eslint-disable import/no-anonymous-default-export */
export default {
  introduction: "Introduction",
  get_started: "Getting Started",
  installation: "Installation",
  template_structure: {
    title: (
      <div className="flex items-center w-full justify-between relative">
        <p>Template Structure</p>
        <NewBadge className="md:absolute md:-top-4 md:-right-14" />
      </div>
    ),
  },
};
