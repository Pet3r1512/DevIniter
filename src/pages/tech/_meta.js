import NewBadge from "../../components/Layouts/Badges/NewBadge";

/* eslint-disable import/no-anonymous-default-export */
export default {
  prisma: {
    title: (
      <div className="flex items-center gap-x-2.5">
        <p>Prisma ORM</p>
        <NewBadge />
      </div>
    ),
  },
};
