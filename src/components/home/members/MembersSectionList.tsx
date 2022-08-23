import React from "react";
import { Member } from "../../../pages/members";
import MembersSectionCarousel from "./MembersSectionCarousel";
import { MembersSectionItem } from "./MembersSectionItem";

interface MembersSectionListProps {
  members: Member[];
}

export const MembersSectionList: React.FC<MembersSectionListProps> = ({ members }) => {
  return (
    <MembersSectionCarousel>
      {members.map((member, index) => (
        <MembersSectionItem itemKey={index} member={member} />
      ))}
    </MembersSectionCarousel>
  );
};