import NewBadge from "../../components/Layouts/Badges/NewBadge";

/* eslint-disable import/no-anonymous-default-export */
export default {
  prisma: {
    title: (
      <div className="flex items-center w-full justify-between relative">
        <p>Prisma ORM</p>
        <NewBadge />
      </div>
    ),
  },
};
