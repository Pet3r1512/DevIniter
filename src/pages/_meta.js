import NewBadge from "../components/Layouts/Badges/NewBadge";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  docs: "Documentation",
  features: {
    title: (
      <div className="flex items-center w-full justify-between relative">
        <p>Features Overview</p>
        <NewBadge />
      </div>
    ),
  },
  release: "Release Notes",
  "free-for-devs": "Free For Devs",
};
