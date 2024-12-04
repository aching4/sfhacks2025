import type * as aboutUsTypes from "../types";
import Avatar from "./Avatar";

interface TeamCardProps {
	team: aboutUsTypes.team;
	members: aboutUsTypes.member[];
}

export default function TeamCard({ team, members }: TeamCardProps) {
	return (
		<div>
			<div className="text-4xl font-bold pl-4">
				{team.name}
			</div>
			<div className="flex flex-wrap">
				{team.memberIndices.map((memberIndex) => (
					<Avatar member={members[memberIndex]} />
				))}
			</div>
		</div>
	);
}
