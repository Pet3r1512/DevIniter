import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="lg:hidden w-1/3">
        <Menu size={24} />
      </DrawerTrigger>
      <DrawerContent className="lg:hidden h-[100dvh] w-2/3"></DrawerContent>
    </Drawer>
  );
}
