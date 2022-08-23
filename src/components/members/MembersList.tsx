import React from "react";
import { Member } from "../../pages/members";
import { MemberItem } from "./MemberItem";
import MembersCarousel from "./MembersCarousel";

interface MembersListProps {
  members: Member[];
}

export const MembersList = ({ members } : MembersListProps) => {
  return (
    <MembersCarousel>
      {members.map((member, index) => (
        <MemberItem member={member} itemKey={index}/>
      ))}
    </MembersCarousel>
  );
};