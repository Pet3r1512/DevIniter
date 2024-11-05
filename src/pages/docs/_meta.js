import NewBadge from "../../components/Layouts/Badges/NewBadge";

/* eslint-disable import/no-anonymous-default-export */
export default {
  introduction: "Introduction",
  get_started: "Getting Started",
  installation: "Installation",
  template_structure: {
    title: (
      <div className="flex items-center w-full justify-between">
        <p>Template Structure</p>
        <NewBadge />
      </div>
    ),
  },
};
