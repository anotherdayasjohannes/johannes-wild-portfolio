import { FamilyFooter, FamilyHeader } from "@/components/family/FamilyFrame";
import { Tiles } from "@/components/family/Tiles";
import { family } from "@/content/family";

/** wirwilden.de start page: four tiles, one colour per person. */
export default function FamilyPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <FamilyHeader />
      <h1 className="sr-only">{family.title}</h1>
      <Tiles members={family.members} label={family.gridLabel} />
      <div className="pt-5">
        <FamilyFooter />
      </div>
    </div>
  );
}
